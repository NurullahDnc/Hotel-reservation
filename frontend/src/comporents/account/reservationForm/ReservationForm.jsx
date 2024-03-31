import { useForm } from 'react-hook-form';
import Input from '../../general/Input';
import Button from '../../general/Button';
import Select from '../../general/Select';
import React, { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DateRangePicker from '../../general/DatePicker';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { getUser, getUserInfo } from '../../../redux/UserSlice';
import { toast } from 'react-toastify';
import { getCategories, getRoom } from '../../../redux/RoomSlice';


const ReservationForm = () => {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const dispact = useDispatch();

    const user = useSelector((state) => state.getUser.user);
    const room = useSelector((state) => state.getRoom.rooms);

    useEffect(() => {
        dispact(getRoom())
    }, [dispact])

    useEffect(() => {
        dispact(getUserInfo())
    }, [dispact])


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data => {

        //rezervasyon degiskeni
        const newReservation = {
            room: data.roomType,
            user: user._id,
            checkInDate: startDate,
            checkOutDate: endDate,
            numberOfGuests: data.numberOfGuests,
            // Price: roo,
            description: data.description,
        }


        try {
            const res = await axios.post("http://localhost:5000/reservation/create", newReservation);
            toast.success("Rezervasyonunuz Oluşturuldu");

        } catch (error) {
            toast.error("Rezervasyon oluşturulurken bir hata oluştu");
        }

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>

                <Select id="roomType" title="Oda Seçiniz" placeholder={"Seçiniz"} options={room} register={register} errors={errors} defaultValue="" />

                <Input id="numberOfGuests" title="Misafir Sayısı" type="number" placeholder="Misafir Giriniz" register={register} errors={errors} required />

                <DateRangePicker title="Giriş / Çıkış Tarihleri" setStartDate={setStartDate} setEndDate={setEndDate} />

                <Input id="description" title="Not" type="text" placeholder="Varsa Eklemek İstedikleriniz" register={register} errors={errors} required />


            </div>

            <Button small btnText={"Rezervasyon Yap"} />
        </form>
    );
}

export default ReservationForm;
