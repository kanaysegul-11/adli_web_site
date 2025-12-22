import React, { useEffect, useState } from "react";


function Articles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/articles")
            .then(res => res.json())
            .then(data => setArticles(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h2>Makale Listesi</h2>
            <div style={{ display: "grid", gap: "16px" }}>
                {articles.map(article => (
                    <div
                        key={article.id}
                        style={{ border: "1px solid #ccc", padding: "12px", borderRadius: "8px" }}
                    >
                        <h3>{article.title}</h3>
                        <p><strong>Yazar:</strong> {article.author}</p>
                        <a
                            href={`/pdf/${article.pdf}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "blue" }}
                        >
                            PDF Görüntüle
                        </a>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Articles