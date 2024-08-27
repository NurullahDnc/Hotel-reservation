import React, { useEffect } from 'react'
import ActivityCart from '../activities/ActivityCart';
import PageTitleImage from '../general/PageTitleImage';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurant } from '../../redux/RestaurantSlice';


const Restaurant = () => {

  
  const restaurant = useSelector((state) => state.getRestaurant.restaurant);
   const dispatch = useDispatch();
   
  useEffect(() => {
      dispatch(getRestaurant());
  }, [dispatch]);

  return (
    <div>
        <PageTitleImage image={"https://images.pexels.com/photos/17154931/pexels-photo-17154931/free-photo-of-deniz-doga-tatil-mavi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}  title={"Restaurant"} />

   {
        restaurant?.map(item =>(
            <ActivityCart 
                key={item.id} 
                title={item.title} 
                text={item.description} 
                imgOne={item.imageOne} 
                imgTwo={item.imageTwo} 
            
            />
        ))
    }    </div>
  )
}

export default Restaurant
