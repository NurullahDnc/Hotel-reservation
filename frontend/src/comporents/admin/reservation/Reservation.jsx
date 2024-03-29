import React, { useEffect, useMemo } from 'react';
import Table from '../Table';
import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getReservation } from '../../../redux/ReservationSlice';
import { FaCheckCircle } from "react-icons/fa";
import axios from 'axios';


const Reservation = () => {

    const reservation = useSelector((state) => state.getReservation.reservation);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getReservation())
    }, [dispatch, reservation])

    console.log(reservation);

    const data = reservation && reservation.map((item) => {

        // Status'a göre sınıf adını belirle
        const statusClass = item.status === 'pending' ? 'bekleniyor' : item.status === 'approved' ? 'onaylandı' : item.status === 'cancelled' ? 'iptal-edildi' : '';
        const color = item.status === 'pending' ? 'yellow' : item.status === 'approved' ? 'green' : item.status === 'cancelled' ? 'red' : '';

        return {
            id: item._id,
            firstName: item.user.firstName + "  " + item.user.lastName,
            email: item.user.email,
            category: item.room?.category,
            description: item.description,
            capacity: item.room?.capacity,
            dayCount: item.dayCount,
            price: item.room?.price,
            checkInDate: item.checkInDate,
            checkOutDate: item.checkOutDate,
            status: statusClass, // Dinamik sınıf adını ekle
            color: color
        };
    });


    const columns = useMemo(() => [
        { field: 'id', headerName: 'Id', width: 100, align: "center" },
        { field: 'firstName', headerName: 'Ad Soyad', width: 150 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'category', headerName: 'Kategori', width: 150 },
        { field: 'description', headerName: 'Acıklama', width: 200 },
        { field: 'capacity', headerName: 'Misafir Sayısı', width: 100, align: "center" },
        { field: 'dayCount', headerName: 'Kac Gün', width: 100, align: "center" },
        { field: 'price', headerName: 'Toplam Ucret', width: 100, align: "center" },
        { field: 'checkInDate', headerName: 'Giriş Tarihi', width: 100 },
        { field: 'checkOutDate', headerName: 'Çıkış Tarihi', width: 130 },
        {
            field: 'status', headerName: 'Durumu', width: 120,

            renderCell: (params) => (
                <div style={{ color: params.row.color }}>
                    {params.value}
                </div>
            )
        },
        {
            field: "delete",
            headerName: "delete",
            width: 100,
            align: "center",
            renderCell: (params) => {
                return (
                    <button onClick={() => handleDelete(params.id)} style={{ color: "red" }}  >
                        <FaTrash size={22} />
                    </button>
                )
            }
        },
        {
            field: "success",
            headerName: "success",
            width: 100,
            align: "center",
            renderCell: (params) => {
                return (
                    <button onClick={() => handleApprove(params.id)} style={{ color: "green" }}  >
                        <FaCheckCircle size={22} />
                    </button>
                )
            }
        },


    ], []);

    const handleDelete = async (id) => {

        try {
            const response = await axios.post(`http://localhost:5000/reservation/cancelled/${id}`);
            console.log("basaırılı");
        } catch (error) {
            console.log("hata");
        }

    };

    const handleApprove = async (id) => {
        try {
            const response = await axios.post(`http://localhost:5000/reservation/Approved/${id}`);
            console.log("basaırılı");
        } catch (error) {
            console.log("hata");
        }
    };

    return (
        <div>
            Rezervasyon
            <Table rows={data} columns={columns} />
        </div>
    );
};

export default Reservation;
