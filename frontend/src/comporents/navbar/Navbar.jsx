import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../redux/DarkModeSlice';
import { useTranslation } from 'react-i18next';
import { loginModalFun, registerModalFun } from '../../redux/ModalSlice';
import { getUser, logout } from '../../redux/UserSlice';
import {useCookies} from 'react-cookie'
import { toast } from 'react-toastify';
import AuthManager from '../account/AuthManager';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Navbar = () => {
  const navbardata = [
    { id: "1", name: "hakkımızda", url: "hakkımızda" },
    { id: "2", name: "odalar", url: "odalar" },
    { id: "3", name: "Aktiviteler", url: "aktiviteler" },
    { id: "4", name: "Restorant", url: "restaurant" },
    { id: "5", name: "galeri", url: "galeri" },
    { id: "6", name: "iletisim", url: "iletisim" }

  ]

  const [isMenuOpen, setMenuOpen] = useState(true);
  const [reservationIsOpen, setReservationIsOpen] = useState(false);
  const [isUserOpen, setUserOpen] = useState(true);
  const [currentDate, setCurrentDate] = useState('');
  const [selectLanguage, setSelectLanguage] = useState("Tr")
  const dispatch = useDispatch();
  const user = useSelector((state) => state.getUser.user);  
  const router = useNavigate();
  const [cookies] = useCookies(['jwt']);
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode)
  const { t, i18n } = useTranslation();
  const [startDate, setStartDateLocal] = useState(null);
  const [endDate, setEndDateLocal] = useState(null);
  
  const clickHandle = async (lang) => {
    await i18n.changeLanguage(lang);
  };
 
  
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
  }
  //user ac kapa
  const toggleUser = () => {
    setUserOpen(!isUserOpen);
    
  }
  
  //darkmode icin redux'daki func. tetikliyor
  const toggleDark = () => {
    dispatch(toggleDarkMode());
    
  }
  
  
  return (
    <div className='navbar'>
      <AuthManager />
      
      {/*solda acılır kapanır menu */}
      <div className={`navbar-isMenu ${isMenuOpen ? `navbar-isOpen` : `""`} `}>
        <div className='navbar-isMenu-item'>
          {
            navbardata.map(item => (
              <Link key={item.id} to={item.url} onClick={() => setMenuOpen(!isMenuOpen)}>
                <ul key={item.id} className='navbar-isMenu-item-items' >
                  <li  >
                    {/* <Link onClick={()=>     setMenuOpen(!isMenuOpen)} to={item.url}>{item.name}</Link> */}
                    {item.name}
                  </li>
                </ul>
              </Link>

            ))
          }
        </div>
        <div className='navbar-isMenu-bottom'>
          <p className='navbar-isMenu-bottom-number'>542 499 1111</p>
          <p className='navbar-isMenu-bottom-text'>Bizi Arayın</p>
          <button className='navbar-isMenu-bottom-button'> Yada Biz Size Ulaşalım</button>
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

          <DatePicker
          className='inputs-input'
          selected={startDate}
          onChange={(date) => {
            setStartDateLocal(date);
            // setStartDate(date);
          }}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="Giriş Tarihi"
          
        />

        <DatePicker
          className='inputs-input'
          selected={endDate}
          onChange={(date) => {
            setEndDateLocal(date);
            // setEndDate(date);
          }}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText="Çıkış Tarihi"
        />

        <button onClick={() => { 
            router("/odalar");
            setReservationIsOpen(!reservationIsOpen); 
        }}>
            Oda Ara
        </button>

        </div>
      </div>


      <div className='navbar-container'>
        {/* solda hamburgermenu icon */}
        <div className='navbar-container-left'>
          {/*menu acıldıgında icon rengini degistir. */}
          <RxHamburgerMenu onClick={toggleMenu} className={`${isMenuOpen ? "navbar-container-left-hamburgerIcon " : "hamburgerIcons"}`} size={25} />

        </div>
        {/* ortada logo */}
        <div className='navbar-container-center'>
          <Link to={"/"} >STAYEASE</Link>
        </div>

        <div className='navbar-container-right'>
          <ul >

            {/*user icon ve aç kapa bolumu */}
            <li className='navbar-container-right-user'>
                 <FaRegUser onClick={toggleUser} className='navbar-container-right-user-icon' size={23} />
               <ul className={`navbar-container-right-user-item ${isUserOpen ? "isUser" : ""} `}>

                {/*modal acıyor, tıklandıktan sonra user open kapatıyor */}
                {
                  user ?
                    <div className='navbar-container-right-user-item-container'>
                      <li onClick={() => {
                        setUserOpen(!isUserOpen)
                        router("/user/profil")
                      }}
                      >Profil</li>

                      <li onClick={() => {
                        dispatch(logout())
                        setUserOpen(!isUserOpen);
                        toast.success("Çıkış başarılı")
                        window.location.reload();

                      }}>Cıkış Yap</li>
                    </div>
                    :
                    <div className='navbar-container-right-user-item-container'>
                      <li onClick={() => {
                        dispatch(loginModalFun());
                        setUserOpen(!isUserOpen)
                      }}
                      >Giriş Yap</li>

                      <li onClick={() => {
                        dispatch(registerModalFun());
                        setUserOpen(!isUserOpen);
                      }}>Kayıt Ol</li>
                    </div>
                }

              </ul>
            </li>

            {/*rezervasyon yap buttonu */}
            <li>
              <button onClick={toogleReservation} className='navbar-container-right-button'>Rezervasyon Yap</button>
            </li>

            {/*sagda rezervasyon yap button dil secme */}
            <li className='navbar-container-right-select'>
              <select onChange={(e) => clickHandle(e.target.value)} >
                <option value="tr">Tr</option>
                <option value="en">En</option>
              </select>
            </li>
            <li onClick={toggleDark} className='navbar-container-right-darkMode'>
              {
                isDarkMode ? <MdDarkMode size={22} /> : <MdOutlineDarkMode size={22} />
              }
            </li>
          </ul>

        </div>

      </div>
    </div>
  )
}

export default Navbar


