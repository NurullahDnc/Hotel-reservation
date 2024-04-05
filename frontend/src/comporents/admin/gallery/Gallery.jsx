import React, { useEffect, useMemo, useState } from 'react'
import Table from '../Table'
import { FaCheckCircle, FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getReservation } from '../../../redux/ReservationSlice';
import Modal from '../../auth/Modal';
import Input from '../../general/Input';
import TextArea from '../../general/TextArea';
import Button from '../../general/Button';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';


const Gallery = () => {

    const reservation = useSelector((state) => state.getReservation.reservation);
    const dispatch = useDispatch();
    const [createOpen, setCreateOpen] = useState(false);
    const [updateOpen, setUpdateOpen] = useState(false);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [selectedGallery, setSelectedGallery] = useState(null);
    const [gallery, setGallery] = useState([]);


    useEffect(() => {
        dispatch(getReservation())
    }, [dispatch,])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/gallery`);
                setGallery(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                toast.error(error.response.data.error);
            }
        };
    
        fetchData();
    }, []);
    
    

    const data = gallery && gallery.map((item) => {


        return {
            id: item?._id,
            img: item?.image,
            createdAt: item?.createdAt


        };
    });

    const columns = useMemo(() => [
        { field: 'id', headerName: 'Id', width: 200, align: "center" },
        {
            field: 'img',
            headerName: 'Resim',
            width: 200,
            renderCell: (params) => (
                <img src={params.value} alt="Gallery Image" style={{ width: 120, objectFit: "contain" }} />
            )
            
        },    
        
        { field: 'createdAt', headerName: 'Oluşturma Tarihi', width: 250,},
        

        {
            field: "Sil",
            headerName: "Sil",
            width: 100,
            renderCell: (params) => {
                return (
                    <button onClick={() => handleDelete(params.id)} style={{ color: "red" }}  >
                        <FaTrash size={22} />
                    </button>
                )
            }
        },
        {
            field: "Güncelle",
            headerName: "Güncelle",
            width: 100,
            renderCell: (params) => {
                return (
                    <button onClick={() => handleUpdate(params.row)} style={{ color: "green" }}  >
                        <FaCheckCircle size={22} />
                    </button>
                )
            }
        },


    ], []);

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:5000/gallery/${id}`);
            toast.success(response.data.message)
        } catch (error) {
            toast.error(error.response.data.error);
        }
    }

    const handleUpdate = (gallery) => {
        setSelectedGallery(gallery);
        setUpdateOpen(true);
    }

    useEffect(() => {
        // Seçilen oda değiştiğinde formdaki inputların değerlerini set et, update icin
        if (selectedGallery) {
            setValue('id', selectedGallery.id)
            setValue('image', selectedGallery.img);
        }
    }, [selectedGallery, setValue]);


    const galleryCreate = async data => {
 
        const formData = new FormData();
        formData.append('image', data.image[0]);


        try {
            setCreateOpen(false);
            const response = await axios.post(`http://localhost:5000/gallery/create`, formData );
            toast.success(response.data.message)

        } catch (error) {
            toast.error(error.response.data.error);
        }
    }


    const gallerUpdate = async (data) => {
        console.log("as", data);
        const formData = new FormData();
        
        formData.append('image', data.image[0]);


        try {
            const response = await axios.put(`http://localhost:5000/gallery/update/${data.id}`, formData);
            toast.success(response.data.message)
            setUpdateOpen(false);

        } catch (error) {
            toast.error(error.response.data.error);
        }
    };

    //create elementi
    const createElement = (
        <form onSubmit={handleSubmit(galleryCreate)} encType="multipart/form-data">
            <Input id="image" title="Gorsel Ekle" type="file" placeholder="Varsa Eklemek İstedikleriniz" register={register} errors={errors} required />
            <Button btnText={"Oda ekle"} />
        </form>
    )

    //create elementi
    const updateElement = (
        <form onSubmit={handleSubmit(gallerUpdate)} encType="multipart">
            <Input id="image" title="Görsel Ekle" type="file" placeholder="Varsa Eklemek İstedikleriniz" register={register} errors={errors} required />
            <Button btnText={"Güncelle"} />
        </form>
    )

    return (
        <div>


            <Modal
                isOpen={createOpen}
                title="Oda Oluştur"
                bodyElement={createElement}
                btnLabel="Oda Oluştur"
                onClose={() => setCreateOpen(false)}
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
                btnNull
                modals

            />

            Gallery
            <Table rows={data} columns={columns} />

            <Button btnText="Oda Oluştur" small onSubmit={() => setCreateOpen(true)} />


        </div>
    )
}

export default Gallery
