import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './components/AuthProvider'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Devotionals from './pages/Devotionals'
import Sermons from './pages/Sermons'
import Events from './pages/Events'
import Gallery from './pages/Gallery'
import Testimonials from './pages/Testimonials'
import Join from './pages/Join'
import PrayerRequests from './pages/PrayerRequests'
import AdminDashboard from './pages/AdminDashboard'

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/devotionals" element={<Devotionals />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/join" element={<Join />} />
          <Route path="/prayer-requests" element={<PrayerRequests />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  )
}
