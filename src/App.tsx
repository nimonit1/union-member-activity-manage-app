import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import TaskList from './pages/TaskList'
import Calendar from './pages/Calendar'

/**
 * 労働組合 役員活動管理アプリ
 * メインコンポーネント
 */
function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/tasks" element={<TaskList />} />
                    <Route path="/calendar" element={<Calendar />} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default App
