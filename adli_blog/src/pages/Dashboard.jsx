
import { useState, useEffect, React } from "react";
import axios from "axios";
import ArticleCard from "../component/ArticleCard";
import '../css/site.css'

function Dashboard() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get("/src/JSON/makale.json")
            .then(res => setArticles(res.data.articles))
            .catch(err => console.error(err));
    }, []);

    const totalArticles = articles.length;
    const categories = [...new Set(articles.map(a => a.category))];
    const recentArticles = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 4);



    return (
        <div className="dashboard">
            <h2>📊 Dashboard</h2>
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Toplam Yazı</h3>
                    <p>{totalArticles}</p>
                </div>
                <div className="stat-card">
                    <h3>Kategori Sayısı</h3>
                    <p>{categories.length}</p>
                </div>
            </div>

            <h3 className="recent-title">🕓 Son Yazılar</h3>
            <ul className="recent-list">
                {recentArticles.map(article => (
                    <li key={article.id}>
                        <strong>{article.title}</strong> – {new Date(article.date).toLocaleDateString("tr-TR", {
                            day: "2-digit", month: "short", year: "numeric"
                        })}
                    </li>
                ))}
            </ul>
        </div>


    )
}

export default Dashboard