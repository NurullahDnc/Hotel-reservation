import React, { useEffect, useMemo, useState } from 'react';
import Table from '../Table';
import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { FaCheckCircle } from "react-icons/fa";
import axios from 'axios';
import Modal from '../../auth/Modal';
import { useForm } from 'react-hook-form';
import Input from '../../general/Input';
import Button from '../../general/Button';
import TextArea from '../../general/TextArea';

import { toast } from 'react-toastify';
import { getActivity } from '../../../redux/ActivitySlice';
import PageTitle from '../../general/PageTitle';


const Activity = () => {
    const activity = useSelector((state) => state.getActivity.activity);

    const dispatch = useDispatch();
    const [createOpen, setCreateOpen] = useState(false);
    const [updateOpen, setUpdateOpen] = useState(false);
    const [selectedActivity, setSelectedActivity] = useState(null);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

 
    useEffect(() => {
        dispatch(getActivity());
    }, [dispatch]);
    

    //tabloda oda ozekikleri
    const data = activity && activity.map((item) => {
        
        return {
            id: item._id,
            imgOne: item.imageOne,
            imgTwo: item.imageTwo,
            description: item.description,
            title: item.title,
            
        };
    });

    //tablonun title
    const columns = useMemo(() => [
   
        { field: 'title', headerName: 'Başlık', width: 150 },
        { field: 'description', headerName: 'Açıklama', width: 350 },
        {
            field: 'imgOne',
            headerName: 'Resim1',
            width: 100,
            renderCell: (params) => (
                <img src={params.value} alt="Room Image" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            )
        },
        {
            field: 'imgTwo',
            headerName: 'Resim2',
            width: 100,
            renderCell: (params) => (
                <img src={params.value} alt="Room Image" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            )
        },

        {
            field: "sil",
            headerName: "Sil",
            width: 100,
            renderCell: (params) => (
                <button onClick={() => handleDelete(params.id)} style={{ color: "red" }}  >
                    <FaTrash size={22} />
                </button>
            )
        },
        {
            field: "Guncelle",
            headerName: "Güncelle",
            width: 100,
            renderCell: (params) => (
                <button onClick={() => handleUpdate(params.row)} style={{ color: "green" }}  >
                    <FaCheckCircle size={22} />
                </button>
            )
        }
    ], []);


    //delete func.
    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:5000/activity/delete/${id}`);
            toast.success(response.data.message)
        } catch (error) {
            toast.error(error.response.data.error);
        }
    };

    //update Func.
    const handleUpdate = (activity) => {

        setSelectedActivity(activity); // Seçilen odayı state'e kaydet
        setUpdateOpen(true); 
    };

    //create func.
    const activityCreate = async data => {

        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('imageOne', data.imageOne[0]);
        formData.append('imageTwo', data.imageTwo[0]);
        

        try {
            const response = await axios.post(`http://localhost:5000/activity/create`, formData);
            toast.success(response.data.message)
            setUpdateOpen(false);
            
        } catch (error) {
            toast.error(error.response.data.error);
        }
     
    }

    //update func.
    const activityUpdate = async (data) => {


        const formData = new FormData();
        formData.append('imageOne', data.imageOne[0]);
        formData.append('imageTwo', data.imageTwo[0]);
        formData.append('description', data.description);
        formData.append('title', data.title);
        formData.append('capacity', data.capacity);
       
 
        try {
            const response = await axios.put(`http://localhost:5000/activity/update/${data.id}`, formData);
            toast.success(response.data.message)
            setUpdateOpen(false); 

        } catch (error) {
            toast.error(error.response.data.error);
        }
    };

    useEffect(() => {
        // Seçilen oda değiştiğinde formdaki inputların değerlerini set et, update icin
        if (selectedActivity) {
            setValue('id', selectedActivity.id);
            setValue('imageOne', selectedActivity.imgOne);
            setValue('imageTwo', selectedActivity.imgTwo);
            setValue('description', selectedActivity.description);
            setValue('title', selectedActivity.title);
           
        }
 
    }, [selectedActivity, setValue]);

    //create elementi
    const createElement = (
            <form onSubmit={handleSubmit(activityCreate)} encType="multipart/form-data">
                <Input id="title" title="Başlık Giriniz" type="text" placeholder="Başlık Giriniz" register={register} errors={errors} required />
                <TextArea id="description" title="Açıklama Giriniz" type="text" placeholder="Açıklama Giriniz" register={register} errors={errors} required />
                <Input id="imageOne" title="Gorsel Ekle" type="file" placeholder="Varsa Eklemek İstedikleriniz" register={register} errors={errors} required />
                <Input id="imageTwo" title="Gorsel Ekle" type="file" placeholder="Varsa Eklemek İstedikleriniz" register={register} errors={errors} required />
                <Button btnText={"Aktvite ekle"} />
            </form>
    ) 

    //create elementi
    const updateElement = (
            <form onSubmit={handleSubmit(activityUpdate)} encType="multipart">
                <Input id="title" title="Başlık Giriniz" type="text" placeholder="Başlık Giriniz" register={register} errors={errors} required />
                <TextArea id="description" title="Açıklama Giriniz" type="text" placeholder="Açıklama Giriniz" register={register} errors={errors} required />
                <Input id="imageOne" title="Gorsel Ekle" type="file" placeholder="Varsa Eklemek İstedikleriniz" register={register} errors={errors} required />
                <Input id="imageTwo" title="Gorsel Ekle" type="file" placeholder="Varsa Eklemek İstedikleriniz" register={register} errors={errors} required />
                 <Button btnText={"Güncelle"} />
            </form>
    )

    return (
        <div>
            {/*create Modal */}
            <Modal
                isOpen={createOpen}
                title="Aktivite Oluştur"
                bodyElement={createElement}
                btnLabel="Aktivite Oluştur"
                onClose={() => setCreateOpen(false)}
                onSubmit={activityCreate}
                btnNull
                modals
            />

            {/*update Modal */}
            <Modal
                isOpen={updateOpen}
                title="Aktivite Güncelle"
                bodyElement={updateElement}
                btnLabel="Aktivite Güncelle"
                onClose={() => setUpdateOpen(false)}
                onSubmit={activityUpdate}
                btnNull
                modals

            />

            <PageTitle title="Aktiviteler" />
            <Table rows={data} columns={columns} />

            <Button btnText="activity Oluştur" small onSubmit={() => setCreateOpen(true)} />
        </div>
    );
};

export default Activity;
