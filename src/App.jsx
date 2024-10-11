import { useState } from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import TopSection from './components/TopSection.jsx'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<TopSection />} />
      </Routes>
    </Router>
  )
}

export default App
