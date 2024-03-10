import React, { useEffect } from 'react'
import Heading from '../general/Heading';
import ScrollReveal from 'scrollreveal'
import { useNavigate } from 'react-router-dom';

const Category = () => {

    const navigate = useNavigate();

    const categories = [
        { id: 2, name: 'Suit oda', imageUrl: 'https://www.luxury.com.tr/lune-otel-odasi-otel-odasi-mobilyalari-121384-16-B.jpg', },
        { id: 1, name: 'Tek kişilik oda', imageUrl: 'https://www.fcmobilya.com/upload/slider/2000x2000/otel-odasi-fc-mobilya-2-20200603143740.jpeg', },
        { id: 5, name: 'Çift kişilik oda', imageUrl: 'https://image-tc.galaxy.tf/wijpeg-206jgoaz9hvbgmz9wb5v745li/exe-frc_standard.jpg?crop=57%2C0%2C911%2C683', },
        { id: 3, name: 'Junior suite', imageUrl: 'https://www.acapulco.com.tr/images/details/b/konaklama-otel-odasi-931.jpg', },
        { id: 4, name: 'Aile odası', imageUrl: 'https://www.castivalotel.com/Uploads/haber_resim/tmp/20210428_6QFF48VVN6.jpg', },


    ];

    useEffect(()=>{

        ScrollReveal().reveal('.Category-Categorys-container', {
            duration: 1500,
            scale: 0.5, // İlk durumda %50 küçük
            easing: 'ease-in-out',
            interval: 500
        })

    },[])

    return (

        <div className='Category'>
        
            <Heading title={"Konfor ve Huzurun Buluştuğu Adres"} />
            <div className='Category-Categorys'>
                {
                    categories.map(item => (
                        <div onClick={()=> navigate(`odalar/${item.id}`)} key={item.id} className='Category-Categorys-container'>

                            {/*kategorinin gorseli */}
                            <div className='Category-Categorys-container-image'>
                                <img src={item.imageUrl} alt="" />
                            </div>

                            {/*kategorinin adı */}
                            <div className='Category-Categorys-container-text'>
                                {item.name}
                            </div>

                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Category
