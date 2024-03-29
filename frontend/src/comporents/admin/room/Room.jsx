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
import { toast } from 'react-toastify';


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
            img: item.img,
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
        { field: 'img', headerName: 'image', width: 100 },
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
            toast.success("Oda Silindi")
            const response = await axios.post(`http://localhost:5000/room/delete/${id}`);
        } catch (error) {
            toast.error("Hata Oluştu")
        }
    };

    //update Func.
    const handleUpdate = (room) => {
        setSelectedRoom(room); // Seçilen odayı state'e kaydet
        setUpdateOpen(true); // Modalı aç
    };

    //create func.
    const roomCreate = async data => {

        const newRooms = {
            img: data.image[0].name,
            category: data.category,
            description: data.description,
            price: data.price,
            capacity: data.capacity,
            Availability: false,
        }

        try {
            const response = await axios.post(`http://localhost:5000/room/create`, newRooms);
            toast.success("Oda Başarılı bir şekilde Oluşturuldu")
        } catch (error) {
            toast.error("Hata Oluştu")
        }
    }

    //update func.
    const roomUpdate = async (data) => {

        const updatedRoom = {
            img: data.image[0].name,
            category: data.category,
            description: data.description,
            price: data.price,
            capacity: data.capacity,
        };

        try {
            const response = await axios.put(`http://localhost:5000/room/update/${data.id}`, updatedRoom);
            toast.success("Oda Başarılı bir şekilde Güncellendi")
        } catch (error) {
            toast.error("Hata Oluştu")
        }
    };

    useEffect(() => {
        // Seçilen oda değiştiğinde formdaki inputların değerlerini set et
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
        <div>
            <form onSubmit={handleSubmit(roomCreate)} enctype="multipart/form-data">
                <Input id="category" title="Kategori Giriniz" type="text" placeholder="Kategori Giriniz" register={register} errors={errors} required />
                <Input id="description" title="Açıklama Giriniz" type="text" placeholder="Açıklama Giriniz" register={register} errors={errors} required />
                <Input id="price" title="Fiyat" type="number" placeholder="Fiyat" register={register} errors={errors} required />
                <Input id="capacity" title="Misafir Sayısı" type="number" placeholder="Misafir Giriniz" register={register} errors={errors} required />
                <Input id="image" title="Gorsel Ekle" type="file" placeholder="Varsa Eklemek İstedikleriniz" register={register} errors={errors} required />
                <Button btnText={"Oda ekle"} />
            </form>
        </div>
    )

    //create elementi
    const updateElement = (
        <div>
            <form onSubmit={handleSubmit(roomUpdate)} enctype="multipart/form-data">
                <Input id="category" title="Kategori Giriniz" type="text" placeholder="Kategori Giriniz" register={register} errors={errors} required />
                <Input id="description" title="Açıklama Giriniz" type="text" placeholder="Açıklama Giriniz" register={register} errors={errors} required />
                <Input id="price" title="Fiyat" type="number" placeholder="Fiyat" register={register} errors={errors} required />
                <Input id="capacity" title="Misafir Sayısı" type="number" placeholder="Misafir Sayısı" register={register} errors={errors} required />
                <Input id="image" title="Görsel Ekle" type="file" placeholder="Varsa Eklemek İstedikleriniz" register={register} errors={errors} required />
                <Button btnText={"Güncelle"} />
            </form>
        </div>
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
            />

            Rezervasyon
            <Table rows={data} columns={columns} />

            <Button btnText="Oda Oluştur" small onSubmit={() => setCreateOpen(true)} />
        </div>
    );
};

export default Room;
