import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../general/Input';
import Button from '../../general/Button';
import Select from '../../general/Select';

const ReservationForm = () => {

    const roomOptions = [
        { value: "single", label: "Single Room" },
        { value: "double", label: "Double Room" },
        { value: "suite", label: "Suite" }
    ];


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>

                <Select id="roomType" title="Oda Seçiniz" placeholder={"Seçiniz"} options={roomOptions} register={register} errors={errors} defaultValue="" />

                <Input id="email" title="Kişi Sayısı" type="number" placeholder="1" register={register} errors={errors} required />
                <Input id="test" title="Tarih" type="date" register={register} errors={errors} required />
                <Input id="emasdl" title="Not" type="text" placeholder="Varsa Eklemek İstedikleriniz" register={register} errors={errors} required />



            </div>

            <Button small btnText={"Rezervasyon Yap"} />
        </form>
    );
}

export default ReservationForm;
