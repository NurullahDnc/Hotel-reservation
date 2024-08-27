import React, { useEffect } from 'react'
import ActivityCart from './ActivityCart';
import PageTitleImage from '../general/PageTitleImage';
import { useDispatch, useSelector } from 'react-redux';
import { getActivity } from '../../redux/ActivitySlice';

const Activities = () => {


  const activity = useSelector((state) => state.getActivity.activity);
  const dispatch = useDispatch();
  
 useEffect(() => {
     dispatch(getActivity());
 }, [dispatch]);

  return (
    <div>
        <PageTitleImage image={"https://images.pexels.com/photos/17154931/pexels-photo-17154931/free-photo-of-deniz-doga-tatil-mavi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}  title={"Aktiviteler"} />

    {
        activity?.map(item =>(
            <ActivityCart 
                key={item.id} 
                title={item.title} 
                text={item.description} 
                imgOne={item.imageOne} 
                imgTwo={item.imageTwo} 
            
            />
        ))
    }

</div>
  )
}

export default Activities
