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
        <PageTitleImage image={"https://img.freepik.com/free-photo/desert-sand-dunes-panoramic-view_587448-8157.jpg?t=st=1709244386~exp=1709247986~hmac=350994ef7dcf770cf9dd7968817081b721ac48da1d3dd974897dd8dfb0ed33d4&w=1380"} title={"Restaurant"} />

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
