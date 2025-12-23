// src/pages/Articles.jsx
import React, { useEffect, useState } from "react";
import ArticleCard from "../component/ArticleCard";   // 🔑 import ekle
import "../css/site.css";

function Articles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/articles")
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setArticles(data);
                } else if (data.articles) {
                    setArticles(data.articles);
                }
            })
            .catch(err => console.error("Veri çekilemedi:", err));
    }, []);

    return (
        <div className="articles-page">
            <h2 className="articles-title">📚 Makale Listesi</h2>
            <div className="articles-grid">
                {articles.map(article => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>
        </div>
    );
}

export default Articles;