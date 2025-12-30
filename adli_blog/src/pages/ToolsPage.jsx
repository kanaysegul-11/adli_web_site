import React, { useEffect, useState } from "react";
import "../css/tools.css";
import CommentBox from "../component/CommentBox";
import '../css/global.css'


function ToolsPage() {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/tools")
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setTools(data);
                } else if (data.tools) {
                    setTools(data.tools);
                }
            })
            .catch(err => console.error("Veri çekilemedi:", err));
    }, []);
    return (
        <div className="position">
            <div className="tools-page">
                <h2 className="tools-title">🛠️ Adli Bilişim
                    Araçları</h2>
                <div className="tools-grid">
                    {tools.map(tool => (
                        <CommentBox key={tool.id} tool={tool} />
                    ))}

                </div>
            </div>

        </div>


    )

}

export default ToolsPage