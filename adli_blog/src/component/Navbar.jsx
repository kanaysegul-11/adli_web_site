import React from 'react'
import { Link } from 'react-router-dom'
import '../css/site.css'

function Navbar() {
    return (

        <nav className='header' >
            <Link to="/" >Anasayfa</Link>
            <Link to="/articles" >Makaleler</Link>
            <Link to="/dashboard" >Dashboard</Link>
            <Link to="project" >Proje Fikirleri</Link>
            <Link to="/tools" >Kullanılan Araçlar</Link>
            <Link to="/about" >Hakkımızda</Link>
            <Link to="/login" >Giriş</Link>
            <Link to="/register">Kayıt</Link>
        </nav>

    )
}

export default Navbar