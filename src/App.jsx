import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import AboutPage from './components/pages/About'
import HomePage from './components/pages/Home'
import ContactPage from './components/pages/Contact'
import MenuPage from './components/pages/Menu'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/ourstory' element={<AboutPage />} />
        <Route path='/menu' element={<MenuPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App