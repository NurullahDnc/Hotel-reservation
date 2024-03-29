import React, { useEffect } from 'react'
import Table from '../../general/Table'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, getUserInfo } from '../../../redux/UserSlice'

const Customers = () => {


  const reservationTitle = [
    { title: "id" },
    { title: "Adi" },
    { title: "Soyad" },
    { title: "email" },
    { title: "uye tarihi" },
   

  ]


  const dispatch = useDispatch();
  const users = useSelector((state) => state.getUser.users);



  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  console.log(users, "user");


  const titleElement = (
    <tr style={{ display: "flex" }}>
      {reservationTitle.map((item, i) => (
        <th key={i} style={{ flex: 1 }}>{item.title}</th>
      ))}
    </tr>
  );

  const bodyElement = users && users.map((item, index) => (
    <tr key={index} style={{ display: "flex" }}>
      {/* <td><img src={"../image/ozel3.jpg"} style={{ borderRadius: "10px", width: "75px", height: "60px", objectFit: "cover" }} alt="as" /></td> */}
      <td>{item._id}</td>
      <td>{item.firstName}</td>
      <td>{item.lastName}</td>
      <td>{item.email}</td>
      <td>{item.createdAt}</td>


     

      
    </tr>
  ))

  return (
    <div>
      {
        <>
          <Table bodyElement={bodyElement} titleElement={titleElement} />

        </>
      }
    </div>
  )

}

export default Customers

