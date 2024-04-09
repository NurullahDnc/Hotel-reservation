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
        <PageTitleImage image={"https://img.freepik.com/free-photo/desert-sand-dunes-panoramic-view_587448-8157.jpg?t=st=1709244386~exp=1709247986~hmac=350994ef7dcf770cf9dd7968817081b721ac48da1d3dd974897dd8dfb0ed33d4&w=1380"} title={"Aktiviteler"} />

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
