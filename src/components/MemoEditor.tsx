import React, { useState, useRef, useEffect } from 'react';
import { MemoItem, MemoType, MemoTemplate } from '../types';
import { 
    Type, Mic, Save, Trash2, X, Square, 
    Bold, Italic, Underline, Strikethrough, 
    Quote, Code, List, ListOrdered, 
    AlignLeft, AlignCenter, AlignRight, AlignJustify,
    Indent, Outdent, Superscript, Subscript,
    Baseline, Highlighter
} from 'lucide-react';
import { db } from '../utils/db';
import { storage } from '../utils/storage';

interface MemoEditorProps {
    memos: MemoItem[];
    onSave: (memos: MemoItem[]) => void;
    onClose: () => void;
    initialMemoId?: string | null;
    defaultLinkedEventId?: string;
    defaultLinkedTaskId?: string;
}

const MemoEditor: React.FC<MemoEditorProps> = ({ memos, onSave, onClose, initialMemoId, defaultLinkedEventId, defaultLinkedTaskId }) => {
    const [editingMemo, setEditingMemo] = useState<Partial<MemoItem> | null>(null);
    const editorRef = useRef<HTMLDivElement>(null);
    const isFirstLoad = useRef(true);

    // 初期表示時に編集中のメモをセット
    useEffect(() => {
        if (isFirstLoad.current) {
            if (initialMemoId) {
                const memo = memos.find(m => m.id === initialMemoId);
                if (memo) setEditingMemo(memo);
            }
            isFirstLoad.current = false;
        }
    }, [initialMemoId, memos]);

    // 音声用
    const [isRecording, setIsRecording] = useState(false);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);
    const [showSavedToast, setShowSavedToast] = useState(false);

    const [templates] = useState(() => storage.getMemoTemplates());

    // 編集メモが切り替わったときにエディタの内容を更新
    useEffect(() => {
        if (editingMemo && editingMemo.type === 'text' && editorRef.current) {
            const content = editingMemo.content || '';
            const html = (content.includes('<') || content.includes('>')) ? content : content.replace(/\n/g, '<br>');
            
            // 初回表示時、または外部（Props）からのID変更時のみ innerHTML を直接更新
            if (editorRef.current.innerHTML !== html) {
                editorRef.current.innerHTML = html;
            }
        }
    }, [editingMemo?.id]);

    const startNewMemo = (type: MemoType) => {
        const newItem: Partial<MemoItem> = {
            id: Date.now().toString(),
            type,
            title: '',
            content: '',
            createdAt: new Date().toISOString(),
            linkedEventId: defaultLinkedEventId,
            linkedTaskId: defaultLinkedTaskId
        };
        setEditingMemo(newItem);
    };

    const handleSaveMemo = async () => {
        try {
            if (!editingMemo) return;

            let content = editingMemo.content || '';
            if (editingMemo.type === 'text' && editorRef.current) {
                content = editorRef.current.innerHTML;
            }

            // 必須項目のチェック
            if (!editingMemo.id || !editingMemo.type) {
                console.error('Invalid memo data', editingMemo);
                return;
            }

            let finalTitle = editingMemo.title || '';
            if (!finalTitle && editingMemo.type === 'text') {
                finalTitle = generateDefaultTitle();
            }

            const finalMemo: MemoItem = {
                id: editingMemo.id as string,
                type: editingMemo.type as 'text' | 'voice',
                title: finalTitle,
                content,
                createdAt: editingMemo.createdAt || new Date().toISOString(),
                linkedEventId: editingMemo.linkedEventId,
                linkedTaskId: editingMemo.linkedTaskId
            };

            // 既存のメモを更新するか新しいメモを追加するか判断
            const exists = memos.some(m => m.id === finalMemo.id);
            let newMemos: MemoItem[];
            if (exists) {
                newMemos = memos.map(m => m.id === finalMemo.id ? finalMemo : m);
            } else {
                newMemos = [...memos, finalMemo];
            }
            
            onSave(newMemos);
            // 保存後も編集状態を維持
            setEditingMemo(finalMemo);
            
            // トースト表示
            setShowSavedToast(true);
            setTimeout(() => setShowSavedToast(false), 2000);
        } catch (error) {
            console.error('Save failed:', error);
            alert('保存に失敗しました');
        }
    };

    const generateDefaultTitle = () => {
        const now = new Date();
        const yyyy = now.getFullYear();
        const mm = (now.getMonth() + 1).toString().padStart(2, '0');
        const dd = now.getDate().toString().padStart(2, '0');
        const todayStr = `${yyyy}${mm}${dd}`;
        const datePrefix = `${yyyy}-${mm}-${dd}`;

        // 正確な連番のために全メモ（storageから取得）をチェック
        const allMemos = storage.getMemos();
        const dayMemos = allMemos.filter((m: MemoItem) => m.createdAt.startsWith(datePrefix));
        
        let maxNn = 0;
        dayMemos.forEach((m: MemoItem) => {
            const match = m.title?.match(/^(\d{8})_(\d{2})_森$/);
            if (match && match[1] === todayStr) {
                const nn = parseInt(match[2], 10);
                if (nn > maxNn) maxNn = nn;
            }
        });
        
        const nextNn = (maxNn + 1).toString().padStart(2, '0');
        return `${todayStr}_${nextNn}_森`;
    };

    const handleDeleteMemo = (id: string) => {
        if (confirm('このメモを削除しますか？')) {
            onSave(memos.filter(m => m.id !== id));
            if (editingMemo?.id === id) setEditingMemo(null);
        }
    };

    const execCmd = (command: string, value: string = '') => {
        try {
            document.execCommand(command, false, value);
            if (editorRef.current) {
                setEditingMemo(prev => prev ? { ...prev, content: editorRef.current!.innerHTML } : null);
            }
        } catch (err) {
            console.error('Command failed:', command, err);
        }
    };

    const applyTemplate = (content: string) => {
        if (editorRef.current) {
            const html = content.replace(/\n/g, '<br>');
            editorRef.current.innerHTML += html;
            setEditingMemo(prev => prev ? { ...prev, content: editorRef.current!.innerHTML } : null);
        }
    };

    // 音声ロジック
    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const recorder = new MediaRecorder(stream);
            mediaRecorderRef.current = recorder;
            audioChunksRef.current = [];

            recorder.ondataavailable = (e) => {
                if (e.data.size > 0) audioChunksRef.current.push(e.data);
            };

            recorder.onstop = async () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
                const id = `voice-${Date.now()}`;
                await db.saveBlob(id, audioBlob);
                setEditingMemo(prev => prev ? { ...prev, content: id } : null);
            };

            recorder.start();
            setIsRecording(true);
        } catch (err) {
            console.error('録音に失敗しました:', err);
            alert('マイクの使用を許可してください。');
        }
    };

    const stopRecording = () => {
        mediaRecorderRef.current?.stop();
        setIsRecording(false);
    };

    return (
        <div className="memo-editor-overlay">
            <div className="memo-editor-content">
                <div className="memo-header-global">
                    <h3>個別メモ・記録</h3>
                    <button className="close-all-btn" onClick={onClose}><X size={20} /></button>
                </div>

                <div className={`memos-sidebar ${editingMemo ? 'hidden' : ''}`}>
                    <div className="memo-types-bar">
                        <button onClick={() => startNewMemo('text')} title="テキスト"><Type size={18} /></button>
                        <button onClick={() => startNewMemo('voice')} title="音声"><Mic size={18} /></button>
                    </div>

                    <div className="memos-list">
                        {memos.length > 0 ? (
                            memos.map(memo => (
                                <div key={memo.id} className="memo-item-card" onClick={() => memo.type === 'text' && setEditingMemo(memo)}>
                                    <div className="memo-meta">
                                        <span className="memo-type-icon">
                                            {memo.type === 'text' && <Type size={14} />}
                                            {memo.type === 'voice' && <Mic size={14} />}
                                        </span>
                                        <span className="memo-date">{new Date(memo.createdAt).toLocaleDateString()}</span>
                                        <button className="del-btn-tiny" onClick={(e) => { e.stopPropagation(); handleDeleteMemo(memo.id); }}><Trash2 size={12} /></button>
                                    </div>
                                    <div className="memo-item-title">{memo.title || '(無題)'}</div>
                                </div>
                            ))
                        ) : (
                            <div className="empty-state">メモはまだありません。</div>
                        )}
                    </div>
                </div>

                {editingMemo && (
                    <div className="edit-area">
                        <div className="edit-header">
                            <span>{editingMemo.type === 'text' ? 'テキストメモ編集' : '音声録音'}</span>
                            <button className="close-editor-btn" onClick={() => setEditingMemo(null)}><X size={18} /></button>
                        </div>
                        <div className="edit-body">
                            {editingMemo.type === 'text' && (
                                <>
                                    <div className="form-group row">
                                        <input 
                                            type="text"
                                            value={editingMemo.title || ''}
                                            onChange={e => setEditingMemo({ ...editingMemo, title: e.target.value })}
                                            placeholder="タイトルを入力 (空なら自動生成)"
                                            className="title-input-inline"
                                        />
                                    </div>

                                    <div className="rich-toolbar">
                                        <div className="toolbar-group">
                                            <button onMouseDown={e => e.preventDefault()} onClick={() => execCmd('bold')} title="太字"><Bold size={16} /></button>
                                            <button onMouseDown={e => e.preventDefault()} onClick={() => execCmd('italic')} title="斜体"><Italic size={16} /></button>
                                            <button onMouseDown={e => e.preventDefault()} onClick={() => execCmd('underline')} title="下線"><Underline size={16} /></button>
                                            <button onMouseDown={e => e.preventDefault()} onClick={() => execCmd('strikeThrough')} title="取り消し線"><Strikethrough size={16} /></button>
                                        </div>
                                        <div className="toolbar-group separator">
                                            <button onMouseDown={e => e.preventDefault()} onClick={() => execCmd('insertUnorderedList')} title="箇条書き"><List size={16} /></button>
                                            <button onMouseDown={e => e.preventDefault()} onClick={() => execCmd('insertOrderedList')} title="番号付きリスト"><ListOrdered size={16} /></button>
                                            <button onMouseDown={e => e.preventDefault()} onClick={() => execCmd('formatBlock', 'blockquote')} title="引用"><Quote size={16} /></button>
                                            <button onMouseDown={e => e.preventDefault()} onClick={() => execCmd('formatBlock', 'pre')} title="コード"><Code size={16} /></button>
                                        </div>
                                        <div className="toolbar-group separator">
                                            <button onMouseDown={e => e.preventDefault()} onClick={() => execCmd('justifyLeft')} title="左寄せ"><AlignLeft size={16} /></button>
                                            <button onMouseDown={e => e.preventDefault()} onClick={() => execCmd('justifyCenter')} title="中央揃え"><AlignCenter size={16} /></button>
                                            <button onMouseDown={e => e.preventDefault()} onClick={() => execCmd('justifyRight')} title="右寄せ"><AlignRight size={16} /></button>
                                            <button onMouseDown={e => e.preventDefault()} onClick={() => execCmd('justifyFull')} title="両端揃え"><AlignJustify size={16} /></button>
                                        </div>
                                        <div className="toolbar-group separator">
                                            <button onMouseDown={e => e.preventDefault()} onClick={() => execCmd('indent')} title="インデント"><Indent size={16} /></button>
                                            <button onMouseDown={e => e.preventDefault()} onClick={() => execCmd('outdent')} title="アウトデント"><Outdent size={16} /></button>
                                            <button onMouseDown={e => e.preventDefault()} onClick={() => execCmd('superscript')} title="上付き"><Superscript size={16} /></button>
                                            <button onMouseDown={e => e.preventDefault()} onClick={() => execCmd('subscript')} title="下付き"><Subscript size={16} /></button>
                                        </div>
                                        <div className="toolbar-group separator">
                                            <label title="文字色" className="color-tool"><Baseline size={16} /><input type="color" onInput={(e) => execCmd('foreColor', (e.target as HTMLInputElement).value)} /></label>
                                            <label title="背景色" className="color-tool"><Highlighter size={16} /><input type="color" onInput={(e) => execCmd('hiliteColor', (e.target as HTMLInputElement).value)} defaultValue="#ffff00" /></label>
                                            <select onChange={(e) => execCmd('fontName', e.target.value)} className="font-select">
                                                <option value="sans-serif">Sans Serif</option>
                                                <option value="serif">Serif</option>
                                                <option value="monospace">Monospace</option>
                                                <option value="cursive">Cursive</option>
                                            </select>
                                            <select onChange={(e) => execCmd('fontSize', e.target.value)} defaultValue="3" className="size-select">
                                                <option value="1">極小</option>
                                                <option value="2">小</option>
                                                <option value="3">標準</option>
                                                <option value="4">中</option>
                                                <option value="5">大</option>
                                                <option value="6">特大</option>
                                            </select>
                                        </div>
                                    </div>

                                    {templates && templates.length > 0 && (
                                        <div className="template-selector-mini">
                                            <div className="template-list">
                                                {templates.map((tpl: MemoTemplate) => (
                                                    <button key={tpl.id} onClick={() => applyTemplate(tpl.content)} className="tpl-btn-tiny">
                                                        {tpl.title}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <div 
                                        ref={editorRef}
                                        className="rich-editor-area"
                                        contentEditable
                                        onBlur={(e) => {
                                            const newContent = e.currentTarget.innerHTML;
                                            setEditingMemo(prev => prev ? { ...prev, content: newContent } : null);
                                        }}
                                        data-placeholder="ここにメモを入力..."
                                        suppressContentEditableWarning={true}
                                    />
                                </>
                            )}
                            {editingMemo.type === 'voice' && (
                                <div className="voice-area">
                                    {isRecording ? (
                                        <button className="recording-btn pulse" onClick={stopRecording}>
                                            <Square size={24} /> 録音停止
                                        </button>
                                    ) : (
                                        <button className="record-start-btn" onClick={startRecording}>
                                            <Mic size={24} /> 録音開始
                                        </button>
                                    )}
                                    {editingMemo.content && <div className="ready-mark">✓ 録音完了</div>}
                                </div>
                            )}
                        </div>
                        <div className="edit-footer">
                            {showSavedToast && <div className="save-toast">保存しました</div>}
                            <button className="save-btn" onClick={handleSaveMemo}>
                                <Save size={16} /> 保存
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <style>{`
                .memo-editor-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center; z-index: 2000; padding: 1rem; }
                .memo-editor-content { background: #1e293b; width: 100%; max-width: 1000px; height: 95vh; border-radius: 12px; display: grid; grid-template-columns: 280px 1fr; overflow: hidden; position: relative; border: 1px solid #334155; }
                
                @media (max-width: 768px) {
                    .memo-editor-content { grid-template-columns: 1fr; margin-top: 1rem; height: 100vh; }
                    .memos-sidebar { display: flex; }
                    .memos-sidebar.hidden { display: none; }
                }

                .memo-header-global { height: 60px; padding: 0 1.5rem; border-bottom: 1px solid #334155; display: flex; justify-content: space-between; align-items: center; grid-column: 1 / -1; background: #0f172a; flex-shrink: 0; }
                .memo-header-global h3 { margin: 0; font-size: 1.1rem; color: #fff; }

                .memos-sidebar { display: flex; flex-direction: column; border-right: 1px solid #334155; overflow: hidden; background: #1e293b; }
                .memo-types-bar { display: flex; padding: 1rem; gap: 1rem; border-bottom: 1px solid #334155; justify-content: center; background: #111827; }
                .memo-types-bar button { background: #1f2937; border: 1px solid #374151; color: white; width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: all 0.2s; }
                .memo-types-bar button:hover { background-color: var(--primary); transform: translateY(-2px); border-color: var(--primary); }
                
                .memos-list { flex: 1; overflow-y: auto; padding: 0.75rem; display: flex; flex-direction: column; gap: 0.5rem; }
                .memo-item-card { background: rgba(255,255,255,0.02); border: 1px solid #334155; border-radius: 8px; padding: 0.75rem; cursor: pointer; transition: all 0.2s; }
                .memo-item-card:hover { border-color: var(--primary); background: rgba(59, 130, 246, 0.05); }
                .memo-meta { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.4rem; font-size: 0.65rem; color: var(--text-muted); }
                .memo-item-title { font-size: 0.85rem; font-weight: 600; color: #e2e8f0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

                .edit-area { flex: 1; background: #0f172a; display: flex; flex-direction: column; overflow: hidden; position: relative; }
                .edit-header { height: 50px; padding: 0 1.5rem; border-bottom: 1px solid #334155; display: flex; justify-content: space-between; align-items: center; background: #111827; flex-shrink: 0; }
                .edit-header span { font-size: 0.85rem; font-weight: 700; color: var(--primary); }

                .edit-body { flex: 1; padding: 1rem; overflow-y: auto; display: flex; flex-direction: column; gap: 1rem; }
                .title-input-inline { background: transparent; border: none; border-bottom: 2px solid #334155; color: white; padding: 0.5rem 0; font-size: 1.25rem; font-weight: 700; width: 100%; outline: none; transition: border-color 0.2s; }
                .title-input-inline:focus { border-color: var(--primary); }

                .rich-toolbar { background: #1e293b; border: 1px solid #334155; border-radius: 8px; padding: 0.5rem; display: flex; flex-wrap: wrap; gap: 0.25rem; align-items: center; position: sticky; top: 0; z-index: 10; }
                .toolbar-group { display: flex; gap: 0.15rem; }
                .toolbar-group.separator { border-left: 1px solid #475569; padding-left: 0.25rem; margin-left: 0.25rem; }
                .rich-toolbar button, .color-tool { background: transparent; border: 1px solid transparent; color: #cbd5e1; width: 32px; height: 32px; border-radius: 4px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; position: relative; }
                .rich-toolbar button:hover, .color-tool:hover { background: #334155; color: #fff; border-color: #475569; }
                .color-tool input { position: absolute; opacity: 0; inset: 0; cursor: pointer; }
                .font-select, .size-select { background: #0f172a; color: #cbd5e1; border: 1px solid #334155; border-radius: 4px; padding: 2px 4px; font-size: 0.75rem; outline: none; }

                .template-selector-mini { background: #111827; padding: 0.5rem; border-radius: 6px; border: 1px solid #334155; }
                .template-list { display: flex; flex-wrap: wrap; gap: 0.4rem; }
                .tpl-btn-tiny { background: #334155; border: 1px solid #475569; color: #94a3b8; font-size: 0.65rem; padding: 2px 8px; border-radius: 4px; cursor: pointer; }
                .tpl-btn-tiny:hover { background: var(--primary); color: #fff; }

                .rich-editor-area { flex: 1; background: #111827; border: 1px solid #334155; border-radius: 8px; padding: 1.5rem; color: #e2e8f0; font-size: 1rem; line-height: 1.6; outline: none; min-height: 400px; overflow-y: auto; position: relative; }
                .rich-editor-area:focus { border-color: var(--primary); box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1); }
                .rich-editor-area:empty:before { content: attr(data-placeholder); color: #64748b; pointer-events: none; position: absolute; }
                .rich-editor-area blockquote { border-left: 4px solid var(--primary); padding-left: 1rem; margin: 1rem 0; color: #94a3b8; font-style: italic; background: rgba(255,255,255,0.02); }
                .rich-editor-area pre { background: #000; padding: 1rem; border-radius: 6px; font-family: 'Courier New', Courier, monospace; overflow-x: auto; margin: 1rem 0; }
                .rich-editor-area ul, .rich-editor-area ol { padding-left: 2rem; margin: 1rem 0; }
                
                .edit-footer { height: 60px; padding: 0 1.5rem; border-top: 1px solid #334155; display: flex; justify-content: flex-end; align-items: center; background: #0f172a; flex-shrink: 0; }
                .save-btn { background: var(--primary); color: white; border: none; padding: 0.6rem 2.5rem; border-radius: 8px; font-weight: 700; display: flex; align-items: center; gap: 0.5rem; cursor: pointer; transition: all 0.2s; }
                .save-btn:hover { filter: brightness(1.1); transform: translateY(-1px); }

                .save-toast { background: var(--success); color: white; padding: 0.4rem 1rem; border-radius: 4px; font-size: 0.8rem; font-weight: 700; animation: fade-in-out 2s forwards; }
                @keyframes fade-in-out {
                    0% { opacity: 0; transform: translateX(10px); }
                    15% { opacity: 1; transform: translateX(0); }
                    85% { opacity: 1; transform: translateX(0); }
                    100% { opacity: 0; transform: translateX(-10px); }
                }

                .voice-area { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2rem; }
                .record-start-btn, .recording-btn { width: 120px; height: 120px; border-radius: 50%; border: none; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.5rem; font-size: 0.8rem; font-weight: 700; cursor: pointer; transition: all 0.3s; }
                .record-start-btn { background: #334155; color: white; }
                .record-start-btn:hover { background: var(--primary); }
                .recording-btn { background: var(--danger); color: white; }
                
                .pulse { animation: pulse-red 1.5s infinite; }
                @keyframes pulse-red { 0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); } 70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); } 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); } }
            `}</style>
        </div>
    );
};

export default MemoEditor;
