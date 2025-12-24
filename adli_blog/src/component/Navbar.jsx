import React from 'react'
import { Link } from 'react-router-dom'
import '../css/site.css'

function Navbar() {
    return (

        <nav className='header'>
            <div className='nav-logo'>
                <Link to="/"><img src="/src/images/logo.jpg" alt="" /></Link>
            </div>
            <div className='nav-links'>
                <Link to="/" >Anasayfa</Link>
                <Link to="/tool" >Kullanılan Araçlar</Link>
                <Link to="project" >Proje Fikirleri</Link>
                <Link to="/articles" >Makaleler</Link>
                <Link to="/dashboard" >Dashboard</Link>
                <Link to="/about" >Hakkımızda</Link>
                <Link to="/login" >Giriş</Link>
                <Link to="/register">Kayıt</Link>
            </div>


        </nav>
    )
}

export default Navbar