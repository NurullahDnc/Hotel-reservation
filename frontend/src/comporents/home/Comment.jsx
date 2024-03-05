import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { FaStar } from 'react-icons/fa';



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
                            <strong className="comment-ul-item-userName">{comment.name}</strong>
                            <span className="comment-ul-item-meta">{comment.date} - {comment.time}</span>
                            <div className="comment-ul-item-content">
                                {comment.content.split(' ').length > 50 ? (
                                    <>
                                        {comment.content.split(' ').slice(0, 50).join(' ')}...
                                    </>
                                ) : (
                                    comment.content
                                )}
                            </div>
                            <span className="comment-ul-item-rating">
                                {[...Array(5)].map((_, i) => (
                                    <FontAwesomeIcon
                                        key={i}
                                        icon={i < comment.rating ? solidStar : regularStar}
                                        className="star-icon"
                                    />
                                ))}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>


            <div className="input-container">
                <label className="label-input">Yorumunuzu yazın:</label>
                <div className="input-container-userName">
                    <input
                        className="user-name-input"
                        type="text"
                        value={name}
                        placeholder="Kullanıcı adınızı girin"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <textarea
                    className="input-container-writeComment"
                    placeholder="Yorumunuzu buraya yazın"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    rows={5}
                />


                <div className="input-container-section">
                    <div className="input-container-section-rating">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <FaStar
                                key={star}
                                className="star-icon"
                                color={star <= rating ? '#f39c12' : '#dcdcdc'}
                                onClick={() => setRating(star)}
                            />
                        ))}
                    </div>
                </div>

                <button className="commentBtn" onClick={addComment}>
                    Yorum Ekle
                </button>
            </div>


        </div>
    );
};

export default Comment;
