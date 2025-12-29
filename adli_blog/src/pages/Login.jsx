import React, { useState } from "react";
import "../css/auth.css";
import '../css/global.css';
function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basit kontrol: kullanıcı adı "admin", şifre "1234" ise başarılı
        if (username === "admin" && password === "1234") {
            setMessage("✅ Giriş başarılı!");
        } else {
            setMessage("❌ Kullanıcı adı veya şifre hatalı.");
        }
    };

    return (
        <div className="boody">
            <h2 style={{ color: "khaki", textAlign: "center" }}>Giriş Yap</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Kullanıcı Adı"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                    Giriş
                </button>
            </form>
            {message && <p style={{ color: "white", marginTop: "10px" }}>{message}</p>}
        </div>
    );
}

export default Login;