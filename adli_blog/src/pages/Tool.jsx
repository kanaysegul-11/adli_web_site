import React, { use } from 'react'
import { useState, useEffect } from "react";
import CommentBox from '../component/CommentBox';

function Tool() {

    const [tool, setTool] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/tool")
            .then((response) => response.json())
            .then((data) => setTool(data.tool))
            .catch((error) => console.error('Error fetching tools:', error));
    }, []);
    return (
        <div className='tools-page'>
            <h1 className="tools-title">🛠️ Adli Bilişim Araçları</h1>
            <div className='tools-grid'>
                {tool.map((tool) => (
                    <CommentBox key={tool.id} tool={tool} />
                ))}
            </div>
        </div>
    )
}

export default Tool