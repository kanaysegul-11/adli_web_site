import React from 'react'

function CommentBox({ tool }) {
    return (
        <div className='tool-card'>
            <div className='tool-img'>
                <img src={tool.img} alt={tool.title} /></div>
            <h3>{tool.title}</h3>
            <p>{tool.text}</p>
            <a href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline-light"
            >
                Araçların Detayına Git →
            </a>
        </div>
    )
}

export default CommentBox