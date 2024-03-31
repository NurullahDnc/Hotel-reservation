import React, { useEffect, useMemo } from 'react';
import { getUser, getUserInfo } from '../../../redux/UserSlice'
import Table from '../Table';
import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { FaCheckCircle } from "react-icons/fa";
import axios from 'axios';


const Customers = () => {


  const dispatch = useDispatch();
  const users = useSelector((state) => state.getUser.users);



  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])


  const data = users ? users.map((item) => {
    const statusClass = item.status ? 'onaylandı' : 'Aktif';
    const color = item.status ? 'green' : 'green';
  
    return {
      id: item._id,
      firstName: item.firstName + "  " + item.lastName,
      email: item.email,
      createdAt: item.createdAt,
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
      field: "Reddet",
      headerName: "Reddet",
      width: 100,
      align: "center",
      renderCell: (params) => {
        return (
          <button onClick={() => banUser(params.id)} style={{ color: "red" }}  >
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
          <button onClick={() => unbanUser(params.id)} style={{ color: "green" }}  >
            <FaCheckCircle size={22} />
          </button>
        )
      }
    },


  ], []);

  const banUser = async (id) => {

    try {
      const response = await axios.post(`http://localhost:5000/comment/setCancelled/${id}`);
    } catch (error) {
    }

  };

  const unbanUser = async (id) => {
    try {
      const response = await axios.post(`http://localhost:5000/comment/setApproved/${id}`);
    } catch (error) {
    }
  };

  return (
    <div>
      {
        <>
          <Table rows={data} columns={columns} />

        </>
      }
    </div>
  )

}

export default Customers

