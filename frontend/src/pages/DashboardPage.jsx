import { MessageSquarePlus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { chatApi } from '../api/endpoints'
import OnboardingTour from '../components/OnboardingTour'
import { useAuth } from '../context/AuthContext'

export default function DashboardPage() {
  const { user } = useAuth()
  const navigate = useNavigate()

  async function startNewChat() {
    const res = await chatApi.createConversation(null)
    navigate(`/chat/${res.data.id}`)
  }

  return (
    <>
      <div className="topbar">
        <h1>Dashboard</h1>
      </div>
      <div className="page-body">
        <OnboardingTour />
        <div className="card" style={{ maxWidth: 640 }}>
          <h2 style={{ marginTop: 0, letterSpacing: '-0.02em' }}>Welcome, {user?.name}</h2>
          <p className="helper-text" style={{ fontSize: 14, lineHeight: 1.6 }}>
            Ask questions about attendance rules, exam schedules, scholarships, hostel procedures, placement
            eligibility, and other official college documents. Answers are grounded in uploaded college
            documents and include source references.
          </p>
          <button className="btn btn-primary" onClick={startNewChat}>
            <MessageSquarePlus size={16} />
            Start a new chat
          </button>
        </div>
      </div>
    </>
  )
}
