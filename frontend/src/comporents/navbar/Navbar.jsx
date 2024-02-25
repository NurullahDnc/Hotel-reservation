import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import {toggleDarkMode} from '../../redux/DarkModeSlice'


const Navbar = () => {
  const navbardata = [
    { id: "1", name: "hakkımızda", url:"" },
    { id: "2", name: "odalar", url:"" },
    { id: "3", name: "Aktiviteler", url:""},
    { id: "4", name: "Restorant", url:""},
    { id: "5", name: "galeri", url:""},
    { id: "6", name: "iletisim", url:""}

  ]

  const [isMenuOpen, setMenuOpen] = useState(true);
  const [reservationIsOpen, setReservationIsOpen] = useState(false);
  const [isUserOpen, setUserOpen] = useState(true);
  const [currentDate, setCurrentDate] = useState('');

  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode)

  //tarih icin
  useEffect(() => {
    // Bugünkü tarihi al, usestate at
    const today = new Date().toISOString().split("T")[0];
    setCurrentDate(today);
  }, []);

  //isdarkmode degisklik oldugunda, body den dark-mode kaldır
  useEffect(() => {
    // useEffect içinde body'ye sınıf ekleyip çıkarma işlemi
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  //sol menu ac kapa
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }
  
  //rezervasyon ac kapa
  const toogleReservation = () => {
    setReservationIsOpen(!reservationIsOpen)
    console.log("asd");
  }

  //user ac kapa
  const toggleUser =()=>{
    setUserOpen(!isUserOpen);
   }

   //darkmode icin redux'daki func. tetikliyor
  const toggleDark =()=>{
    dispatch(toggleDarkMode());

   }

  return (
    <div className='navbar'>
        {/*solda acılır kapanır menu */}
      <div className={`navbar-isMenu ${isMenuOpen ? `navbar-isOpen` : `""`} `}>
        <div className='navbar-isMenu-item'>
          {
            navbardata.map(item => (
              <ul key={item.id} className='navbar-isMenu-item-items' >
                <li  >
                  <Link to={item.url}>{item.name}</Link>

                </li>
              </ul>
            ))
          }
        </div>
        <div className='navbar-isMenu-bottom'>
          <button onClick={toogleReservation} className='navbar-isMenu-bottom-button'>Rezervasyon yap</button>
           <p className='navbar-isMenu-bottom-text'>Yada iletisime geçin</p>
           <p className='navbar-isMenu-bottom-number'>542 499 1111</p>
        </div>
      </div>

        {/*aşağıya acılan kapanan rezervasyon yap bolumu */}
      <div className='navbar-reservation'>
        <div className={`navbar-reservation-container ${reservationIsOpen ? `""` : `navbar-reservation-reservationNone`}`}>

        <select id="cars" >
                <option value="volvo">2 Kişilk</option>
                <option value="saab">4 kişilik</option>
                <option value="vw">Günlük</option>
          </select>
          
        <input type="date" id="birthday" name="birthday" min={currentDate} />
        <input type="date" id="birthday" name="birthday" min={currentDate} />

          <button>
            Oda Ara
          </button>

        </div>
      </div>


      <div className='navbar-container'>
        {/* solda hamburgermenu icon */}
        <div className='navbar-container-left'>
          {/*menu acıldıgında icon rengini degistir. */}
          <RxHamburgerMenu  onClick={toggleMenu} className={`${isMenuOpen ?"navbar-container-left-hamburgerIcon " :"hamburgerIcons"}`} size={25} />

        </div>
        {/* ortada logo */}
        <div className='navbar-container-center'>
          STAYEASE
        </div>

        <div className='navbar-container-right'>
          <ul >

            {/*user icon ve aç kapa bolumu */}
            <li className='navbar-container-right-user'>
              <FaRegUser onClick={toggleUser}  size={23} /> 
              <ul className={`navbar-container-right-user-item ${isUserOpen? "isUser": ""} `}>
                <li>Giriş Yap</li>
                <li>Kayıt Ol</li>

              </ul>
            </li>

            {/*rezervasyon yap buttonu */}
            <li>
              <button onClick={toogleReservation} className='navbar-container-right-button'>Rezervasyon Yap</button>
            </li>

            {/*sagda rezervasyon yap button dil secme */}
            <li className='navbar-container-right-select'>
              <select id="cars" >
              <option value="volvo">TR</option>
                <option value="saab">EN</option>
                <option value="vw">DE</option>
              </select>

            </li>
            <li onClick={toggleDark} className='navbar-container-right-darkMode'>
              {
                isDarkMode? <MdDarkMode size={22} />: <MdOutlineDarkMode size={22} /> 
              }
            </li>
          </ul>

        </div>

      </div>
    </div>
  )
}

export default Navbar


