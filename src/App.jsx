import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './pages/Menu'

// Import all pages
// import Frontpage from './pages/Frontpage'
// import Login from './pages/Login'
// import Signup from './pages/Signup'
// import Feed from './pages/Feed'
// import Explore from './pages/Explore'
import Notification from './pages/Notification'
// import Message from './pages/Message'
// import Profile from './pages/Profile'
// import Post from './pages/Post'
// import Story from './pages/Story'
// import Viewstory from './pages/Viewstory'
// import Settings from './pages/Settings'
// import Helpcentre from './pages/Helpcentre'
// import Admin from './pages/Admin'

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        {/* <Route path="/" element={<Frontpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/explore" element={<Explore />} /> */}
        <Route path="/Notification" element={<Notification />} />
        {/* <Route path="/messages" element={<Message />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/post" element={<Post />} />
        <Route path="/story" element={<Story />} />
        <Route path="/viewstory" element={<Viewstory />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/help" element={<Helpcentre />} />
        <Route path="/admin" element={<Admin />} /> */}
      </Routes>
    </Router>
    </>
  )
}

export default App