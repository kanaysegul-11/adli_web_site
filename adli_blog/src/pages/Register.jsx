import React, { useState } from "react";
import "../css/auth.css";
import '../css/global.css'

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username && password && email) {
            setMessage("✅ Kayıt başarılı! Artık giriş yapabilirsiniz.");
        } else {
            setMessage("❌ Lütfen tüm alanları doldurun.");
        }
    };

    return (
        <div className="boody">
            <h2 style={{ color: "khaki", textAlign: "center" }}>Kayıt Ol</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Kullanıcı Adı"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
                />
                <input
                    type="email"
                    placeholder="E-posta"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
                />
                <input
                    type="password"
                    placeholder="Şifre"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
                />
                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "10px",
                        backgroundColor: "khaki",
                        border: "none",
                        borderRadius: "5px",
                        fontWeight: "bold"
                    }}
                >
                    Kayıt Ol
                </button>
            </form>
            {message && <p style={{ color: "white", marginTop: "10px" }}>{message}</p>}
        </div>
    );
}

export default Register;