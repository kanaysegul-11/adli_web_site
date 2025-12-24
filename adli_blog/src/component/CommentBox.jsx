import React from 'react'

function CommentBox() {
    return (
        <div className='tool-card'>
            <img src={tool.img} alt={tool.title} />
            <h3>{tool.title}</h3>
            <p>{tool.text}</p>
            <a href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                classame="tool-button"
            >
                Araçların Detayına Git →
            </a>
        </div>
    )
}

export default CommentBox