import React from 'react'
import Table from '../../general/Table'

const Room = () => {




    const roomData = [
        {
            id: "21234",
            img: '../image/ozel3.jpg',
            category: "suit oda",
            description: 'sunucu tarafından istenen kaynağa erişimin yasak olduğunu belirtmek için kullanılır. Bu durum kodu çeşitli nedenlerle tetiklenir ve sunucunun isteği anladığını ancak erişim izni vermeyi reddettiğini belirtir.',
            price: "1500",
            capacity: "2",
            Availability: "boş"
        }
    ]

    const roomTitle = [

        { title: "gorsel" },
        { title: "kategori" },
        { title: "Fiyat" },
        { title: "acıklama" },
        { title: "kapasite" },
        { title: "Durumu" },

    ]

    //tablo comps. title degisken olarak gonderiyorum
    const titleElement = (
        <tr style={{ display: "flex" }}>
            {roomTitle.map((item, i) => (
                <th key={i} style={{ flex: 1 }}>{item.title}</th>
            ))}
        </tr>
    );

    //tablo comps. body degisken olarak gonderiyorum
    const bodyElement = roomData.map((row, index) => (
        <tr key={index} style={{ display: "flex" }}>
            <td><img src={row.img} style={{ borderRadius: "10px", width: "75px", height: "60px", objectFit: "cover" }} alt="as" /></td>
            <td>{row.category}</td>
            <td>{row.price}</td>
            <td>{row.description.length > 20 ? `${row.description.substring(0, 100)}...` : row.description} </td>
            <td>{row.capacity}</td>
            <td>{row.Availability}</td>
        </tr>
    ))



    return (
        <div>

            <Table titleElement={titleElement} bodyElement={bodyElement}  />

        </div>
    )
}

export default Room
