import { configureStore } from '@reduxjs/toolkit'
import DarkModeSlice from './DarkModeSlice'

export const store = configureStore({
  reducer: {
    
      darkMode: DarkModeSlice

  },
})