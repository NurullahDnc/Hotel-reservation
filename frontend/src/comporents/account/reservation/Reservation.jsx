import React from 'react'
import Table from '../../general/Table'

const Reservation = () => {

    const sampleData = [
        {
          img: '../image/ozel3.jpg',
          categoryName: '2 Kisilik',
          gun: '7',
          fiyat: "2.800",
          acıklama: 'Lorem test test test test test',
          KisiSayısı: '2',
         
        } , {
            img: '../image/ozel2.jpg',
            categoryName: '2 Kisilik',
            gun: '7',
            fiyat: "2.800",
            acıklama: 'Lorem test test test test test',
            KisiSayısı: '2',
           
          } , {
            img: '../image/ozel2.jpg',
            categoryName: '2 Kisilik',
            gun: '7',
            fiyat: "2.800",
            acıklama: 'Lorem test test test test test',
            KisiSayısı: '2',
           
          } , {
            img: '../image/ozel3.jpg',
            categoryName: '2 Kisilik',
            gun: '7',
            fiyat: "2.800",
            acıklama: 'Lorem test test test test test',
            KisiSayısı: '2',
           
          } , {
            img: '../image/ozel.jpg',
            categoryName: '2 Kisilik',
            gun: '7',
            fiyat: "2.800",
            acıklama: 'Lorem test test test test test',
            KisiSayısı: '2',
           
          } 
    ]
        
  return (
    <div>

<Table data={sampleData} />
      
    </div>
  )
}

export default Reservation
