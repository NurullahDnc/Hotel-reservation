import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";


const MenuItem = ({item}) => {

  const data = [
    {"name": "Profil", icon: RxHamburgerMenu},
    {"name": "Rezervasyonlarım", icon: RxHamburgerMenu},
    {"name": "Rezervasyon Yap", icon: RxHamburgerMenu},
    {"name": "Onay Bekleyen", icon: RxHamburgerMenu},
    {"name": "Onaylanan", icon: RxHamburgerMenu},
    {"name": "Siteye Git", icon: RxHamburgerMenu},
    {"name": "Çıkış Yap", icon: RxHamburgerMenu}


  ]

  return (
    <div className='menuİtems'>

          {
            data.map((item, i)=>(
              <div key={i} className='menuİtems-item'>
                 
                {item.icon && <item.icon size={24}  style={{margin: "0 5px"}}/>}
 
                
                {
                  item.name
                }

              </div>
            ))
          }
        
     </div>
  )
}

export default MenuItem
