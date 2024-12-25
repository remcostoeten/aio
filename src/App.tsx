import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LoginPage } from '@/features/auth'
import { AuthProvider } from '@/shared/context/auth-context'

export default function App() {
  console.log('App rendering')
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}
