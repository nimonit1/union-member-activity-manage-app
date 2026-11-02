import React, { useState, useEffect } from 'react';
import { storage } from '../utils/storage';
import { MemoItem, ScheduleEvent, Task } from '../types';
import { Plus, Type, Mic, Trash2, Link as LinkIcon, Calendar, CheckSquare, Search, SearchX, StickyNote } from 'lucide-react';
import MemoEditor from '../components/MemoEditor';
import ConfirmDialog, { useConfirm } from '../components/ConfirmDialog';
import { buttonProps } from '../utils/a11y';
import { useModal } from '../utils/useModal';
import EmptyState from '../components/EmptyState';

const MemoList: React.FC = () => {
    const [memos, setMemos] = useState<MemoItem[]>([]);
    const [events, setEvents] = useState<ScheduleEvent[]>([]);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [showEditor, setShowEditor] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [linkingMemoId, setLinkingMemoId] = useState<string | null>(null);
    const [editingMemoId, setEditingMemoId] = useState<string | null>(null);
    const { confirmDialogProps, confirm } = useConfirm();

    useEffect(() => {
        setMemos(storage.getMemos());
        setEvents(storage.getEvents());
        setTasks(storage.getTasks());
    }, []);

    const stripHtml = (html: string) => {
        if (!html) return '';
        // タグを除去し、HTMLエンティティを最小限デコード
        return html
            .replace(/<[^>]*>?/gm, '')
            .replace(/&nbsp;/g, ' ')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;/g, '&');
    };

    const saveMemos = (newMemos: MemoItem[]) => {
        setMemos(newMemos);
        storage.saveMemos(newMemos);
    };

    const handleCloseEditor = () => {
        setEditingMemoId(null);
        setShowEditor(false);
    };

    const handleDelete = async (id: string) => {
        const ok = await confirm({ title: 'メモを削除', message: 'このメモを削除しますか？この操作は元に戻せません。', confirmLabel: '削除する' });
        if (ok) saveMemos(memos.filter(m => m.id !== id));
    };

    const handleLink = (memoId: string, eventId?: string, taskId?: string) => {
        const newMemos = memos.map(m => {
            if (m.id === memoId) {
                return { ...m, linkedEventId: eventId, linkedTaskId: taskId };
            }
            return m;
        });
        saveMemos(newMemos);
        setLinkingMemoId(null);
    };

    const filteredMemos = memos.filter(m =>
        (m.title || '').toLowerCase().includes(searchQuery.toLowerCase()) || 
        m.content.toLowerCase().includes(searchQuery.toLowerCase())
    ).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    const getLinkedName = (memo: MemoItem) => {
        if (memo.linkedEventId) {
            return events.find(e => e.id === memo.linkedEventId)?.title || '不明なイベント';
        }
        if (memo.linkedTaskId) {
            return tasks.find(t => t.id === memo.linkedTaskId)?.title || '不明なタスク';
        }
        return null;
    };

    // 紐づけ先選択モーダル: Esc で閉じる / 背面スクロール固定 / フォーカス復帰
    useModal(!!linkingMemoId, () => setLinkingMemoId(null));

    return (
        <div className="memo-list-page">
            <header className="page-header">
                <h1>メモ一覧</h1>
                <div className="header-actions">
                    <div className="search-bar">
                        <Search size={18} aria-hidden="true" />
                        <input
                            type="search"
                            aria-label="メモを検索"
                            placeholder="タイトルや内容で検索..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <button className="primary-btn" onClick={() => setShowEditor(true)}>
                        <Plus size={18} /> 新規メモ
                    </button>
                </div>
            </header>

            {filteredMemos.length === 0 && (
                searchQuery ? (
                    <EmptyState icon={<SearchX size={24} />} title="一致するメモがありません" description={`「${searchQuery}」を含むメモは見つかりませんでした。`} />
                ) : (
                    <EmptyState
                        icon={<StickyNote size={24} />}
                        title="メモはまだありません"
                        description="会議の記録や気づきを、テキストや音声で残せます。"
                        action={{ label: '新規メモを作成', onClick: () => setShowEditor(true) }}
                    />
                )
            )}

            <div className="memo-grid">
                {filteredMemos.map(memo => (
                    <div key={memo.id} className="memo-card" {...buttonProps(() => { if (memo.type === 'text') setEditingMemoId(memo.id); })}>
                        <div className="memo-card-header">
                            <span className="memo-type">
                                {memo.type === 'text' && <Type size={14} />}
                                {memo.type === 'voice' && <Mic size={14} />}
                                {memo.type === 'text' ? 'テキスト' : '音声'}
                            </span>
                            <span className="memo-date">{new Date(memo.createdAt).toLocaleDateString()}</span>
                            <button className="delete-btn" onClick={(e) => { e.stopPropagation(); handleDelete(memo.id); }} aria-label={`「${memo.title || '無題'}」を削除`} title="削除"><Trash2 size={14} aria-hidden="true" /></button>
                        </div>
                        <div className="memo-card-body">
                            <h3 className="memo-title">{memo.title || '(無題)'}</h3>
                            {memo.type === 'text' && (
                                <p className="memo-preview">{stripHtml(memo.content)}</p>
                            )}
                            {memo.type === 'voice' && <div className="voice-badge">音声メモ</div>}
                        </div>
                        <div className="memo-card-footer">
                            <div className="link-status">
                                {getLinkedName(memo) && (
                                    <span className="linked-badge">
                                        <LinkIcon size={12} /> {getLinkedName(memo)}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {(showEditor || editingMemoId) && (
                <MemoEditor
                    memos={memos}
                    initialMemoId={editingMemoId}
                    onSave={(newMemos) => saveMemos(newMemos)}
                    onClose={handleCloseEditor}
                />
            )}

            {linkingMemoId && (
                <div className="modal-overlay">
                    <div className="modal-content link-modal" role="dialog" aria-modal="true" aria-labelledby="link-modal-title">
                        <h3 id="link-modal-title">紐づけ先を選択</h3>
                        <div className="link-targets">
                            <h4>スケジュール</h4>
                            {events.slice(0, 10).map(e => (
                                <button key={e.id} className="target-btn" onClick={() => handleLink(linkingMemoId, e.id)}>
                                    <Calendar size={14} /> {e.date} {e.title}
                                </button>
                            ))}
                            <h4>タスク</h4>
                            {tasks.slice(0, 10).map(t => (
                                <button key={t.id} className="target-btn" onClick={() => handleLink(linkingMemoId, undefined, t.id)}>
                                    <CheckSquare size={14} /> {t.title}
                                </button>
                            ))}
                        </div>
                        <button className="close-link-modal" onClick={() => setLinkingMemoId(null)}>キャンセル</button>
                    </div>
                </div>
            )}

            <style>{`
                .memo-list-page { display: flex; flex-direction: column; gap: 2rem; max-width: var(--content-max-width); margin: 0 auto; }
                .search-bar { display: flex; align-items: center; gap: 0.5rem; background: var(--bg-card); padding: 0.5rem 1rem; border-radius: var(--radius-pill); border: 1px solid var(--border); flex: 1; max-width: 320px; }
                .search-bar input { background: none; border: none; color: white; outline: none; flex: 1; min-width: 0; }
                
                .memo-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem; }
                .memo-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 1rem; display: flex; flex-direction: column; gap: 0.75rem; cursor: pointer; transition: all 0.2s; }
                .memo-card:hover { border-color: var(--primary); transform: translateY(-2px); }
                
                .memo-card-header { display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem; color: var(--text-muted); }
                .memo-type { display: flex; align-items: center; gap: 0.4rem; }
                
                .memo-card-body { flex: 1; overflow: hidden; }
                .memo-title { margin: 0; font-size: 1rem; font-weight: 700; color: #fff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
                .memo-preview { margin: 0.25rem 0 0; font-size: 0.8rem; color: var(--text-muted); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; line-height: 1.4; }
                .voice-badge { font-size: 0.75rem; color: var(--primary); font-weight: 600; margin-top: 0.25rem; }
                
                .delete-btn { background: none; border: none; color: var(--text-muted); cursor: pointer; padding: 4px; border-radius: var(--radius-xs); }
                .delete-btn:hover { color: var(--danger); background: rgba(239, 68, 68, 0.1); }

                .linked-badge { background: rgba(59,130,246,0.1); color: var(--primary); padding: 0.25rem 0.5rem; border-radius: var(--radius-xs); font-size: 0.75rem; display: flex; align-items: center; gap: 0.4rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
                
                .link-modal { max-width: 400px; }
                .link-modal h4 { margin-top: 0.75rem; color: var(--text-muted); font-size: 0.85rem; }
                .close-link-modal { width: 100%; min-height: 44px; background: none; border: 1px solid var(--border); color: var(--text-muted); border-radius: var(--radius-md); font-weight: 700; }
                .close-link-modal:hover { background: var(--border); color: var(--text-main); }
                .target-btn { min-height: 44px; }
                @media (max-width: 640px) {
                    .search-bar { max-width: none; flex: 1 1 100%; }
                }
                @media (pointer: coarse) { .delete-btn { min-width: 44px; min-height: 44px; display: inline-flex; align-items: center; justify-content: center; } }
                .link-targets { display: flex; flex-direction: column; gap: 0.5rem; margin: 1rem 0; }
                .target-btn { text-align: left; padding: 0.75rem; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-md); color: white; display: flex; align-items: center; gap: 0.75rem; }
                .target-btn:hover { background: var(--border); }
            `}</style>
            <ConfirmDialog {...confirmDialogProps} />
        </div>
    );
};

export default MemoList;
