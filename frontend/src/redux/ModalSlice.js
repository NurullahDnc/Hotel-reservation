import { createSlice } from '@reduxjs/toolkit'
  
 

const initialState ={
    registermodal: false,
    loginModal: false
}

export const modalSlice = createSlice({
  name: 'modal',

  initialState,
  reducers: {
    registerModalFun: (state) => {
        state.registermodal = !state.registermodal

    },
    loginModalFun: (state) => {
        state.loginModal = !state.loginModal
    },
   
  },
})

export const { registerModalFun, loginModalFun } = modalSlice.actions
export default modalSlice.reducer