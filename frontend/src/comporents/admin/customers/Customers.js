import React, { useEffect } from 'react'
import Table from '../../general/Table'
import { useDispatch, useSelector } from 'react-redux'
 import { getUser } from '../../../redux/UserSlice'

const Customers = () => {


  const reservationTitle = [
    { title: "oda" },
    { title: "kategori" },
    { title: "Kisi Sayısı" },
    { title: "Acıklama" },
    { title: "Fiyat" },
    { title: "giris" },
    { title: "cıkıs" },
    { title: "Gün" },
    { title: "durumu" },

  ]

 
  const dispatch = useDispatch();
  const user = useSelector((state) => state.getUser.user);

 

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  console.log(user, "user");


  const titleElement = (
    <tr style={{ display: "flex" }}>
      {reservationTitle.map((item, i) => (
        <th key={i} style={{ flex: 1 }}>{item.title}</th>
      ))}
    </tr>
  );

  // const bodyElement = user.map((row, index) => (
  //   <tr key={index} style={{ display: "flex" }}>
  //     {/* <td><img src={"../image/ozel3.jpg"} style={{ borderRadius: "10px", width: "75px", height: "60px", objectFit: "cover" }} alt="as" /></td>
  //     <td>{row.room.category}</td>
  //     <td>{row.numberOfGuests}</td>
  //     <td>{row.description}</td>
  //     <td>{row.totalPrice}</td>

  //     <td>{row.checkInDate}</td>
  //     <td>{row.checkOutDate}</td>
  //     <td>{row.dayCount}</td>

  //     <td style={{ color: row.status === "pending" ? "gold" : row.status === "cancelled" ? "red" : row.status === "approved" ? "green" : "black" }}>
  //       {row.status === "pending" ? "Bekleniyor" : row.status === "cancelled" ? "iptal edildi" : row.status === "approved" ? "Onaylandı" : "hata olsutu"}

  //     </td> */}
  //   </tr>
  // ))

  return (
    <div>
      {
          <>
            <Table   titleElement={titleElement} />

          </>
      }
    </div>
  )

}

export default Customers

