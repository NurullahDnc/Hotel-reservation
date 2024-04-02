import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { FaStar } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../../redux/UserSlice'
import { toast } from 'react-toastify';
import { getAcceptedComments } from '../../redux/CommentSlice';

const Comment = () => {
    const { t } = useTranslation();

    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [rating, setRating] = useState(0);
    const dispact = useDispatch()

    const user = useSelector((state) => state.getUser.user);
    const commentAccepted = useSelector((state) => state.getComment.commentAccepted);


    useEffect(() => {
        dispact(getAcceptedComments())
    }, [dispact])




    const addComment = () => {
        if (newComment.trim() !== '' && rating !== 0) {

        const commentObject = {
            user: user._id,
            description: newComment,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
            rating: rating,
            status: false
        };
        try {
            // Axios kullanarak POST isteği gönderme
            axios.post('http://localhost:5000/comment/create', commentObject)
                .then(response => {
                    toast.success(response.data.message); // Yorum eklendikten sonra yorumları güncelle
                    setNewComment('');
                    setRating(0);
                })
                .catch(error => {
                    toast.error("hata oluştu");
                });
        } catch (error) {
            toast.error(error.response.data.error);
        }
    }else{
        toast.error("lütfen Tüm Alanları Doldurunuz.")
    }
    }




    return (
        <div className="comment-container">
            <h2 className='comment-header'>{t('comments')}</h2>

            <div className="comment-scroll-container">
                <ul className='comment-ul'>
                    {commentAccepted.map((comment, index) => (
                        <li key={index} className="comment-ul-item">
                            <strong className="comment-ul-item-userName">{comment.user?.firstName} {comment.user?.lastName}  </strong>
                            <span className="comment-ul-item-meta">{comment.createdAt}</span>
                            <div className="comment-ul-item-content">
                                {comment && comment.description && comment.description.length > 100 ? (
                                    `${comment.description.slice(0, 100)}...`
                                ) : (
                                    comment.description
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

            {
                user && <div className="input-container">
                    <label className="label-input">{t('writeYourComment')}</label>


                    <textarea
                        className="input-container-writeComment"
                        placeholder={t('writeYourCommentHere')}
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        rows={7}
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
                        {t('addComment')}
                    </button>
                </div>
            }
        </div>
    );
};

export default Comment;
