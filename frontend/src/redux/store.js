import { configureStore } from '@reduxjs/toolkit'
import DarkModeSlice from './DarkModeSlice'
import ModalSlice from './ModalSlice'
import UserSlice from "./UserSlice";
import RoomSlice from './RoomSlice';
import ReservationSlice from './ReservationSlice'
 
export const store = configureStore({
  reducer: {
    
      darkMode: DarkModeSlice,
      modal: ModalSlice,
      getUser: UserSlice,
      getRoom: RoomSlice,
      getReservation: ReservationSlice,
      
  },
})