import React, { useEffect } from 'react'
import Input from '../general/Input'
import Modal from './Modal'
import Button from '../general/Button'
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from 'react-redux';
import { loginModalFun } from '../../redux/ModalSlice';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-toastify';



const Login = () => {

    const { loginModal } = useSelector((state) => state.modal)
    const dispacth = useDispatch()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        
        axios.post("http://localhost:5000/user/login", data)
        .then((response)=> {
            toast.success(response.data.message)
            const token = response.data.accessToken

            //token'i cookie kayıt etme
            document.cookie = `jwt=${token}; max-age=${7 * 24 * 60 * 60}; path=/`;
            console.log(response);
            // dispacth(loginModalFun())
            
        })
        .catch((err)=> {
            console.log(err.response.data.error);
            toast.error(err.response.data.error)
        
        }) 

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
