import React, { useEffect, useMemo } from 'react';
import Table from '../Table';
import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getReservation } from '../../../redux/ReservationSlice';
import { FaCheckCircle } from "react-icons/fa";
import axios from 'axios';
import { toast } from 'react-toastify';
import PageTitle from '../../general/PageTitle';


const Reservation = () => {

    const reservation = useSelector((state) => state.getReservation.reservation);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getReservation())
    }, [dispatch,])

     const data = reservation && reservation.map((item) => {
        
        // Status'a göre sınıf adını belirle
        const statusClass = item.status === 'pending' ? 'bekleniyor' : item.status === 'approved' ? 'onaylandı' : item.status === 'cancelled' ? 'iptal-edildi' : item.status === 'reject' ? "Reddedildi" : "";
        const color = item.status === 'pending' ? 'yellow' : item.status === 'approved' ? 'green' : item.status === 'cancelled' ? 'red' : '';
        const firstName = item.user?.firstName === undefined? "Kulanıcı Bulunamadı": item.user?.firstName
        const lastName = item.user?.lastName === undefined? "": item.user?.lastName

        return {
            id: item?._id,
            firstName: firstName + "  " + lastName,
            email: item.user?.email,
            category: item.room?.category,
            description: item.description,
            numberOfGuests: item.numberOfGuests,
            dayCount: item.dayCount,
            totalPrice: item.totalPrice,
            checkInDate: item.checkInDate,
            checkOutDate: item.checkOutDate,
            createdAt: item.createdAt,
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
        { field: 'numberOfGuests', headerName: 'Misafir Sayısı', width: 100, align: "center" },
        { field: 'dayCount', headerName: 'Kac Gün', width: 100, align: "center" },
        { field: 'totalPrice', headerName: 'Toplam Ucret', width: 100, align: "center" },
        { field: 'checkInDate', headerName: 'Giriş Tarihi', width: 100 },
        { field: 'checkOutDate', headerName: 'Çıkış Tarihi', width: 100 },
        { field: 'createdAt', headerName: 'Rezervasyon Tarihi', width: 120 },

        {
            field: 'status', headerName: 'Durumu', width: 100,

            renderCell: (params) => (
                <div style={{ color: params.row.color }}>
                    {params.value}
                </div>
            )
        },
        {
            field: "Reddet",
            headerName: "Reddet",
            width: 100,
            align: "center",
            renderCell: (params) => {
                return (
                    <button onClick={() => handleCancelled(params.row)} style={{ color: "red" }}  >
                        <FaTrash size={22} />
                    </button>
                )
            }
        },
        {
            field: "Onayla",
            headerName: "Onayla",
            width: 100,
            align: "center",
            renderCell: (params) => {
                return (
                    <button onClick={() => handleApprove(params.row)} style={{ color: "green" }}  >
                        <FaCheckCircle size={22} />
                    </button>
                )
            }
        },


    ], []);

    //rezervasyon onaylandı
    const handleApprove = async (row) => {

        const id = row.id
        const approveMail = {
            recipient: row.email,
            subject: "Rezervasyonunuz Onaylandı",
            message: `Sayın ${row?.firstName},
        
        Otelimiz STAYEASE, ${row.checkInDate} tarihinde başlayıp ${row.checkOutDate} tarihinde sona eren rezervasyonunuz için teşekkür ederiz. ${row.capacity} kişilik ${row.category} için yapılan rezervasyonunuz başarıyla onaylanmıştır.
        
        Rezervasyon Detayları:
        - Check-in Tarihi: ${row.checkInDate}
        - Check-out Tarihi: ${row.checkOutDate}
        - Oda Türü: ${row.category}
        - Konaklama Süresi: ${row.dayCount} gün
        - Toplam Kişi Sayısı: ${row.numberOfGuests}
        
        Ödeme Bilgileri:
        - Toplam Ücret: ${row.totalPrice} TL
        
        Lütfen otelimize varışınızdan önce herhangi bir özel isteğiniz varsa bizimle iletişime geçmekten çekinmeyin. Değişiklik yapmak veya rezervasyonu iptal etmek isterseniz, lütfen bize bildirin.
        
        Sorularınız veya endişeleriniz için bizimle iletişime geçmekten çekinmeyin. Size konaklamanızı unutulmaz kılmak için buradayız.
        
        Saygılarımla,
        Nurullah Dinç
        ~STAYEASE
        `
        };


        try {
            //rezervasyon onaylanınca müsteriye mail gonderme
            const response = await axios.post(`http://localhost:5000/sendMail`, approveMail);
            toast.success(response.data.message);

        } catch (error) {
            toast.error(error.response.data.error);
        }

        try {
            const response = await axios.post(`http://localhost:5000/reservation/Approved/${id}`);
            toast.success(response.data.message);
        } catch (error) {
            toast.error(error.response.data.error);

        }

    };

    //rezervasyon iptal edildi
    const handleCancelled = async (row) => {

        const rejectMail = {
            recipient: row.email,
            subject: "Rezervasyonunuz Reddedildi",
            message: `Sayın ${row.firstName},
        
        Üzgünüz, Otelimiz STAYEASE'de ${row.checkInDate} tarihinde başlayıp ${row.checkOutDate} tarihinde sona eren rezervasyonunuz maalesef reddedilmiştir. Rezervasyon talebinizle ilgili detaylı bilgi almak için lütfen bizimle iletişime geçin.
        
        Sorularınız veya endişeleriniz için bizimle iletişime geçmekten çekinmeyin.
        
        Saygılarımla,
        Nurullah Dinç
        ~STAYEASE
        `
        };

        try {
            //rezervasyon onaylanınca müsteriye mail gonderme
            const response = await axios.post(`http://localhost:5000/sendMail`, rejectMail);
            toast.success(response.data.message);
            
        } catch (error) {
            toast.error(error.response.data.error);
        }

        try {
            const response = await axios.post(`http://localhost:5000/reservation/reject/${row.id}`);
            toast.success(response.data.message);

        } catch (error) {
            toast.error(error.response.data.error);
        }

    };

    return (
        <div>
           <PageTitle title="Rezervasyonlar" />

            <Table rows={data} columns={columns} />
        </div>
    );
};

export default Reservation;
