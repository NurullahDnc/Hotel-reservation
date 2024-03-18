import { configureStore } from '@reduxjs/toolkit'
import DarkModeSlice from './DarkModeSlice'
import ModalSlice from './ModalSlice'
 
export const store = configureStore({
  reducer: {
    
      darkMode: DarkModeSlice,
      modal: ModalSlice,
 
  },
})