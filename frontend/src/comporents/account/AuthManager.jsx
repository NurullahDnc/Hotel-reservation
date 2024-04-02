
import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, getUserInfo, logout } from '../../redux/UserSlice';
import { useNavigate } from 'react-router';

const AuthManager = () => {
  const [cookies] = useCookies(['jwt']);
  const dispatch = useDispatch();
  const router = useNavigate()

  const user = useSelector((state) => state.getUser.user);

  //cookies de token yoksa ve user.status false ise logout func. calıstır, varsa user bilgilerini al
  useEffect(() => {
    if (!cookies.jwt || user?.status === false) {
      dispatch(logout());
      router("/")

    } else {
      dispatch(getUserInfo());
    }
  }, [dispatch, cookies.jwt, user?.status]);

};

export default AuthManager;
