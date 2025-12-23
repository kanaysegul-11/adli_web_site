import React from 'react'

function CommentBox() {
    return (
        <div className='tool-card'>
            <img src={tool.img} alt={tool.name} />
            <h3>{tool.name}</h3>
            <p>{tool.text}</p>
            <a href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="tool-button"
            >
                Araçların Detayına Git →
            </a>
        </div>
    )
}

export default CommentBox