import React, { useState, useRef } from 'react';
import { MemoItem, MemoType } from '../types';
import { Type, Edit3, Mic, Save, Trash2, X, Play, Square } from 'lucide-react';
import { db } from '../utils/db';

interface MemoEditorProps {
    memos: MemoItem[];
    onSave: (memos: MemoItem[]) => void;
    onClose: () => void;
}

const MemoEditor: React.FC<MemoEditorProps> = ({ memos, onSave, onClose }) => {
    const [editingMemo, setEditingMemo] = useState<Partial<MemoItem> | null>(null);

    // 手書き用
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState(false);

    // 音声用
    const [isRecording, setIsRecording] = useState(false);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);

    const startNewMemo = (type: MemoType) => {
        const newItem: Partial<MemoItem> = {
            id: Date.now().toString(),
            type,
            content: '',
            createdAt: new Date().toISOString()
        };
        setEditingMemo(newItem);
    };

    const handleSaveMemo = async () => {
        if (!editingMemo) return;

        let content = editingMemo.content || '';

        if (editingMemo.type === 'handwriting' && canvasRef.current) {
            content = canvasRef.current.toDataURL();
        }

        const finalMemo = { ...editingMemo, content } as MemoItem;
        onSave([...memos, finalMemo]);
        setEditingMemo(null);
    };

    const handleDeleteMemo = (id: string) => {
        if (confirm('このメモを削除しますか？')) {
            onSave(memos.filter(m => m.id !== id));
        }
    };

    // 手書きロジック
    const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
        setIsDrawing(true);
        draw(e);
    };

    const stopDrawing = () => {
        setIsDrawing(false);
        const ctx = canvasRef.current?.getContext('2d');
        ctx?.beginPath();
    };

    const draw = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDrawing || !canvasRef.current) return;
        const ctx = canvasRef.current.getContext('2d');
        if (!ctx) return;

        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#ffffff';

        const rect = canvasRef.current.getBoundingClientRect();
        let x, y;
        if ('touches' in e) {
            x = e.touches[0].clientX - rect.left;
            y = e.touches[0].clientY - rect.top;
        } else {
            x = e.clientX - rect.left;
            y = e.clientY - rect.top;
        }

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
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
                <div className="memo-header">
                    <h3>個別メモ・記録</h3>
                    <button className="close-btn" onClick={onClose}><X size={20} /></button>
                </div>

                <div className="memo-types-bar">
                    <button onClick={() => startNewMemo('text')} title="テキスト"><Type size={18} /></button>
                    <button onClick={() => startNewMemo('handwriting')} title="手書き"><Edit3 size={18} /></button>
                    <button onClick={() => startNewMemo('voice')} title="音声"><Mic size={18} /></button>
                </div>

                <div className="memos-list">
                    {memos.length > 0 ? (
                        memos.map(memo => (
                            <div key={memo.id} className="memo-item-card">
                                <div className="memo-meta">
                                    <span className="memo-type-icon">
                                        {memo.type === 'text' && <Type size={14} />}
                                        {memo.type === 'handwriting' && <Edit3 size={14} />}
                                        {memo.type === 'voice' && <Mic size={14} />}
                                    </span>
                                    <span className="memo-date">{new Date(memo.createdAt).toLocaleString()}</span>
                                    <button className="del-btn-tiny" onClick={() => handleDeleteMemo(memo.id)}><Trash2 size={12} /></button>
                                </div>
                                <div className="memo-body">
                                    {memo.type === 'text' && <p>{memo.content}</p>}
                                    {memo.type === 'handwriting' && <img src={memo.content} alt="handwriting" className="memo-hw-img" />}
                                    {memo.type === 'voice' && <button className="voice-play-btn"><Play size={14} /> 音声を再生</button>}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="empty-state">メモはまだありません。</div>
                    )}
                </div>

                {editingMemo && (
                    <div className="edit-area">
                        <div className="edit-header">
                            <span>{editingMemo.type === 'text' ? 'テキストメモ' : editingMemo.type === 'handwriting' ? '手書きメモ' : '音声録音'}</span>
                        </div>
                        <div className="edit-body">
                            {editingMemo.type === 'text' && (
                                <textarea
                                    autoFocus
                                    value={editingMemo.content}
                                    onChange={e => setEditingMemo({ ...editingMemo, content: e.target.value })}
                                    placeholder="ここにメモを入力..."
                                />
                            )}
                            {editingMemo.type === 'handwriting' && (
                                <div className="canvas-wrapper">
                                    <canvas
                                        ref={canvasRef}
                                        width={400}
                                        height={300}
                                        onMouseDown={startDrawing}
                                        onMouseMove={draw}
                                        onMouseUp={stopDrawing}
                                        onMouseLeave={stopDrawing}
                                        onTouchStart={startDrawing}
                                        onTouchMove={draw}
                                        onTouchEnd={stopDrawing}
                                    />
                                    <button className="clear-btn" onClick={() => {
                                        const ctx = canvasRef.current?.getContext('2d');
                                        ctx?.clearRect(0, 0, 400, 300);
                                    }}>クリア</button>
                                </div>
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
                            <button className="cancel-btn" onClick={() => setEditingMemo(null)}>キャンセル</button>
                            <button className="save-btn" onClick={handleSaveMemo} disabled={!editingMemo.content && editingMemo.type !== 'handwriting'}>
                                <Save size={16} /> メモを保存
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <style>{`
                .memo-editor-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center; z-index: 2000; padding: 1rem; }
                .memo-editor-content { background: #1e293b; width: 100%; max-width: 500px; border-radius: 12px; display: flex; flex-direction: column; max-height: 90vh; }
                .memo-header { padding: 1rem; border-bottom: 1px solid #334155; display: flex; justify-content: space-between; align-items: center; }
                .memo-types-bar { display: flex; padding: 0.75rem; gap: 1rem; border-bottom: 1px solid #334155; justify-content: center; }
                .memo-types-bar button { background: #334155; border: none; color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
                .memo-types-bar button:hover { background-color: var(--primary); }
                
                .memos-list { flex: 1; overflow-y: auto; padding: 1rem; display: flex; flex-direction: column; gap: 1rem; }
                .memo-item-card { background: rgba(255,255,255,0.03); border: 1px solid #334155; border-radius: 8px; padding: 0.75rem; }
                .memo-meta { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.7rem; color: var(--text-muted); }
                .memo-hw-img { max-width: 100%; border-radius: 4px; background: #000; }
                
                .edit-area { position: absolute; bottom: 0; left: 0; right: 0; background: #0f172a; border-top: 2px solid var(--primary); border-radius: 12px 12px 0 0; padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; z-index: 2100; }
                .edit-body textarea { width: 100%; height: 120px; background: #1e293b; color: white; border: 1px solid #334155; border-radius: 8px; padding: 0.5rem; }
                .canvas-wrapper { background: black; border-radius: 8px; position: relative; }
                canvas { width: 100%; height: auto; touch-action: none; cursor: crosshair; }
                .voice-area { display: flex; flex-direction: column; align-items: center; gap: 1rem; padding: 2rem 0; }
                
                .pulse { animation: pulse-red 1.5s infinite; }
                @keyframes pulse-red { 0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); } 70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); } 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); } }
            `}</style>
        </div>
    );
};

export default MemoEditor;
