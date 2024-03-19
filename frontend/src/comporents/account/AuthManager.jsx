
import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { getUser, logout } from '../../redux/User';

const AuthManager = () => {
  const [cookies] = useCookies(['jwt']);
  const dispatch = useDispatch();

    //cookies de token yoksa, logout func. calıstır varsa user func calsıtır ve kulanıcı bilgilerini alır
  useEffect(() => {
    if (!cookies.jwt) {
      dispatch(logout());
    } else {
      dispatch(getUser());
    }
  }, [dispatch, cookies.jwt]);

 };

export default AuthManager;
