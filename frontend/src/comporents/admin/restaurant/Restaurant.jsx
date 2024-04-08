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
import { getRestaurant } from '../../../redux/RestaurantSlice';


const Restaurant = () => {
    const restaurant = useSelector((state) => state.getRestaurant.restaurant);
    const restaurantStatus = useSelector((state) => state.getRestaurant.restaurantStatus);
    const dispatch = useDispatch();
    const [createOpen, setCreateOpen] = useState(false);
    const [updateOpen, setUpdateOpen] = useState(false);
    const [selectedActivity, setSelectedActivity] = useState(null);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    useEffect(() => {
        dispatch(getRestaurant());
    }, [dispatch]);
    
    console.log("restaurantStatus,", restaurantStatus);

    //tabloda oda ozekikleri
    const data = restaurant && restaurant.map((item) => {
        
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
        { field: 'description', headerName: 'Açıklama', width: 250 },
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
            const response = await axios.delete(`http://localhost:5000/restaurant/delete/${id}`);
            toast.success(response.data.message)
        } catch (error) {
            toast.error(error.response.data.error);
        }
    };

    //update Func.
    const handleUpdate = (restaurant) => {

        setSelectedActivity(restaurant); // Seçilen odayı state'e kaydet
        setUpdateOpen(true); 
    };

    //create func.
    const restaurantCreate = async data => {

        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('imageOne', data.imageOne[0]);
        formData.append('imageTwo', data.imageTwo[0]);
        

        try {
            const response = await axios.post(`http://localhost:5000/restaurant/create`, formData);
            toast.success(response.data.message)
            setUpdateOpen(false);
            
        } catch (error) {
            toast.error(error.response.data.error);
        }
     
    }

    //update func.
    const restaurantUpdate = async (data) => {


        const formData = new FormData();
        formData.append('imageOne', data.imageOne[0]);
        formData.append('imageTwo', data.imageTwo[0]);
        formData.append('description', data.description);
        formData.append('title', data.title);
        formData.append('capacity', data.capacity);
       
 
        try {
            const response = await axios.put(`http://localhost:5000/restaurant/update/${data.id}`, formData);
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
            <form onSubmit={handleSubmit(restaurantCreate)} encType="multipart/form-data">
                <Input id="title" title="Başlık Giriniz" type="text" placeholder="Başlık Giriniz" register={register} errors={errors} required />
                <TextArea id="description" title="Açıklama Giriniz" type="text" placeholder="Açıklama Giriniz" register={register} errors={errors} required />
                <Input id="imageOne" title="Gorsel Ekle" type="file" placeholder="Varsa Eklemek İstedikleriniz" register={register} errors={errors} required />
                <Input id="imageTwo" title="Gorsel Ekle" type="file" placeholder="Varsa Eklemek İstedikleriniz" register={register} errors={errors} required />
                <Button btnText={"Aktvite ekle"} />
            </form>
    ) 

    //create elementi
    const updateElement = (
            <form onSubmit={handleSubmit(restaurantUpdate)} encType="multipart">
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
                title="Restaurant Oluştur"
                bodyElement={createElement}
                btnLabel="Restaurant Oluştur"
                onClose={() => setCreateOpen(false)}
                onSubmit={restaurantCreate}
                btnNull
                modals
            />

            {/*update Modal */}
            <Modal
                isOpen={updateOpen}
                title="Restaurant Güncelle"
                bodyElement={updateElement}
                btnLabel="Restaurant Güncelle"
                onClose={() => setUpdateOpen(false)}
                onSubmit={restaurantUpdate}
                btnNull
                modals

            />

            Restorant
            <Table rows={data} columns={columns} />

            <Button btnText="Restorant Oluştur" small onSubmit={() => setCreateOpen(true)} />
        </div>
    );
};

export default Restaurant;
