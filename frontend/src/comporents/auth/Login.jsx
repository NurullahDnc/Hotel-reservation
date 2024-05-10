import React from 'react';
import Input from '../general/Input';
import Modal from './Modal';
import { useDispatch, useSelector } from 'react-redux';
import { loginModalFun } from '../../redux/ModalSlice';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-toastify';
import GoogleAuth from './GoogleAuth'

const Login = () => {
    const { loginModal } = useSelector((state) => state.modal);
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

    const onSubmit = data => {
        axios.post("http://localhost:5000/user/login", data)
            .then((response) => {
                toast.success(response.data.message);
                const token = response.data.accessToken;
                document.cookie = `jwt=${token}; max-age=${7 * 24 * 60 * 60}; path=/`;
                 dispatch(loginModalFun());
            })
            .catch((err) => {
                toast.error(err.response.data.error);
            });            
    };
 
   

    const bodyElement = (
        <div>
            <Input id="email" type="email" placeholder="E-posta" register={register} errors={errors} required />
            <Input id="password" type="password" placeholder="Şifre" register={register} errors={errors} required />
        </div>
    );

    const footerElement = (
        <div>
            <GoogleAuth />
        </div>
    );

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Modal 
                isOpen={loginModal}
                bodyElement={bodyElement}
                footerElement={footerElement}
                title="Giriş Yap"
                btnLabel="Giriş Yap"
                onClose={() => dispatch(loginModalFun())}
                onSubmit={() => {}}
            />
        </form> 
    );
};

export default Login;


 