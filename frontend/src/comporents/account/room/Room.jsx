import React, { useEffect } from 'react'
import Table from '../../general/Table'
import { useDispatch, useSelector } from 'react-redux'
import { getRoom } from '../../../redux/RoomSlice'
import Loading from '../../Loading';
import PageTitle from '../../general/PageTitle';
const Room = () => {

    const roomTitle = [

        { title: "gorsel" },
        { title: "kategori" },
        { title: "Fiyat" },
        { title: "acıklama" },
        { title: "kapasite" },
        { title: "Durumu" },

    ]

    const room = useSelector((state) => state.getRoom.rooms);
    const roomStatus = useSelector((state) => state.getRoom.roomStatus); // Slice adını doğru şekilde belirt

    const dispacth = useDispatch();

    useEffect(() => { dispacth(getRoom()) }, [dispacth])
    //tablo comps. title, degisken olarak gonderiyorum
    const titleElement = (
        <tr style={{ display: "flex" }}>
            {roomTitle.map((item, i) => (
                <th key={i} style={{ flex: 1 }}>{item.title}</th>
            ))}
        </tr>
    );

    //tablo comps. body, degisken olarak gonderiyorum
    const bodyElement = room.map((item, index) => (
        <tr key={index} style={{ display: "flex" }}>
            <td><img src={item.image} style={{ borderRadius: "10px", width: "75px", height: "60px", objectFit: "cover" }} alt="room image" /></td>
            <td>{item.category}</td>
            <td>{item.price}</td>
            <td>{item.description.length > 20 ? `${item.description.substring(0, 100)}...` : item.description} </td>
            <td>{item.capacity}</td>
            <td style={{ color: item.Availability === false ? "red" : item.Availability === true ? "green" : "" }} >
                {item.Availability === false ? "Boş" : item.Availability === true ? "Dolu" : ""}
            </td>
        </tr>
    ))



    return (
        <div>
            <PageTitle title="Odalar" />
            <div>
                {roomStatus === 'LOADING' ? <Loading /> :
                    <>
                        <Table titleElement={titleElement} bodyElement={bodyElement} />

                    </>

                }
            </div>
        </div>
    )
}

export default Room
