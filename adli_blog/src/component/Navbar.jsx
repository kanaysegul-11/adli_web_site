import React from 'react'
import { Link } from 'react-router-dom'
import '../css/site.css'

function Navbar() {
    return (
        <nav className='header-navbar' >
            <Link to="/" style={{ marginRight: "1rem", color: "#f1f1f1ff", textDecoration: "none" }}>Anasayfa</Link>
            <Link to="/articles" style={{ marginRight: "1rem", color: "#f1f1f1ff", textDecoration: "none" }}>Makaleler</Link>
            <Link to="/dashboard" style={{ marginRight: "1rem", color: "#f1f1f1ff", textDecoration: "none" }}>Dashboard</Link>
            <Link to="project" style={{ marginRight: "1rem", color: "#f1f1f1ff", textDecoration: "none" }}>Proje Fikirleri</Link>
            <Link to="/tools" style={{ marginRight: "1rem", color: "#f1f1f1ff", textDecoration: "none" }}>Kullanılan Araçlar</Link>
            <Link to="/about" style={{ marginRight: "1rem", color: "#f1f1f1ff", textDecoration: "none" }}>Hakkımızda</Link>
            <Link to="/login" style={{ marginRight: "1rem", color: "#f1f1f1ff", textDecoration: "none" }}>Giriş</Link>
            <Link to="/register" style={{ color: "#f1f1f1ff", textDecoration: "none" }}>Kayıt</Link>
        </nav>
    )
}

export default Navbar