import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDarkMode: JSON.parse(localStorage.getItem("darkMode")) ?? false
}

const DarkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state, action) => {

        //state icindeki isDarkMode guncelliyor / true, false
        state.isDarkMode = !state.isDarkMode;

        //state altındaki isdarkmode durumunu local storeye kayıt ediyor
        localStorage.setItem("darkMode", JSON.stringify(state.isDarkMode));
        
    }
    
  }
});

export const { toggleDarkMode } = DarkModeSlice.actions;
export default DarkModeSlice.reducer;


