import React, { useEffect, useMemo, useState } from 'react';
import Table from '../Table';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getFeedback } from '../../../redux/FeedbackSlice';
import { MdOutgoingMail } from "react-icons/md";
import Modal from '../../auth/Modal'
import TextArea from '../../general/TextArea'
import { useForm } from 'react-hook-form';
import Button from '../../general/Button';
import Input from '../../general/Input';



const Feedback = () => {

    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [selectedFeedback, setSelectedFeedback] = useState(null);
    const feedback = useSelector((state) => state.getFeedback.feedback);

    useEffect(() => {
        dispatch(getFeedback());
    }, [dispatch]);


    const data = feedback && feedback.map((item) => {
        return {
            id: item._id,
            surname: item.surname,
            email: item.mail,
            object: item.object,
            message: item.message,
            createdAt: item.createdAt

        };
    });


    const columns = useMemo(() => [
        { field: 'id', headerName: 'Id', width: 100, align: "center" },
        { field: 'surname', headerName: 'Ad Soyad', width: 130 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'object', headerName: 'konu', width: 175 },
        { field: 'message', headerName: 'mesaj', width: 325, align: "center" },
        { field: 'createdAt', headerName: 'Tarih', width: 100, align: "center" },


        {
            field: "mail gonder",
            headerName: "mail gonder",
            align: "center",
            width: 100,
            renderCell: (params) => (
                <button  style={{ color: "green" }}  >
                    <MdOutgoingMail onClick={() => handleMailSend(params.row)} size={30} />
                </button>
            )
        },

    ], []);
    
    //geri bilidirim mesajını alıdım state e attım ordan, userForm'un setValue attım
    const handleMailSend = (row) => {
        setSelectedFeedback(row);
        setModalOpen(true);
    };

    useEffect(() => {
        // secilen yorumu state tutuyor
        if (selectedFeedback) {

            setValue('id', selectedFeedback.id);
            setValue('recipient', selectedFeedback.email);
            setValue('subject', selectedFeedback.object);

        }
    }, [selectedFeedback, setValue]);

    //mail gonderme 
    const sendMail = async (data) => {
        
        try {
            const response = await axios.post(`http://localhost:5000/sendMail`, data);
            toast.success(response.data.message);
            setModalOpen(false);

        } catch (error) {
            toast.error(error.response.data.error);
        }
    };


    const bodyElement = (
        <form onSubmit={handleSubmit(sendMail)} encType="multipart">
          <Input id="recipient" title="Alıcı Giriniz" type="text" placeholder="Alıcı Giriniz" register={register} errors={errors} required />
          <Input id="subject" title="Konu Giriniz" type="text" placeholder="Konu Giriniz" register={register} errors={errors} required />
          <TextArea id="message" title="Mesaj Giriniz" type="text" placeholder="Mesaj Giriniz" register={register} errors={errors} required />
          <Button btnText={"Mail Gonder"} />
        </form>
      );
      


    return (
        <div>
            <Modal
                isOpen={modalOpen}
                title="Mail Gonder"
                bodyElement={bodyElement}
                btnLabel="mail gonder"
                onClose={() => setModalOpen(false)}
                btnNull
                modals
            />
            Geri Bildirimler
            <Table rows={data} columns={columns} />
        </div>
    );
};

export default Feedback;
