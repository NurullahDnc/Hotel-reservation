
import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { getUser, getUserInfo, logout } from '../../redux/UserSlice';
import { useNavigate } from 'react-router';

const AuthManager = () => {
  const [cookies] = useCookies(['jwt']);
  const dispatch = useDispatch();
  const router = useNavigate()

    //cookies de token yoksa, logout func. calıstır varsa user func calsıtır ve kulanıcı bilgilerini alır
  useEffect(() => {
    if (!cookies.jwt) {
      dispatch(logout());
      router("/")

    } else {
      dispatch(getUserInfo());
    }
  }, [dispatch, cookies.jwt]);

 };

export default AuthManager;
