import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
 import { useNavigate } from 'react-router-dom';
import AuthManager from '../../../comporents/account/AuthManager';
import Input from '../../../comporents/general/Input'
import { useForm } from 'react-hook-form';
import Button from '../../../comporents/general/Button';
import { getUser } from '../../../redux/User';
import Table from '../../general/Table';
import Title from '../Title';

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
    <div  >
      <Title />
      {/*Kulanıcı oturumunu kontrol ediyor */}
      <AuthManager />

      {
        user && <div style={{position: "relative", top: "-100px", background : "gray", width: "90%", margin: "auto"  }}>
            <h1>Kullanıcı Profili</h1>
      <p>Kullanıcı Adı: {user._id}</p>
      <p>Adı: {user.firstName}</p>
      <p>Soyadı: {user.lastName}</p>
      <p>Email: {user.email}</p>
        </div>
      }
      
      {/* <Table /> */}
      
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus.
 
    </div>
  );
};


export default Profile;
