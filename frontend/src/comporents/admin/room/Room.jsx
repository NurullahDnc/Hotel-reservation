import React, { useEffect, useMemo, useState } from 'react';
import Table from '../Table';
import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getReservation } from '../../../redux/ReservationSlice';
import { FaCheckCircle } from "react-icons/fa";
import axios from 'axios';
import { getRoom } from '../../../redux/RoomSlice';
import Modal from '../../auth/Modal';
import { loginModalFun } from '../../../redux/ModalSlice';
import { useForm } from 'react-hook-form';
import Input from '../../general/Input';
import Button from '../../general/Button';
import TextArea from '../../general/TextArea';

import { toast } from 'react-toastify';
import PageTitle from '../../general/PageTitle';


const Room = () => {
    const rooms = useSelector((state) => state.getRoom.rooms);
    const dispatch = useDispatch();
    const [createOpen, setCreateOpen] = useState(false);
    const [updateOpen, setUpdateOpen] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    useEffect(() => {
        dispatch(getRoom());
    }, [dispatch]);
    

    //tabloda oda ozekikleri
    const data = rooms && rooms.map((item) => {
        //durum ve css control
        const statusClass = item.Availability === true ? 'dolu' : item.Availability === false ? 'bos' : 'varsayilan';
        const color = statusClass === 'dolu' ? 'red' : statusClass === 'bos' ? 'green' : 'blue';

        return {
            id: item._id,
            img: item.image,
            category: item.category,
            description: item.description,
            price: item.price,
            capacity: item.capacity,
            availability: statusClass,
            color: color, // Arka plan rengini ekleyin
        };
    });

    //tablonun title
    const columns = useMemo(() => [
        {
            field: 'img',
            headerName: 'Resim',
            width: 100,
            renderCell: (params) => (
                <img src={params.value} alt="Room Image" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            )
        },
        { field: 'description', headerName: 'Açıklama', width: 250 },
        { field: 'category', headerName: 'Kategori', width: 150 },
        { field: 'price', headerName: 'Fiyat', width: 150 },
        { field: 'capacity', headerName: 'Misafir Sayısı', width: 120 },
        {
            field: 'availability', headerName: 'Durumu', width: 120,

            renderCell: (params) => (
                <div style={{ color: params.row.color }}>
                    {params.value}
                </div>
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
            const response = await axios.post(`http://localhost:5000/room/delete/${id}`);
            toast.success(response.data.message)
        } catch (error) {
            toast.error(error.response.data.error);
        }
    };

    //update Func.
    const handleUpdate = (room) => {

        setSelectedRoom(room); // Seçilen odayı state'e kaydet
        setUpdateOpen(true); 
    };

    //create func.
    const roomCreate = async data => {

        const formData = new FormData();
        formData.append('image', data.image[0]);
        formData.append('category', data.category);
        formData.append('description', data.description);
        formData.append('price', data.price);
        formData.append('capacity', data.capacity);
        formData.append('Availability', false); 
    
        
        try {
            setUpdateOpen(false);
            const response = await axios.post(`http://localhost:5000/room/create`, formData);
            toast.success(response.data.message)

        } catch (error) {
            toast.error(error.response.data.error);
        }
    }

    //update func.
    const roomUpdate = async (data) => {

        const formData = new FormData();
        formData.append('image', data.image[0]);
        formData.append('category', data.category);
        formData.append('description', data.description);
        formData.append('price', data.price);
        formData.append('capacity', data.capacity);
       
 
        try {
            const response = await axios.put(`http://localhost:5000/room/update/${data.id}`, formData);
            toast.success(response.data.message)
            setUpdateOpen(false); 

        } catch (error) {
            toast.error(error.response.data.error);
        }
    };

    useEffect(() => {
        // Seçilen oda değiştiğinde formdaki inputların değerlerini set et, update icin
        if (selectedRoom) {
            setValue('id', selectedRoom.id);
            setValue('category', selectedRoom.category);
            setValue('description', selectedRoom.description);
            setValue('price', selectedRoom.price);
            setValue('capacity', selectedRoom.capacity);
            setValue('image', selectedRoom.img);

        }
    }, [selectedRoom, setValue]);

    //create elementi
    const createElement = (
            <form onSubmit={handleSubmit(roomCreate)} encType="multipart/form-data">
                <Input id="category" title="Kategori Giriniz" type="text" placeholder="Kategori Giriniz" register={register} errors={errors} required />
                <TextArea id="description" title="Açıklama Giriniz" type="text" placeholder="Açıklama Giriniz" register={register} errors={errors} required />
                <Input id="price" title="Fiyat" type="number" placeholder="Fiyat" register={register} errors={errors} required />
                <Input id="capacity" title="Misafir Sayısı" type="number" placeholder="Misafir Giriniz" register={register} errors={errors} required />
                <Input id="image" title="Gorsel Ekle" type="file" placeholder="Varsa Eklemek İstedikleriniz" register={register} errors={errors} required />
                <Button btnText={"Oda ekle"} />
            </form>
    )

    //create elementi
    const updateElement = (
            <form onSubmit={handleSubmit(roomUpdate)} encType="multipart">
                <Input id="category" title="Kategori Giriniz" type="text" placeholder="Kategori Giriniz" register={register} errors={errors} required />
                <Input id="description" title="Açıklama Giriniz" type="text" placeholder="Açıklama Giriniz" register={register} errors={errors} required />
                <Input id="price" title="Fiyat" type="number" placeholder="Fiyat" register={register} errors={errors} required />
                <Input id="capacity" title="Misafir Sayısı" type="number" placeholder="Misafir Sayısı" register={register} errors={errors} required />
                <Input id="image" title="Görsel Ekle" type="file" placeholder="Varsa Eklemek İstedikleriniz" register={register} errors={errors} required />
                <Button btnText={"Güncelle"} />
            </form>
    )

    return (
        <div>
            {/*create Modal */}
            <Modal
                isOpen={createOpen}
                title="Oda Oluştur"
                bodyElement={createElement}
                btnLabel="Oda Oluştur"
                onClose={() => setCreateOpen(false)}
                onSubmit={roomCreate}
                btnNull
                modals
            />

            {/*update Modal */}
            <Modal
                isOpen={updateOpen}
                title="Oda Güncelle"
                bodyElement={updateElement}
                btnLabel="Oda Güncelle"
                onClose={() => setUpdateOpen(false)}
                onSubmit={roomUpdate}
                btnNull
                modals

            />

            <PageTitle title="Odalar" />

            <Table rows={data} columns={columns} />

            <Button btnText="Oda Oluştur" small onSubmit={() => setCreateOpen(true)} />
        </div>
    );
};

export default Room;
