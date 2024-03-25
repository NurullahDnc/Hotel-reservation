import React from 'react'
import Table from '../../general/Table'

const Reservation = () => {

  const reservationData = [
    {
      img: '../image/ozel3.jpg',
      category: '2 Kisilik',
      gun: '7',
      fiyat: "2.800",
      acıklama: 'sunucu tarafından istenen kaynağa erişimin yasak olduğunu belirtmek için kullanılır. Bu durum kodu çeşitli nedenlerle tetiklenir ve sunucunun isteği anladığını ancak erişim izni vermeyi reddettiğini belirtir.',
      KisiSayısı: '2',

    }, {
      img: '../image/ozel2.jpg',
      category: '2 Kisilik',
      gun: '7',
      fiyat: "2.800",
      acıklama: 'sınırlandırmalıyız dedik. En güzel çözüm CSS ile webkit-line-clamp yardımı ile bunu yapmaktı. Acaba bu özelliğin desteği ne kadar diye biraz bakınca %92’ye(şu an %98 Temmuz 2019) yakın destek bizi bu kodu kullanmaya itti',
      KisiSayısı: '2',

    }, {
      img: '../image/ozel2.jpg',
      category: '2 Kisilik',
      gun: '7',
      fiyat: "2.800",
      acıklama: 'Lorem test test test test test',
      KisiSayısı: '2',

    }, {
      img: '../image/ozel3.jpg',
      category: '2 Kisilik',
      gun: '7',
      fiyat: "2.800",
      acıklama: 'Lorem test test test test test',
      KisiSayısı: '2',

    }, {
      img: '../image/ozel.jpg',
      category: '2 Kisilik',
      gun: '7',
      fiyat: "2.800",
      acıklama: 'Lorem test test test test test',
      KisiSayısı: '2',

    }
  ]

  const reservationTitle = [
    { title: "oda" },
    { title: "kategori" },
    { title: "Fiyat" },
    { title: "Acıklama" },
    { title: "Kisi Sayısı" },
    { title: "Gün" },


  ]

  //tablo comps. title degisken olarak gonderiyorum
  const titleElement = (
    <tr style={{ display: "flex" }}>
      {reservationTitle.map((item, i) => (
        <th key={i} style={{ flex: 1 }}>{item.title}</th>
      ))}
    </tr>
  );

  //tablo comps. body degisken olarak gonderiyorum
  const bodyElement = reservationData.map((row, index) => (
    <tr key={index} style={{ display: "flex" }}>
      <td><img src={row.img} style={{ borderRadius: "10px", width: "75px", height: "60px", objectFit: "cover" }} alt="as" /></td>
      <td>{row.category}</td>
      <td>{row.fiyat}</td>
      <td>{row.acıklama.length > 20 ? `${row.acıklama.substring(0, 100)}...` : row.acıklama} </td>
      <td>{row.KisiSayısı}</td>
      <td>{row.gun}</td>
    </tr>
  ))

  return (
    <div>
      <Table bodyElement={bodyElement} titleElement={titleElement} />
    </div>
  )

}

export default Reservation
