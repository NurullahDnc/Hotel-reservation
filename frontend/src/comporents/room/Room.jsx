import React from 'react'
import RoomCart from '../general/RoomCart';
import { useTranslation } from 'react-i18next';
import PageTitleImage from '../general/PageTitleImage';

function Room() {
    const { t } = useTranslation();
    const roomData = [
        {
            id: "1",
            title: "Standart Oda",
            img: "./image/rooms/standart.jpg",
            price: 20,
        },

        {
            id: "2",
            title: "Çift Kişilik Yataklı Oda",
            img: "..//image/rooms/ciftkisilik.jpg",
            price: 40,
        }
    ]
    return (
        <div>
            <PageTitleImage
                image="https://img.freepik.com/free-photo/desert-sand-dunes-panoramic-view_587448-8157.jpg?t=st=1709244386~exp=1709247986~hmac=350994ef7dcf770cf9dd7968817081b721ac48da1d3dd974897dd8dfb0ed33d4&w=1380"
                title={t('rooms')}
            />
            <div className='rooms'>
                {
                    roomData.map(item => (
                        <RoomCart
                            key={item.id}
                            id={item.id} 
                            title={item.title}
                            img={item.img}
                            price={item.price}
                        />
                    ))
                }
            </div>

        </div>
    )
}

export default Room