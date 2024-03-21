import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
 import { useNavigate } from 'react-router-dom';
import AuthManager from './AuthManager';
import Input from '../../../comporents/general/Input'
import { useForm } from 'react-hook-form';
import Button from '../../../comporents/general/Button';
import { getUser } from '../../../redux/User';

const Profile = () => {
  const user = useSelector((state) => state.getUser.user);
  const router = useNavigate()
  const dispact = useDispatch()

  useEffect(()=>{
    dispact(getUser())
  },[dispact] )
 

  if (!user) {
    router("/")
    return <div className='notFound'>{"Kullanıcı profil bilgileri yükleniyor..."}</div>;
  }

  return (
    <div style={{margin: "7rem", marginBottom:"50rem"}}>
      {/*Kulanıcı oturumunu kontrol ediyor */}
      <AuthManager />

      {
        user && <div>
            <h1>Kullanıcı Profili</h1>
      <p>Kullanıcı Adı: {user._id}</p>
      <p>Adı: {user.firstName}</p>
      <p>Soyadı: {user.lastName}</p>
      <p>Email: {user.email}</p>
        </div>
      }
 
    </div>
  );
};


export default Profile;
