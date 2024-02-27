import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; // Import faStar icon

const Comment = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [name, setName] = useState('Nazlı');
    const [rating, setRating] = useState(0);

    const addComment = () => {
        if (newComment.trim() !== '') {
            const commentObject = {
                name: name,
                content: newComment,
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString(),
                rating: rating,
            };

            setComments([...comments, commentObject]);
            setNewComment('');
            setRating(0);
        }
    };

    return (
        <div className="comment-container">
            <h2 className='comment-header'>Yorumlar</h2>
            <div className="comment-scroll-container">
                <ul className='comment-ul'>
                    {comments.slice(0).reverse().map((comment, index) => (
                        <li key={index} className="comment-ul-item">
                            <strong className="comment-ul-item-userName">{comment.name}</strong> -
                            <span className="comment-ul-item-meta">{comment.date} {comment.time}</span> -
                            <span className="comment-ul-item-content">{comment.content}</span> -
                            <span className="comment-ul-item-rating">
                                Yıldız:
                                {[...Array(comment.rating)].map((_, i) => (
                                    <FontAwesomeIcon key={i} icon={faStar} className="star-icon" />
                                ))}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="input-container">
                <textarea
                    className="input-container-writeComment"
                    placeholder="Yorumunuzu buraya yazın"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <div className="input-container-userName">
                    <label className="label">
                        Kullanıcı Adı:
                    </label>
                    <input
                        className="user-name-input"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                </div>
                <div className="input-container-section">
                    <label className="label">
                        Yıldız Ver:
                    </label>
                    <select
                        className="input-container-section-rating"
                        value={rating}
                        onChange={(e) => setRating(parseInt(e.target.value))}
                    >
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>

                </div>
                <button className="commentBtn" onClick={addComment}>
                    Yorum Ekle
                </button>
            </div>
        </div>
    );
};

export default Comment;
