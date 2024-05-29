import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUS } from "../utils/Status";

const initialState ={
    restaurant: [],
    restaurantStatus: STATUS.IDLE,
    status: "idle",
 
    
}

//tum geri bildirimleri getir
export const getRestaurant = createAsyncThunk("getRestaurant", async () => {

    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/restaurant`);
        return response.data.data;

    } catch (error) {
        throw Error("error");
    }
      
});



const RestaurantSlice = createSlice({
    name: "getRestaurant",
    initialState,
    reducers:{},

    extraReducers: (builder) => {
        builder
            .addCase(getRestaurant.pending, (state) => {
                state.restaurantStatus = STATUS.LOADING;
            })
            .addCase(getRestaurant.fulfilled, (state, action) => {
                state.restaurantStatus = STATUS.SUCCESS;
                state.restaurant = action.payload;
            })
            .addCase(getRestaurant.rejected, (state, action) => {
                state.restaurantStatus = STATUS.FAIL;
            })
                
    }
});


export default RestaurantSlice.reducer;


