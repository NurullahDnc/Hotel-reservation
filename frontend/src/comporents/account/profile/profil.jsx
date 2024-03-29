import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthManager from '../../../comporents/account/AuthManager';
import Input from '../../../comporents/general/Input'
import { useForm } from 'react-hook-form';
import Button from '../../../comporents/general/Button';
import { getUser, getUserInfo } from '../../../redux/UserSlice';
import Table from '../../general/Table';
import Title from '../Title';
import Loading from '../../Loading';

const Profile = () => {
  const user = useSelector((state) => state.getUser.user);
  const userStatus = useSelector((state) => state.getUser.userStatus);

  const dispact = useDispatch()

  useEffect(() => {
    dispact(getUserInfo())
  }, [dispact])

  return (
    <div>

      <Title />

      {/* Kullanıcı oturumunu kontrol ediyor */}
      <AuthManager />

      {userStatus === 'LOADING' ? (
        <Loading />
      ) : user ? (
        <div style={{ position: "relative", top: "-100px", background: "gray", width: "90%", margin: "auto" }}>
          <h1>Kullanıcı Profili</h1>
          <p>Kullanıcı Adı: {user._id}</p>
          <p>Adı: {user.firstName}</p>
          <p>Soyadı: {user.lastName}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Kullanıcı bilgileri yüklenirken bir hata oluştu. Lütfen tekrar deneyin.</p>
      )}
    </div>
  );
};


export default Profile;
