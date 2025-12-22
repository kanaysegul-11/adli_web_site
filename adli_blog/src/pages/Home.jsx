// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
    // Yorumları localStorage'dan yükle
    const [comments, setComments] = useState(() => {
        try {
            const saved = localStorage.getItem("comments");
            return saved ? JSON.parse(saved) : [];
        } catch {
            return [];
        }
    });

    const [newComment, setNewComment] = useState("");
    const [replyText, setReplyText] = useState({});

    // Yorumlar değiştikçe localStorage'a yaz
    useEffect(() => {
        localStorage.setItem("comments", JSON.stringify(comments));
    }, [comments]);

    // Yeni yorum ekleme
    const handleAddComment = (e) => {
        e.preventDefault();
        if (!newComment.trim()) return;
        const newObj = {
            id: Date.now(),
            user: "Anonim",
            text: newComment,
            replies: []
        };
        setComments([...comments, newObj]);
        setNewComment("");
    };

    // Cevap ekleme
    const handleAddReply = (commentId) => {
        if (!replyText[commentId]?.trim()) return;
        const updated = comments.map(a =>
            a.id === commentId
                ? {
                    ...a, replies: [...a.replies, {
                        user: "Anonim",
                        text: replyText[commentId]
                    }]
                }
                : a
        );
        setComments(updated);
        setReplyText({ ...replyText, [commentId]: "" });
    };
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/rss_proxy/")
            .then(res => res.json())
            .then(data => setNews(data));
    }, []);


    return (
        <div style={{
            maxWidth: "100%", margin: "0 auto", padding: "20px", backgroundColor: "#252525ff", color: "#fff",

        }}>
            <div style={{
                maxWidth: "1000px", margin: "0 auto", padding: "20px", backgroundColor: "#252525ff", color: "#fff",

            }}>
                {/* Carousel */}
                <div id="mainCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="src/images/adli-bilisim.jpg" className="d-block w-100 rounded" style={{ height: "400px", objectFit: "cover" }} alt="Adli Bilişim" />
                        </div>
                        <div className="carousel-item">
                            <img src="src/images/forensic-tools.jpg" className="d-block w-100 rounded" style={{ height: "400px", objectFit: "cover" }} alt="RAM Analizi" />
                        </div>
                        <div className="carousel-item">
                            <img src="src/images/forensic.jpg" className="d-block w-100 rounded" style={{ height: "400px", objectFit: "cover" }} alt="Network Forensics" />
                        </div>
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: " center",
                    alignItems: "center"
                }}>
                    {/* Başlık ve içerikler */}
                    <h3 style={{ textAlign: "center", color: "khaki" }}>Adli Bilişim (Digital Forensic) Nedir?</h3>
                    <p style={{ fontSize: "18px" }}>
                        Adli bilişim, elektromanyetik ve elektro-optik ortamlarda muhafaza edilen veya bu ortamlarca iletilen ses, görüntü, veri, bilgi veya bunların birleşiminden oluşan her türlü bilişim nesnesinin, mahkemede sayısal delil niteliği taşıyacak şekilde tanımlanması, elde edilmesi, saklanması, incelenmesi ve mahkemeye sunulması çalışmalarının bütünüdür.
                    </p>

                    <h3 style={{ marginTop: "30px", color: "khaki" }}>Adli Bilişim İnceleme Süreçleri</h3>
                    <ul>
                        <li><strong>İlk Müdahale:</strong> Dijital delillerin belirlenmesi ve sistem güvenliğinin sağlanması.</li>
                        <li><strong>Adli Kopya Elde Etme:</strong> Delil bütünlüğünü bozmayacak şekilde imaj alınması.</li>
                        <li><strong>İnceleme:</strong> Kopyalar üzerinden teknik analiz yapılması.</li>
                        <li><strong>Raporlama:</strong> Bulguların anlaşılır biçimde sunulması.</li>
                    </ul>

                    <h3 style={{ marginTop: "30px", color: "khaki" }}>Adli Bilişim Türleri</h3>
                    <ul>
                        <li><strong>Bilgisayar Adli Bilişimi:</strong> Silinen dosyaların kurtarılması, log dosyalarının incelenmesi.</li>
                        <li><strong>Mobil Cihaz Adli Bilişimi:</strong> Uygulama kalıntıları, silinen dosyalar.</li>
                        <li><strong>Memory Forensics:</strong> RAM üzerindeki uçucu verilerin analizi.</li>
                        <li><strong>Network Forensics:</strong> Ağ trafiği, saldırı analizi.</li>
                    </ul>

                    <h3 style={{ marginTop: "30px", color: "khaki" }}>Adli Bilişimde Kullanılan Araçlar</h3>
                    <h5>Yazılımsal Araçlar</h5>
                    <ul>
                        <li><strong>Autopsy:</strong> Açık kaynaklı disk imajı inceleme.</li>
                        <li><strong>FTK:</strong> Dijital delil analizinde kullanılır.</li>
                        <li><strong>EnCase:</strong> En yaygın kullanılan analiz aracı.</li>
                    </ul>
                    <h5>Donanımsal Araçlar</h5>
                    <ul>
                        <li><strong>Write Blocker:</strong> Sabit disklere müdahale etmeden kopyalama sağlar.</li>
                        <li><strong>Adli Kopyalama Cihazları:</strong> Disk imajı alma süreçlerinde kullanılır.</li>
                    </ul>
                </div>
                {/* Haberler */}
                <div>
                    <h4 style={{ backgroundColor: "black", color: "khaki", padding: "10px" }}>
                        📰 Milliyet Teknoloji Haberleri
                    </h4>
                    <div style={{
                        backgroundColor: "black",
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                        gap: "1.5rem",
                        padding: "2rem"
                    }}>
                        {news.slice(0, 6).map((n, i) => (
                            <div key={i} style={{ backgroundColor: "#1f1f1f", borderRadius: "10px", overflow: "hidden" }}>
                                <img
                                    src={n.image}
                                    alt="Haber görseli"
                                    style={{ width: "100%", height: "160px", objectFit: "cover" }}
                                />

                                <div style={{ padding: "1rem" }}>
                                    <h3 style={{ fontSize: "1rem", color: "#fff" }}>
                                        {n.title}
                                    </h3>
                                    <p style={{ fontSize: "0.85rem", color: "#eee", whiteSpace: "pre-line" }}>
                                        {n.description.length > 80 ? n.description.slice(0, 80) + "..." : n.description}
                                    </p>
                                    <a href={n.link} target="_blank" rel="noopener noreferrer" style={{ color: "khaki" }}>
                                        Devamını oku →
                                    </a>
                                    <small style={{ display: "block", marginTop: "5px", color: "gray" }}>
                                        {n.pubDate}
                                    </small>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>


                {/* Yorumlar */}
                <div style={{ border: "2px solid #f8f8f8", borderRadius: "8px", padding: "20px", marginTop: "30px", backgroundColor: "black" }}>
                    <h3 style={{ color: "khaki" }}>💬 Yorumlar</h3>
                    {comments.map(a => (
                        <div key={a.id} style={{ border: "1px solid #ccc", marginBottom: "10px", padding: "10px", backgroundColor: "#222", color: "#fff" }}>
                            <strong>{a.user}</strong>
                            <p>{a.text}</p>
                            {Array.isArray(a.replies) && a.replies.map((r, i) => (
                                <div key={i} style={{ marginLeft: "20px", color: "deepskyblue" }}>
                                    ↳ <strong>{r.user}</strong>: {r.text}
                                </div>
                            ))}

                            <textarea
                                value={replyText[a.id] || ""}
                                onChange={(e) => setReplyText({ ...replyText, [a.id]: e.target.value })}
                                placeholder="Cevabınızı yazın..."
                                style={{ width: "100%", height: "40px", marginTop: "5px" }}
                            />
                            <button onClick={() => handleAddReply(a.id)} style={{ backgroundColor: "khaki", color: "black", marginTop: "5px", borderRadius: "5px" }}>
                                Cevapla
                            </button>
                        </div>
                    ))}
                    <form onSubmit={handleAddComment} style={{ marginTop: "20px" }}>
                        <textarea
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="Yorumunuzu yazın..."
                            style={{ width: "100%", height: "60px", marginBottom: "10px" }}
                        />
                        <button type="submit" style={{ backgroundColor: "khaki", color: "black", borderRadius: "5px" }}>
                            Yorum Yap
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
