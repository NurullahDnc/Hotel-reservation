import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
import { getRoom } from '../../redux/RoomSlice';
import Select from '../general/Select';
import TextArea from '../general/TextArea';
import Button from '../general/Button';


import { useForm } from 'react-hook-form';
import Heading from '../general/Heading';

const Comment = () => {
    const { t } = useTranslation();

    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [rating, setRating] = useState(0);
    const dispact = useDispatch()

    const user = useSelector((state) => state.getUser.user);
    const commentAccepted = useSelector((state) => state.getComment.commentAccepted);
    const rooms = useSelector((state) => state.getRoom.rooms);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();


    useEffect(() => {
        dispact(getAcceptedComments())
        dispact(getRoom())

    }, [dispact])

 
    //yorum olsuturma
    const onSubmit = (data) => {

       
 
            const commentObject = {
                user: user._id,
                room: data.roomType,
                description: data.description,
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString(),
                rating: rating,
                status: false
            };

        console.log("data", commentObject);
            
            try {
                // Axios kullanarak POST isteği gönderme
                axios.post('http://localhost:5000/comment/create', commentObject)
                    .then(response => {
                        toast.success(response.data.message); // Yorum eklendikten sonra yorumları güncelle
                     })
                    .catch(error => {
                        toast.error("hata oluştu");
                    });
            } catch (error) {
                toast.error(error.response.data.error);
            }
     
    }




    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };
    

    return (
        <div className="comment-container">
            <Heading title="Yorumlar" />

                <Slider {...settings}>
                    {commentAccepted.map((comment, index) => (
            <div className="comment-scroll-container">
                        <div key={index} className="comment-ul-item"  >
                            <strong className="comment-ul-item-userName"> {comment.user?.firstName || comment.user?.lastName ? `${comment.user?.firstName} ${comment.user?.lastName}` : "isimsiz Kulanıcı"}</strong>
                            <span className="comment-ul-item-meta">{comment.createdAt}</span>
                            <span className="comment-ul-item-rating">
                                {[...Array(5)].map((_, i) => (
                                    <FontAwesomeIcon
                                        key={i}
                                        icon={i < comment.rating ? solidStar : regularStar}
                                        className="star-icon"
                                        
                                    />
                                ))}
                            </span>
                            <p className='comment-ul-item-category'>Oda Tipi: { comment?.room?.category}</p>

                            <div className="comment-ul-item-content">
                                {comment && comment.description && comment.description.length > 100 ? (
                                    `${comment.description.slice(0, 140)}...`
                                ) : (
                                    comment.description
                                )}
                            </div>


                        </div>
            </div>
                    ))}
                </Slider>

            {
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="input-container">
                        <label className="label-input">{t('writeYourComment')}</label>

                        <Select id="roomType"   placeholder={"Seçiniz"} options={rooms} register={register} errors={errors} defaultValue="" />

                        
                        <TextArea id="description"  type="text" placeholder="Açıklama Giriniz" register={register} errors={errors} required />



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
                        
                        <Button btnText="Yorum oluştur" small />
                        
                    </div>
            </form>
            }
        </div>
    );
};

export default Comment;
