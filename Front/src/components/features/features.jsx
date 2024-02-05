import './style/features.css';

export default function features({ image, title, content }) {
    return <div className="feature-item">
        <img src={image} alt="Chat Icon" className="feature-icon" />
        <h3 className="feature-item-title">{title}</h3>
        <p>{content}</p>
    </div>
}