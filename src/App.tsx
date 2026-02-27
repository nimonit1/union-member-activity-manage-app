import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import TaskList from './pages/TaskList'
import Calendar from './pages/Calendar'
import TravelExpenses from './pages/TravelExpenses'
import SettingsPage from './pages/Settings'
import { googleDrive } from './utils/googleDrive'

/**
 * 労働組合 役員活動管理アプリ
 * メインコンポーネント
 */
function App() {
    useEffect(() => {
        // Google Drive API の初期化
        googleDrive.init();
    }, []);

    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/tasks" element={<TaskList />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/travel" element={<TravelExpenses />} />
                    <Route path="/settings" element={<SettingsPage />} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default App
