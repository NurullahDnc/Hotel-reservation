import React from 'react'
import Input from '../general/Input'
import Modal from './Modal'
import Button from '../general/Button'
import { FcGoogle } from "react-icons/fc";
import { loginModalFun, registerModalFun } from '../../redux/ModalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import axios from "axios";
import {toast } from 'react-toastify';




const Register = () => {

    const { registermodal } = useSelector((state) => state.modal)
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        
        axios.post("http://localhost:5000/user/register", data)
        .then((response)=> {
            toast.success(response.data.message)
            
            dispatch(registerModalFun())
            dispatch(loginModalFun())

        })
        .catch((err)=> {
            toast.success(err.response.data.error)

        }) 
            
    }

    const bodyElement = (
        <div>
            <Input id={"firstName"} type={"text"} placeholder={"Ad"} register={register} errors={errors} required />
            <Input id={"lastName"} type={"text"} placeholder={"Soyad"} register={register} errors={errors} required />
            <Input id={"email"} type={"email"} placeholder={"e-posta"} register={register} errors={errors} required />
            <Input id={"password"} type={"password"} placeholder={"Sifre"} register={register} errors={errors} required />
        </div>
    )
                                                                
    const footerElement = (
        <div>
            <Button btnText={"Google ile Kayıt"} outline icon={FcGoogle} />

        </div>
    )
                                       
    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <Modal
                isOpen={registermodal}
                bodyElement={bodyElement}
                footerElement={footerElement}
                title={"Kayıt Ol"}
                btnLabel={"Kayıt Ol"}
                onClose={() => { dispatch(registerModalFun()) }}
                onSubmit={() => { }}


            />


        </form>
    )
}

export default Register
