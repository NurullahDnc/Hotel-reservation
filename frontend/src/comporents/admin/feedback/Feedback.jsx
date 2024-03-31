import React, { useEffect, useMemo } from 'react';
import Table from '../Table';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getFeedback } from '../../../redux/FeedbackSlice';
import { MdOutgoingMail } from "react-icons/md";


const Feedback = () => {

    const feedback = useSelector((state) => state.getFeedback.feedback);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFeedback());
    }, [dispatch, feedback]);

    const data = feedback && feedback.map((item) => {
        return {
            id: item._id,
            firstName: item.surname,
            email: item.mail,
            object: item.object,
            message: item.message,

        };
    });


    const columns = useMemo(() => [
        { field: 'id', headerName: 'Id', width: 100, align: "center" },
        { field: 'firstName', headerName: 'Ad Soyad', width: 150 },
        { field: 'email', headerName: 'Email', width: 250 },
        { field: 'object', headerName: 'konu', width: 150 },
        { field: 'message', headerName: 'mesaj', width: 350, align: "center" },

        {
            field: "mail gonder",
            headerName: "mail gonder",
            align: "center",
            width: 100,
            renderCell: (params) => (
                <button onClick={() => handleMailSend(params.id)} style={{ color: "green" }}  >
                    <MdOutgoingMail size={30} />
                </button>
            )
        },

    ], []);

    //mail gonderme 
    const handleMailSend = async (id) => {
        try {
            const response = await axios.post(`http://localhost:5000/comment/sendMail/${id}`);
            toast.success("mail olarak gönderildi");
        } catch (error) {
            toast.error("Hata oluştu. mail gönderilemedi");
        }
    };


    return (
        <div>
            Geri Bildirimler
            <Table rows={data} columns={columns} />
        </div>
    );
};

export default Feedback;
