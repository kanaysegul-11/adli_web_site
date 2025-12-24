import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Articles from './pages/Articles'
import Dashboard from './pages/Dashboard'
import Project from './pages/Projects'
import ToolsPage from './pages/ToolsPage'
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register'
import Footer from './component/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/project' element={<Project />} />
        <Route path='/tool' element={<ToolsPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
