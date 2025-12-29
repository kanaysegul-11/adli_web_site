
import React, { useState, useEffect } from "react";
import '../css/global.css';
import '../css/about.css';

function About() {

    const fullText = "Hakkımızda";
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + fullText.charAt(index));
                setIndex(index + 1);
            }, 130);

            return () => clearTimeout(timeout);
        }
    }, [index, fullText]);

    return (
        <div className="about-bg">

            <div className="about">
                <h1 style={{ textAlign: "center", color: "khaki" }}>{text}</h1>
                <br />
                <h5 className="text-light">
                    Dijital adli bilişim alanında uzmanlaşmış bir içerik platformuyuz. Amacımız, teknik bilgiyi herkes için anlaşılır ve erişilebilir hale getirmek. Kullanıcı dostu yapımız sayesinde hem profesyonellerin hem de meraklıların güncel gelişmeleri takip edebileceği, etkileşimli bir ortam sunuyoruz.</h5> <br />

                <h5 className="pre">
                    <br />
                    Blogumuz;<br />
                    - 🔍 Adli bilişim incelemeleri ve teknik analizler,<br />
                    - 📰 Güncel teknoloji haberleri,<br />
                    - 💬 Yorum ve cevap bölümleri ile sürekli gelişen bir topluluk,<br />
                    - 📂 Kaynak ve doküman paylaşımları ile öğrenmeyi destekleyen bir yapı,üzerine kuruludur.<br />
                    Bizim için en önemli değer, bilgi paylaşımını kolaylaştırmak ve dijital güvenlik bilincini artırmaktır.

                </h5>
            </div>

        </div>

    );
}
export default About