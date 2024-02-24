import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";



const Navbar = () => {
  const navbardata = [
    { id: "1", name: "hakkımızda" },
    { id: "2", name: "odalar" },
    { id: "3", name: "Aktiviteler" },
    { id: "4", name: "Restorant" },
    { id: "5", name: "galeri" },
    { id: "6", name: "iletisim" }


  ]

  const [isMenuOpen, setMenuOpen] = useState(true);
  const [reservationIsOpen, setReservationIsOpen] = useState(false);
  const [isUserOpen, setUserOpen] = useState(true);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // Bugünkü tarihi al, usestate at
    const today = new Date().toISOString().split("T")[0];
    setCurrentDate(today);
  }, []);



  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }


  const toogleReservation = () => {
    setReservationIsOpen(!reservationIsOpen)
  }

  const toggleUser =()=>{
    setUserOpen(!isUserOpen);
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
                  <a href="#news">{item.name}</a>

                </li>
              </ul>
            ))
          }
        </div>
        <div className='navbar-isMenu-bottom'>
          asdfasdasf
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
        <input type="date" id="birthday" name="birthday" />

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
          LOGO
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
          </ul>

        </div>

      </div>
    </div>
  )
}

export default Navbar
