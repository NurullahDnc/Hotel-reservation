import React, { useEffect, useMemo, useState } from 'react';
import { getUser, getUserInfo } from '../../../redux/UserSlice'
import Table from '../Table';
import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { FaCheckCircle } from "react-icons/fa";
import axios from 'axios';
import { MdOutgoingMail } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import Modal from '../../auth/Modal';
import Input from '../../general/Input';
import TextArea from '../../general/TextArea';
import Button from '../../general/Button';
import { toast } from 'react-toastify';
import PageTitle from '../../general/PageTitle';



const Customers = () => {


  const dispatch = useDispatch();
  const users = useSelector((state) => state.getUser.users);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();


  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])


  const data = users ? users.map((item) => {
    const statusClass = item?.status === true ? "aktif" : item.status === false ? "Devre Dışı" : "Hata Oluştu";
    const color = item?.status == true ? "green" : item.status == false ? "red" : "black";
    const firstName = item.firstName === undefined? "Kulanıcı Bulunamadı": item.firstName
    const lastName = item.lastName === undefined? "": item.lastName


    return {
      id: item?._id,
      firstName: firstName + "  " + lastName,
      email: item?.email,
      createdAt: item?.createdAt,
      status: statusClass,
      color: color
    };
  }) : [];


  const columns = useMemo(() => [
    { field: 'id', headerName: 'Id', width: 100, align: "center" },
    { field: 'firstName', headerName: 'Ad Soyad', width: 150 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'createdAt', headerName: 'Üye Tarihi', width: 200 },

    {
      field: 'status', headerName: 'Durumu', width: 120,

      renderCell: (params) => (
        <div style={{ color: params.row.color }}>
          {params.value}
        </div>
      )
    },
    {
      field: "DevreDısı",
      headerName: "Devre Dışı",
      width: 100,
      align: "center",
      renderCell: (params) => {
        return (
          <button onClick={() => userDeactivate(params.id)} style={{ color: "red" }}  >
            <FaTrash size={22} />
          </button>
        )
      }
    },
    {
      field: "Onayla",
      headerName: "Onayla",
      width: 100,
      align: "center",
      renderCell: (params) => {
        return (
          <button onClick={() => userActive(params.id)} style={{ color: "green" }}  >
            <FaCheckCircle size={22} />
          </button>
        )
      }
    },
    {
      field: "mail gonder",
      headerName: "mail gonder",
      align: "center",
      width: 100,
      renderCell: (params) => (
        <button style={{ color: "green" }}  >
          <MdOutgoingMail onClick={() => handleMailSend(params.row)} size={30} />
        </button>
      )
    },


  ], []);

  useEffect(() => {
    // secilen yorumu state tutuyor
    if (selectedUser) {
      setValue('id', selectedUser.id);
      setValue('recipient', selectedUser.email);

    }
  }, [selectedUser, setValue]);

  //modal acıyor ve kulanıcı bilgisini satate atıyor
  const handleMailSend = (row) => {
    setSelectedUser(row);
    setModalOpen(true);
  };

  //kulanıcı ban kaldırıyor
  const userActive = async (id) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/user/active/${id}`);
      toast.success(response.data.message)

    } catch (error) {
      toast.error(error.response.data.error)

    }
  };

  //kulanıcıyı banlıyor
  const userDeactivate = async (id) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/user/deactivate/${id}`);
      toast.success(response.data.message)
    } catch (error) {
      toast.error(error.response.data.error)
    }

  };


  //kulanıcıya mail gonderme
  const sendMail = async (data) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/sendMail`, data);
      setModalOpen(false);
      toast.success(response.data.message);

    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  const bodyElement = (
    <form onSubmit={handleSubmit(sendMail)} encType="multipart">
      <Input id="recipient" title="Alıcı Giriniz" type="text" placeholder="Alıcı Giriniz" register={register} errors={errors} required />
      <Input id="subject" title="Konu Giriniz" type="text" placeholder="Konu Giriniz" register={register} errors={errors} required />
      <TextArea id="message" title="Mesaj Giriniz" type="text" placeholder="Mesaj Giriniz" register={register} errors={errors} required />
      <Button btnText={"Mail Gonder"} />
    </form>
  );

  return (
    <div>

       
          <Modal
            isOpen={modalOpen}
            title="Mail Gonder"
            bodyElement={bodyElement}
            btnLabel="mail gonder"
            onClose={() => setModalOpen(false)}
            btnNull
            modals
          />
          <PageTitle title="Kulanıcılar" />

          <Table rows={data} columns={columns} />
    </div>
  )

}

export default Customers

