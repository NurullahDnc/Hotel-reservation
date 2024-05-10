import React from 'react'
import Input from '../../general/Input'
import Button from '../../general/Button'
import { useForm } from 'react-hook-form';
import Heading from '../../general/Heading';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';
import { toast } from 'react-toastify';

const AdminLogin = () => {

  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const route = useNavigate();

  const onSubmit = async data => {

    const response = await axios.post("http://localhost:5000/user/admin", data)
      try {
        toast.success(response.data.message);
        const token = response.data.accessToken;
        document.cookie = `jwt=${token}; max-age=${7 * 24 * 60 * 60}; path=/`; 
        route("/admin/dashboard")
        
      } catch (err) {
        toast.error(err.response.data.error);
      }
 
};


  return (
    <div className='adminLogin'>
      <div className='adminLogin-container'>
      <Heading title={"Admin Giriş"} />
        <form onSubmit={handleSubmit(onSubmit)}  >
          <Input id="email" title="email Giriniz" type="email" placeholder="email Giriniz" register={register} errors={errors} required />
          <Input id="password" title="Sifre Giriniz" type="password" placeholder="Sifre Giriniz" register={register} errors={errors} required />

          <Button center btnText="Giriş Yap" small />
        </form>
      </div>

    </div>
  )
}

export default AdminLogin
