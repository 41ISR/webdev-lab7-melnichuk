
const MessageCard = ({content, username, createdAt}) => {
    const isOwn = false

    return (
        <div className="message-card">
            <div className="message-content">{content}</div>
            <div className="message-meta">
                <span className="message-author">@{username}</span>
                <span className="message-time">{createdAt}</span>
            </div>
            <div className="message-actions">
                <button className="action-button"><span>💜🤍</span><span>Like</span></button>
                <button className="action-button"><span>🚩</span><span>Report</span></button>
                {isOwn && <button className="action-button delete"><span>🗑</span><span>Delete</span></button>}
            </div>
        </div>
    )
}

export default MessageCard