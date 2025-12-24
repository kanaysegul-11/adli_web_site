// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/site.css'

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
                    ...a,
                    replies: [...a.replies, { user: "Anonim", text: replyText[commentId] }]
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
        <div className="bg-dark text-light p-2">
            {/* Carousel */}
            <div id="mainCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="src/images/adli-bilisim.jpg"
                            className="d-block w-100 rounded"
                            style={{ height: "400px", objectFit: "cover" }}
                            alt="Adli Bilişim"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="src/images/forensic-tools.jpg"
                            className="d-block w-100 rounded"
                            style={{ height: "400px", objectFit: "cover" }}
                            alt="RAM Analizi"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="src/images/forensic.jpg"
                            className="d-block w-100 rounded"
                            style={{ height: "400px", objectFit: "cover" }}
                            alt="Network Forensics"
                        />
                    </div>
                </div>
            </div>

            {/* İçerikler */}
            <section className="text-center px-3">
                <div className="container text-light bg-dark p-4">
                    <h3 className="mb-5 text-center" style={{ color: "khaki" }}  >
                        Adli Bilişim (Digital Forensic) Nedir?
                    </h3>
                    <p>
                        Adli bilişim, elektromanyetik ve elektro-optik ortamlarda muhafaza edilen veya bu ortamlarca iletilen ses,
                        görüntü, veri, bilgi veya bunların birleşiminden oluşan her türlü bilişim nesnesinin, mahkemede sayısal delil
                        niteliği taşıyacak şekilde tanımlanması, elde edilmesi, saklanması, incelenmesi ve mahkemeye sunulması
                        çalışmalarının bütünüdür.
                    </p>

                    <h3 className="mt-5 " >Adli Bilişim İnceleme Süreçleri</h3>
                    <ul>
                        <li ><strong style={{ color: "khaki" }}>İlk Müdahale:</strong> Olayın aydınlatılmasını sağlayacak dijital delillerin belirlenmesi ve bu sistemlerin güvenliğinin sağlanması.</li>
                        <li><strong style={{ color: "khaki" }}>Adli Kopya Elde Etme:</strong> Delil bütünlüğünü bozmayacak şekilde imaj alınması.</li>
                        <li><strong style={{ color: "khaki" }}>İnceleme:</strong> Elde edilen kopyalar üzerinden teknik analiz yapılması.</li>
                        <li><strong style={{ color: "khaki" }}>Raporlama:</strong> Bulguların anlaşılır biçimde sunulması.</li>
                    </ul>

                    <h3 className="mt-5" >Adli Bilişim Türleri</h3>
                    <ul>
                        <li><strong style={{ color: "khaki" }}>Bilgisayar Adli Bilişimi:</strong> Silinen dosyaların kurtarılması, log dosyalarının incelenmesi, sistem geçmişi analizi.</li>
                        <li><strong style={{ color: "khaki" }}>Mobil Cihaz Adli Bilişimi:</strong> Uygulama kalıntıları, silinen dosyalar, servis sağlayıcı günlükleri.</li>
                        <li><strong style={{ color: "khaki" }}>Memory Forensics:</strong> RAM üzerindeki uçucu verilerin analizi.</li>
                        <li><strong style={{ color: "khaki" }}>Network Forensics:</strong> Ağ trafiği, saldırı analizi, veri tespiti.</li>
                    </ul>

                    <h3 className="mt-5" >Türkiye’de ve Dünyada Adli Bilişim Uygulamaları</h3>
                    <p>
                        Adli bilişim, Türkiye’de ve dünya genelinde emniyet birimleri, özel şirketler ve akademik kurumlar tarafından
                        aktif olarak kullanılmaktadır. Bu alandaki gelişmeler, teknolojinin gelişmesiyle birlikte paralel biçimde artış
                        göstermiştir.
                    </p>
                    <p>
                        Dünyada FBI, Europol, Interpol gibi uluslararası güvenlik kuruluşları, adli bilişim uzmanlarını suçluların
                        dijital izlerini takip etmeleri ve suçları adalet önüne getirmeleri için kullanmaktadır.
                    </p>
                    <p>
                        Türkiye’de ise Siber Suçlarla Mücadele Daire Başkanlığı, 2016 yılında kurulmuş olup Emniyet Genel Müdürlüğü’ne
                        bağlı olarak siber suçlarla mücadelede önemli bir rol üstlenmektedir.
                    </p>

                    <h3 className="mt-5" >Adli Bilişim Süreçleri Detaylı Açıklama</h3>
                    <h5 style={{ color: "khaki" }}>1) Delil Toplama</h5>
                    <p>Dijital ortamlarda gerçekleşen suçların kanıtlarının güvenli ve yasal olarak elde edilmesini kapsar. Bu süreç büyük bir titizlikle yürütülmelidir.</p>
                    <p><strong style={{ color: "khaki" }}>Önemi:</strong> Dijital deliller kolayca değiştirilebilir, silinebilir, kaybolabilir. Yanlış yapılan bir işlem delilin geçersiz sayılmasına neden olabilir.</p>

                    <h5 style={{ color: "khaki" }}>2) Delil Analizi</h5>
                    <p>Toplanan dijital verilerin detaylı biçimde incelenerek suçla ilişkili olanların ortaya çıkarılmasıdır.</p>
                    <p><strong style={{ color: "khaki" }}>Önemi:</strong> Gizlenmiş, silinmiş, şifrelenmiş verilerin ortaya çıkarılması; kimlik avı, yasa dışı işlemler gibi olayların aydınlatılması.</p>
                    <h5 style={{ color: "khaki" }}>3) Raporlama ve Hukuki Süreç</h5>
                    <p>Delil kaynağı, elde edilme yöntemi, analiz süreci ve sonuçlar açık ve sistematik biçimde belgelenmelidir. Mahkemelerde kullanılabilir olması için net bir dil şarttır.</p>

                    <h3 className="mt-4" >Adli Bilişimde Kullanılan Araçlar</h3>
                    <h5 style={{ color: "khaki" }}>Yazılımsal Araçlar</h5>
                    <ul>
                        <li><strong style={{ color: "khaki" }}>Autopsy:</strong> Açık kaynaklı, disk imajı inceleme, silinmiş veri kurtarma, zararlı yazılım analizi.</li>
                        <li><strong style={{ color: "khaki" }}>FTK (Forensic Toolkit):</strong> Dijital delil analizinde kullanılır.</li>
                        <li><strong style={{ color: "khaki" }}>EnCase:</strong> En yaygın kullanılan adli bilişim analiz aracıdır.</li>
                    </ul>

                    <h5 style={{ color: "khaki" }}>Donanımsal Araçlar</h5>
                    <ul>
                        <li><strong style={{ color: "khaki" }}>Write Blocker:</strong> Sabit disklere müdahale etmeden kopyalama sağlar.</li>
                        <li><strong style={{ color: "khaki" }}>Adli Kopyalama Cihazları:</strong> Disk imajı alma ve inceleme süreçlerinde kullanılır.</li>
                    </ul>
                </div>


            </section >

            {/* Haberler */}
            < section className="mt-4" >
                <h4 className="bg-black text-warning p-2">📰 Milliyet Teknoloji Haberleri</h4>
                <div className="d-grid gap-3 p-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
                    {news.slice(0, 6).map((n, i) => (
                        <div key={i} className="bg-dark rounded overflow-hidden">
                            <img src={n.image} alt="Haber görseli" style={{ width: "100%", height: "160px", objectFit: "cover" }} />
                            <div className="p-3">
                                <h3 className="fs-6 text-light">{n.title}</h3>
                                <p className="small text-secondary">
                                    {n.description.length > 80 ? n.description.slice(0, 80) + "..." : n.description}
                                </p>
                                <a href={n.link} target="_blank" rel="noopener noreferrer" className="text-warning">
                                    Devamını oku →
                                </a>
                                <small className="d-block mt-2 text-muted">{n.pubDate}</small>
                            </div>
                        </div>
                    ))}
                </div>
            </ section>

            {/* Yorumlar */}
            < section className=" border border-light rounded p-3 mb-4  bg-dark" >
                <h3 className="text-warning ">💬 Yorumlar</h3>
                {
                    comments.map(a => (
                        <div key={a.id} className="border border-secondary mb-3 p-2  text-light" >
                            <strong>{a.user}</strong>
                            <p>{a.text}</p>
                            {Array.isArray(a.replies) && a.replies.map((r, i) => (
                                <div key={i} className="ms-3 text-info">↳ <strong>{r.user}</strong>: {r.text}</div>
                            ))}
                            <textarea
                                value={replyText[a.id] || ""}
                                onChange={(e) => setReplyText({ ...replyText, [a.id]: e.target.value })}
                                placeholder="Cevabınızı yazın..."
                                className="form-control mt-2"
                                rows="2"
                            />
                            <button onClick={() => handleAddReply(a.id)} className="btn btn-warning btn-sm mt-2">
                                Cevapla
                            </button>
                        </div>
                    ))
                }
                <form onSubmit={handleAddComment}>
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Yorumunuzu yazın..."
                        className="form-control mb-2"
                        rows="3"
                    />
                    <button type="submit" className="btn btn-warning">Yorum Yap</button>
                </form>
            </ section>
        </div >
    );
}