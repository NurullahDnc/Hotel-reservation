import React, { useEffect } from 'react'
import ActivityCart from '../activities/ActivityCart'
import { useDispatch, useSelector } from 'react-redux';
import { getActivity } from '../../redux/ActivitySlice';
import { getRestaurant } from '../../redux/RestaurantSlice';


const Activity = () => {

    const activity = useSelector((state) => state.getActivity.activity);
    const restaurant = useSelector((state) => state.getRestaurant.restaurant);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getActivity());
        dispatch(getRestaurant());
    }, [dispatch]);
 



    return (
        <div>
            {
                activity?.slice(0, 1).map(item => (
                    <ActivityCart
                        key={item._id}
                        title={item.title}
                        text={item.description}
                        btnText="Daha Fazla"
                        imgOne={item.imageOne}
                        imgTwo={item.imageTwo}
                        btnUrl="/restaurant"

                    />
                ))
            }

            {
                restaurant?.slice(0, 1).map(item => (
                    <ActivityCart
                        key={item._id}
                        title={item.title}
                        text={item.description}
                        btnText="Daha Fazla"
                        imgOne={item.imageOne}
                        imgTwo={item.imageTwo}
                        btnUrl="/restaurant"

                    />
                ))
            }

        </div>
    )
}

export default Activity
