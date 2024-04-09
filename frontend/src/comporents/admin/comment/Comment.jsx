import React, { useEffect, useMemo } from 'react';
import Table from '../Table';
import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { FaCheckCircle } from "react-icons/fa";
import axios from 'axios';
import { getComment } from '../../../redux/CommentSlice';
import { toast } from 'react-toastify';
import PageTitle from '../../general/PageTitle';


const  Comment = () => {

    const comment = useSelector((state) => state.getComment.comments);

    const dispatch = useDispatch();

    useEffect(() => {
         dispatch(getComment());
    }, [dispatch, comment]);


    const data = comment && comment.map((item) => {

        const statusClass = item.status ? 'onaylandı' : 'Bekleniyor';
        const color = item.status ? 'green' : 'red';
        const firstName = item.user?.firstName === undefined? "Kulanıcı Bulunamadı": item.user?.firstName
        const lastName = item.user?.lastName === undefined? "": item.user?.lastName

        return {
            id: item._id,
            firstName: firstName + "  " + lastName,
            email: item.user?.email,
            description: item.description,
            rating: item.rating,    
            status: statusClass, // Dinamik sınıf adını ekle
            color: color
        };
    });


    const columns = useMemo(() => [
        { field: 'id', headerName: 'Id', width: 100, align: "center" },
        { field: 'firstName', headerName: 'Ad Soyad', width: 150 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'description', headerName: 'Acıklama', width: 270 },
        { field: 'rating', headerName: 'Değerlendirme', width: 100, align: "center" },
          
        {
            field: 'status', headerName: 'Durumu', width: 120,

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
                    <button onClick={() => handlecancelled(params.id)} style={{ color: "red" }}  >
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
                    <button onClick={() => handleApprove(params.id)} style={{ color: "green" }}  >
                        <FaCheckCircle size={22} />
                    </button>
                )
            }
        },


    ], []);

    //yorumu iptal etme
    const handlecancelled = async (id) => {

        try {
            const response = await axios.post(`http://localhost:5000/comment/setCancelled/${id}`);
            toast.success("yorum reddedildi")
        } catch (error) {
            toast.error("hata olustu")
        }

    };

    //yorum onaylama
    const handleApprove = async (id) => {
        try {
            const response = await axios.post(`http://localhost:5000/comment/setApproved/${id}`);
            toast.success("yorum Onaylandı")
        } catch (error) {
            toast.error("hata olustu")
        }
    };

    return (
        <div>
            <PageTitle title="Yorumlar" />

            <Table rows={data} columns={columns} />
        </div>
    );
};

export default Comment;
