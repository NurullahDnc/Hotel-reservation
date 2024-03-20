import React, { useEffect } from 'react';
import { gapi } from 'gapi-script';
import GoogleLogin from '@leecheuk/react-google-login';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginModalFun } from '../../redux/ModalSlice';
import { toast } from 'react-toastify';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const GoogleButton = ({outline}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        gapi.load("client:auth2", () => {
            gapi.auth2.init({ clientId: clientId });
        });
    }, []);

    const responseGoogle = (response) => {
        //tokenId gonder, token cookie kayıt et
        axios
            .post('http://localhost:5000/user/google', { token: response.tokenId })
            .then((response) => {
                const token = response.data.accessToken;
                document.cookie = `jwt=${token}; max-age=${7 * 24 * 60 * 60}; path=/`;
                dispatch(loginModalFun());
                toast.success(response.data.message);


            })
            .catch((err) => {
                toast.error(err.response.data.error);
                
            })

    }


    return (
        <GoogleLogin
            className={`buttonGeneral ${outline ? 'btnOutline' : ''}`}
            clientId={clientId}
            buttonText={"Google"}
            onSuccess={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    );
};

export default GoogleButton;
