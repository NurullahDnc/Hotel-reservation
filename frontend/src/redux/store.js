import { configureStore } from '@reduxjs/toolkit'
import DarkModeSlice from './DarkModeSlice'
import ModalSlice from './ModalSlice'
import UserSlice from "./UserSlice";
import RoomSlice from './RoomSlice';
import ReservationSlice from './ReservationSlice'
import CommentSlice from './CommentSlice';
import FeedbackSlice from './FeedbackSlice';
import ActivitySlice from './ActivitySlice';
import RestaurantSlice from './RestaurantSlice';

 
export const store = configureStore({
  reducer: {
    
      darkMode: DarkModeSlice,
      modal: ModalSlice,
      getUser: UserSlice,
      getRoom: RoomSlice,
      getReservation: ReservationSlice,
      getComment: CommentSlice,
      getFeedback: FeedbackSlice,
      getActivity: ActivitySlice,
      getRestaurant: RestaurantSlice,


      
  },
})