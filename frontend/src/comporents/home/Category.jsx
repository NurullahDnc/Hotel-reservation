import React, { useEffect } from 'react'
import Heading from '../general/Heading';
import ScrollReveal from 'scrollreveal'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getRoom } from '../../redux/RoomSlice'

const Category = () => {

    const navigate = useNavigate();

    useEffect(()=>{

        ScrollReveal().reveal('.Category-Categorys-container', {
            duration: 1500,
            scale: 0.5, // İlk durumda %50 küçük
            easing: 'ease-in-out',
            interval: 500
        })

    },[])

    const rooms = useSelector((state) => state.getRoom.rooms);
    const dispatch = useDispatch();
    
   useEffect(() => {
       dispatch(getRoom());
   }, [dispatch]);

    return (

        <div className='Category'>
        
            <Heading title={"Konfor ve Huzurun Buluştuğu Adres"} />
            <div className='Category-Categorys'>
                {
                    rooms?.slice(0, 5).map(item => (
                        <div onClick={()=> navigate(`odalar`)} key={item.id} className='Category-Categorys-container'>

                            {/*kategorinin gorseli */}
                            <div className='Category-Categorys-container-image'>
                                <img src={item.image} alt="" />
                            </div>

                            {/*kategorinin adı */}
                            <div className='Category-Categorys-container-text'>
                                {item.category}
                            </div>

                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Category
