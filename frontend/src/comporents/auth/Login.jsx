import React, { useEffect } from 'react'
import Input from '../general/Input'
import Modal from './Modal'
import Button from '../general/Button'
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from 'react-redux';
import { loginModalFun } from '../../redux/ModalSlice';
import { useForm } from "react-hook-form";



const Login = () => {

    const { loginModal } = useSelector((state) => state.modal)
    const dispacth = useDispatch()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        try {
            axios.post("url", data)
            toast.success("Kayıt işlemi başarıyla tamamlandı");

        } catch (error) {

            if (error.response) {
                toast.error("Sunucu hatası: " + error.response);

            } else if (error.request) {
                toast.error("cevap alınamadı: " + error.request);

            } else {
                toast.error("Bir hata oluştu: " + error.message);
            }
        }
    }

    //modalın icerik kısmı
    const bodyElement = (
        <div>
            <Input id={"email"} type={"email"} placeholder={"e-posta"} register={register} errors={errors} required />
            <Input id={"password"} type={"password"} placeholder={"Sifre"} register={register} errors={errors} required />
        </div>
    )

    //modalın alt kısmı
    const footerElement = (
        <div>
            <Button btnText={"Google ile Giriş"} outline icon={FcGoogle} />
        </div>
    )

    return (

        <form onSubmit={handleSubmit(onSubmit)}>

            {/*modal'a props geciyoruz */}
            <Modal
                isOpen={loginModal}
                bodyElement={bodyElement}
                footerElement={footerElement}
                title={"Giriş Yap"}
                btnLabel={"Giriş Yap"}
                onClose={() => { dispacth(loginModalFun()) }}
                onSubmit={() => { }}

            />

        </form>
    )
}

export default Login
