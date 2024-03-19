import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
 import { useNavigate } from 'react-router-dom';
import AuthManager from './AuthManager';

const UserProfile = () => {
  const user = useSelector((state) => state.getUser.user);
  const router = useNavigate()


  if (!user) {
    router("/")
    return <div className='notFound'>{"Kullanıcı profil bilgileri yükleniyor..."}</div>;
  }

  return (
    <div>
      {/*Kulanıcı oturumunu kontrol ediyor */}
      <AuthManager />

      <h1>Kullanıcı Profili</h1>
      <p>Kullanıcı Adı: {user._id}</p>
      <p>Adı: {user.firstName}</p>
      <p>Soyadı: {user.lastName}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};


export default UserProfile;
