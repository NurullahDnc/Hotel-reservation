import React, { useEffect, useState } from 'react'
import Table from '../../general/Table'
import { useDispatch, useSelector } from 'react-redux'
import { getRoom } from '../../../redux/RoomSlice'
import Loading from '../../Loading';
import { getAcceptedComments, getComment, getUserComment } from '../../../redux/CommentSlice';
import { getUserInfo } from '../../../redux/UserSlice';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaCheckCircle, FaTrash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import Modal from '../../auth/Modal';
import Input from '../../general/Input';
import Button from '../../general/Button';
import Select from '../../general/Select';
import TextArea from '../../general/TextArea';
import PageTitle from '../../general/PageTitle';



const Comment = () => {

    const commentTitle = [

        { title: "ad" },
        { title: "acıklama" },
        { title: "puan" },
        { title: "durumu" },
        { title: "guncelle" },
        { title: "sil" },

    ]

    const comment = useSelector((state) => state.getComment.comment);
    const user = useSelector((state) => state.getUser.user);
    const dispacth = useDispatch();
    const [selectedComment, setSelectedComment] = useState(null);
    const [updateOpen, setUpdateOpen] = useState(false);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();


    useEffect(() => {
        dispacth(getUserInfo())
    }, [dispacth])


    //userId props gonderiyoruz, userId gore yorumlar geliyor
    useEffect(() => {
        if (user) {
            dispacth(getUserComment(user._id));
        }
    }, [dispacth, user]);

    useEffect(() => { dispacth(getComment()) }, [dispacth, comment])

    //rating degiskeni
    const ratingOptions = [
        { value: 0, category: "0" },
        { value: 1, category: "1" },
        { value: 2, category: "2" },
        { value: 3, category: "3" },
        { value: 4, category: "4" },
        { value: 5, category: "5" }
    ];


    //yorum delete func.
    const handleDelete = async (id) => {
        try {
            toast.success("Yorum başarıyla silindi");
            await axios.post(`http://localhost:5000/comment/delete/${id}`);
        } catch (error) {
            toast.error("Yorum silinirken bir hata oluştu");
        }
    };

    //update Func.
    const handleUpdate = (id) => {
        //guncellenecek yorumu alıyor id gore, secilen yorumu degiskene atıyor
        const selectedComment = comment.find(item => item._id === id);
        setSelectedComment(selectedComment);
        setUpdateOpen(true); // Modalı aç
    };



    useEffect(() => {
        // secilen yorumu state tutuyor
        if (selectedComment) {

            setValue('id', selectedComment._id);
            setValue('description', selectedComment.description);
            setValue('rating', selectedComment.rating);

        }
    }, [selectedComment, setValue]);

    const commentUpdate = async (data) => {

        const updatedComment = {
            description: data.description,
            rating: data.rating,
        };

        try {
            await axios.put(`http://localhost:5000/comment/update/${data.id}`, updatedComment);
            toast.success("Yorumunuz Başarılı bir şekilde Güncellendi")
            setUpdateOpen(false); // Modalı kapat

        } catch (error) {
            toast.error("Hata Oluştu")
        }
    };

    const titleElement = (
        <tr style={{ display: "flex" }}>
            {commentTitle.map((item, i) => (
                <th key={i} style={{ flex: 1 }}>{item.title}</th>
            ))}
        </tr>
    ); 

    const bodyElement = comment.length > 0 ? (
        comment.map((item, index) => (
            <tr key={item._id} style={{ display: "flex" }}>
                <td>{item.user.firstName }</td>
                <td>{item.description}</td>
                <td>{item.rating}</td>
                <td style={{ color: item.status === false ? "red" : item.status === true ? "green" : "" }}>
                    {item.status === false ? "Bekleniyor" : item.status === true ? "onaylandı" : ""}
                </td>
                <td style={{ color: "green", cursor: "pointer" }} onClick={() => handleUpdate(item._id)}><FaCheckCircle size={22} /></td>
                <td style={{ color: "red", cursor: "pointer" }} onClick={() => handleDelete(item._id)}><FaTrash size={22} /></td>
            </tr>
        ))
    ) : (
        <tr>
            <td colSpan="6" style={{ textAlign: "center" }}>Yorumunuz Bulunmamaktadır</td>
        </tr>
    );

    //create elementi
    const updateElement = (
        <div>
            <form onSubmit={handleSubmit(commentUpdate)} encType="multipart">

                <TextArea id="description" title="Acıklama Giriniz" type="text" placeholder="Acıklama Giriniz" register={register} errors={errors} required />
                <Select id="rating" title="Degerlendirme Seciniz" placeholder={"Seçiniz"} options={ratingOptions} register={register} errors={errors} defaultValue="" />

                <Button btnText={"Yorumu Güncelle"} />
            </form>
        </div>
    )



    return (
        <div>
            <div>

                <Modal
                    isOpen={updateOpen}
                    title="Yorum Güncelle"
                    bodyElement={updateElement}
                    onClose={() => setUpdateOpen(false)}
                    btnNull
                    modals

                />

                <PageTitle title="Yorumlarım" />
                <Table titleElement={titleElement} bodyElement={bodyElement} />


            </div>
        </div>
    )
}

export default Comment
