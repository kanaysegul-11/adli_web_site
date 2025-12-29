import React from 'react'
import { Link } from 'react-router-dom'
import '../css/footer.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

function Footer() {
    return (
        <footer className='footer' >
            <div className="container text-md-start text-center mt-3">
                <div className="row">

                    <div className="col-md-4 ">
                        <h5 className="text-uppercase fw-bold mb-3">Adli Bilişim Platformu</h5>
                        <p>Adli bilişim ve siber güvenlik alanında uzman ekibimiz, dijital delil inceleme, olay müdahalesi ve güvenlik danışmanlığı hizmetleri sunmaktadır.</p>
                        <p className="small " style={{ color: "white" }}>© 2025 Adli Bilişim Platformu - Tüm Hakları Saklıdır.</p>
                    </div>


                    <div className="col-md-4 mb-4">
                        <h5 className="text-uppercase fw-bold mb-3">İletişim</h5>
                        <ul className="list-unstyled">
                            <li><i className="bi bi-geo-alt-fill me-2"></i>Üsküdar, İstanbul, Türkiye</li>
                            <li><i className="bi bi-envelope-fill me-2"></i><a href="mailto:info@adlibilisim.com" className="text-light text-decoration-none">info@adlibilisim.com</a></li>
                            <li><i className="bi bi-telephone-fill me-2"></i><a href="tel:+905555555555" className="text-light text-decoration-none">+90 555 555 55 55</a></li>
                        </ul>
                    </div>


                    <div className="col-md-4 mb-4">
                        <h5 className="text-uppercase fw-bold mb-3">Bağlantılar</h5>
                        <ul className="list-unstyled">
                            <li>  <Link className="text-light text-decoration-none" to="project" >Proje Fikirleri</Link></li>
                            <li><Link className="text-light text-decoration-none" to="/articles" >Makaleler</Link></li>
                            <li><Link className="text-light text-decoration-none" to="/about" >Hakkımızda</Link></li>
                        </ul>
                    </div>
                </div>


                <div className="row mt-0 justify-content-center">
                    <div className="col-auto logo-social">
                        <a href="https://www.facebook.com/" className="text-light me-3">
                            <i className="bi bi-facebook fs-5 "></i></a>
                        <a href="https://x.com/?lang=tr" className="text-light me-3">
                            <i className="bi bi-twitter fs-5"></i></a>
                        <a href="https://www.instagram.com/" className="text-light me-3">
                            <i className="bi bi-instagram fs-5"></i></a>
                        <a href="https://tr.linkedin.com/" className="text-light me-3">
                            <i className="bi bi-linkedin fs-5"></i></a>
                        <a href="https://github.com/" className="text-light">
                            <i className="bi bi-github fs-5"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
