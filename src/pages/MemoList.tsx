import React, { useState, useEffect } from 'react';
import { storage } from '../utils/storage';
import { MemoItem, ScheduleEvent, Task } from '../types';
import { Plus, Type, Edit3, Mic, Trash2, Link as LinkIcon, Calendar, CheckSquare, Search, X } from 'lucide-react';
import MemoEditor from '../components/MemoEditor';

const MemoList: React.FC = () => {
    const [memos, setMemos] = useState<MemoItem[]>([]);
    const [events, setEvents] = useState<ScheduleEvent[]>([]);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [showEditor, setShowEditor] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [linkingMemoId, setLinkingMemoId] = useState<string | null>(null);
    const [editingMemoId, setEditingMemoId] = useState<string | null>(null);

    useEffect(() => {
        setMemos(storage.getMemos());
        setEvents(storage.getEvents());
        setTasks(storage.getTasks());
    }, []);

    const saveMemos = (newMemos: MemoItem[]) => {
        setMemos(newMemos);
        storage.saveMemos(newMemos);
    };

    const handleDelete = (id: string) => {
        if (confirm('このメモを削除しますか？')) {
            saveMemos(memos.filter(m => m.id !== id));
        }
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

    return (
        <div className="memo-list-page">
            <header className="page-header">
                <h1>メモ一覧</h1>
                <div className="header-actions">
                    <div className="search-bar">
                        <Search size={18} />
                        <input
                            type="text"
                            placeholder="メモを検索..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <button className="primary-btn" onClick={() => setShowEditor(true)}>
                        <Plus size={18} /> 新規メモ
                    </button>
                </div>
            </header>

            <div className="memo-grid">
                {filteredMemos.map(memo => (
                    <div key={memo.id} className="memo-card">
                        <div className="memo-card-header">
                            <span className="memo-type">
                                {memo.type === 'text' && <Type size={14} />}
                                {memo.type === 'voice' && <Mic size={14} />}
                                {memo.type === 'text' ? 'テキスト' : '音声'}
                            </span>
                            <span className="memo-date">{new Date(memo.createdAt).toLocaleDateString()}</span>
                            <button className="delete-btn" onClick={() => handleDelete(memo.id)}><Trash2 size={14} /></button>
                        </div>
                        <div className="memo-card-body" onClick={() => memo.type === 'text' && setEditingMemoId(memo.id)}>
                            {memo.type === 'text' && (
                                <div className="text-body">
                                    <p>{memo.content}</p>
                                    <div className="edit-hint"><Edit3 size={10} /> タップして編集</div>
                                </div>
                            )}
                            {memo.type === 'voice' && <div className="voice-placeholder">音声メモ (再生可能)</div>}
                        </div>
                        <div className="memo-card-footer">
                            <div className="link-status">
                                {getLinkedName(memo) ? (
                                    <span className="linked-badge">
                                        <LinkIcon size={12} /> {getLinkedName(memo)}
                                        <button className="unlink-btn" onClick={() => handleLink(memo.id, undefined, undefined)}><X size={10} /></button>
                                    </span>
                                ) : (
                                    <button className="link-btn" onClick={() => setLinkingMemoId(memo.id)}>
                                        <LinkIcon size={12} /> スケジュールに紐づける
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {(showEditor || editingMemoId) && (
                <MemoEditor
                    memos={memos}
                    onSave={(newMemos) => {
                        saveMemos(newMemos);
                        setEditingMemoId(null);
                        setShowEditor(false);
                    }}
                    onClose={() => {
                        setEditingMemoId(null);
                        setShowEditor(false);
                    }}
                />
            )}

            {linkingMemoId && (
                <div className="modal-overlay">
                    <div className="modal-content link-modal">
                        <h3>紐づけ先を選択</h3>
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
                .memo-list-page { display: flex; flex-direction: column; gap: 2rem; max-width: 1000px; margin: 0 auto; }
                .search-bar { display: flex; align-items: center; gap: 0.5rem; background: #1e293b; padding: 0.5rem 1rem; border-radius: 20px; border: 1px solid #334155; }
                .search-bar input { background: none; border: none; color: white; outline: none; width: 200px; }
                
                .memo-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; }
                .memo-card { background: var(--bg-card); border: 1px solid #334155; border-radius: 12px; padding: 1.25rem; display: flex; flex-direction: column; gap: 1rem; }
                .memo-card-header { display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem; color: var(--text-muted); }
                .memo-type { display: flex; align-items: center; gap: 0.4rem; }
                .memo-card-body { flex: 1; overflow: hidden; cursor: pointer; }
                .text-body { position: relative; }
                .edit-hint { position: absolute; bottom: -1rem; right: 0; font-size: 0.6rem; color: var(--primary); opacity: 0; transition: opacity 0.2s; }
                .memo-card-body:hover .edit-hint { opacity: 1; }
                .memo-card-body p { margin: 0; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; }
                
                .linked-badge { background: rgba(59,130,246,0.1); color: var(--primary); padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem; display: flex; align-items: center; gap: 0.4rem; }
                .link-btn { background: none; border: 1px dashed #334155; color: var(--text-muted); padding: 0.4rem 0.8rem; border-radius: 6px; font-size: 0.75rem; cursor: pointer; width: 100%; }
                .unlink-btn { background: none; border: none; color: var(--text-muted); padding: 2px; }
                
                .link-modal { max-width: 400px; max-height: 80vh; overflow-y: auto; }
                .link-targets { display: flex; flex-direction: column; gap: 0.5rem; margin: 1rem 0; }
                .target-btn { text-align: left; padding: 0.75rem; background: #1e293b; border: 1px solid #334155; border-radius: 8px; color: white; display: flex; align-items: center; gap: 0.75rem; }
                .target-btn:hover { background: #334155; }
            `}</style>
        </div>
    );
};

export default MemoList;
