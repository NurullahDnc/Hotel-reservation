import { configureStore } from '@reduxjs/toolkit'
import DarkModeSlice from './DarkModeSlice'
import ModalSlice from './ModalSlice'
import UserSlice from "./User";
 
export const store = configureStore({
  reducer: {
    
      darkMode: DarkModeSlice,
      modal: ModalSlice,
      getUser: UserSlice
  },
})