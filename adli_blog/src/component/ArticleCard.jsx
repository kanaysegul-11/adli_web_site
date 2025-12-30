
import React from "react";
import "../css/articles.css";
export default function ArticleCard({ article }) {
    return (
        <div className="article-card">
            <div className="article-content">
                <h3 className="article-title">{article.title}</h3>
                <p className="article-author"><strong>Yazar:</strong> {article.author}</p>
                <a
                    href={`/pdf/${article.pdf}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="article-link"
                >
                    PDF Görüntüle →
                </a>
            </div>
        </div>
    );
}