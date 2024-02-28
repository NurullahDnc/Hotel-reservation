import React, { useEffect } from 'react'
import Heading from '../general/Heading';
import ScrollReveal from 'scrollreveal'
import { useNavigate } from 'react-router-dom';

const Category = () => {

    const navigate = useNavigate();

    const categories = [
        { id: 1, name: 'Kategori 1', imageUrl: './image/ozel2.jpg', },
        { id: 2, name: 'Kategori 2', imageUrl: './image/ozel3.jpg', },
        { id: 3, name: 'Kategori 3', imageUrl: './image/ozel2.jpg', },
        { id: 4, name: 'Kategori 3', imageUrl: './image/ozel.jpg', },
        { id: 5, name: 'Kategori 1', imageUrl: './image/ozel3.jpg', },


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
