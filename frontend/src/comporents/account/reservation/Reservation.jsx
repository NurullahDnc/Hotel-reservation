import React, { useEffect } from 'react'
import Table from '../../general/Table'
import { useDispatch, useSelector } from 'react-redux'
import { getUserReservation } from '../../../redux/ReservationSlice'
import { getUser, getUserInfo } from '../../../redux/UserSlice'
import Loading from '../../Loading'
import { FaCheckCircle, FaTimes } from 'react-icons/fa'
import { toast } from 'react-toastify'
import axios from 'axios'
import PageTitle from '../../general/PageTitle'

const Reservation = () => {


  const reservationTitle = [
    { title: "Oda" },
    { title: "Kategori" },
    { title: "Kişi Sayısı" },
    { title: "Açıklama" },
    { title: "Giriş" },
    { title: "Çıkış" },
    { title: "Rezervasyon Tarihi" },
    { title: "Gün" },
    { title: "Toplam Fiyat" },
    { title: "Durumu" },
    { title: "İptal et" },

  ];


  const reservation = useSelector((state) => state.getReservation.userReservation);
  const reservationStatus = useSelector((state) => state.getReservation.reservationStatus);


  const dispatch = useDispatch();
  const user = useSelector((state) => state.getUser.user);

  useEffect(() => {
    dispatch(getUserReservation())
  }, [dispatch])

  useEffect(() => {
    dispatch(getUserInfo())
  }, [dispatch])

  //getUserReservation props olarak userId gonderiyoruz, userId gore rezervasyonları getirecek
  useEffect(() => {
    if (user) {
      dispatch(getUserReservation(user._id));
    }
  }, [dispatch, user]);


  //tablo comps. title degisken olarak gonderiyorum
  const titleElement = (
    <tr style={{ display: "flex" }}>
      {reservationTitle.map((item, i) => (
        <th key={i} style={{ flex: 1 }}>{item.title}</th>
      ))}
    </tr>
  );

  //tablo comps. body degisken olarak gonderiyorum
  const bodyElement = reservation.length > 0 ? (
    reservation.map((row, index) => (
      <tr key={index} style={{ display: "flex" }}>
        <td><img src={row.room?.image} style={{ borderRadius: "10px", width: "75px", height: "60px", objectFit: "cover" }} alt="as" /></td>
        <td>{row.room?.category}</td>
        <td>{row.numberOfGuests}</td>
        <td>{row.description}</td>

        <td>{row.checkInDate}</td>
        <td>{row.checkOutDate}</td>
        <td>{row.createdAt}</td>
        <td>{row.dayCount}</td>
        <td>{row.totalPrice}</td>

        <td style={{ color: row.status === "pending" ? "gold" : row.status === "cancelled" ? "red" : row.status === "approved" ? "green" : "black" }}>
          {row.status === "pending" ? "Bekleniyor" : row.status === "cancelled" ? "iptal edildi" : row.status === "approved" ? "Onaylandı" : row.status === "reject" ? "Reddedildi" : ""}

        </td>
        <td style={{ color: "red", cursor: "pointer" }} onClick={() => handleReject(row._id)}><FaTimes size={27} /></td>

      </tr>
    )
    )) : (
    <tr>
      <td colSpan="6" style={{ textAlign: "center" }}>Rezervasyonunuz Bulunmamaktadır</td>
    </tr>
  )


  //rezervasyon iptal etme
  const handleReject = async (id) => {

    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/reservation/cancelled/${id}`);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.error);

    }

  }

  return (
    <div>
      <PageTitle title="Rezervasyon" />
      {
        reservationStatus === "LOADING" ? <Loading /> :
          <>
            <Table bodyElement={bodyElement} titleElement={titleElement} />

          </>
      }
    </div>
  )

}

export default Reservation

