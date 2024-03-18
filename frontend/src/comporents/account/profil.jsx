import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import {  toast } from 'react-toastify';

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState(null);
  const [cookies] = useCookies(['jwt']);
 
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Kullanıcının JWT'sini al
        const token = cookies.jwt;

        console.log("tokenssaa", token);

        const response = await axios.get('http://localhost:5000/user/profile', {
          headers: {
            Authorization: `jwt ${token}`
          }
        });

        setUserProfile(response.data);
        console.log("res", response.data);
      } catch (error) {
        setError(error.message);
        console.log(error);

        // Hata olduğunda ana sayfaya yönlendir
        window.location.href = "/";
        toast.success("giriş sayfasına yonlendiriliyorsunuz...")
        

      }
    };

    fetchUserProfile();

  }, [cookies.jwt]); // cookies.jwt değiştiğinde useEffect yeniden çalışacak

  if (!userProfile) {
    return <div>Kullanıcı profil bilgileri yükleniyor...</div>;
  }

  return (
    <div>
      <h1>Kullanıcı Profili</h1>
      <p>Kullanıcı Adı: {userProfile._id}</p>
      <p>Kullanıcı Adı: {userProfile.firstName}</p>
      <p>Kullanıcı Adı: {userProfile.lastName}</p>
      <p>Email: {userProfile.email}</p>
      {/* Diğer kullanıcı bilgileri buraya eklenebilir */}
    </div>
  );
};

export default UserProfile;
