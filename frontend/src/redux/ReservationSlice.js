import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    reservation: [],
    status: "idle",
    error: null
    
}

export const getReservation = createAsyncThunk("getReservation", async (userId) => {

    try {
        const response = await axios.get('http://localhost:5000/reservation/',{
            headers: {
                Authorization: userId
              }
        });
        return response.data.data;
    } catch (error) {
        throw Error("Failed to fetch rooms");
    }
      
});

//    router.route('/:id').get(PhotoController.getAPhoto);


const ReservationSlice = createSlice({
    name: "Reservation",
    initialState,
    reducers:{},

    extraReducers: (builder) => {
        builder
            .addCase(getReservation.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getReservation.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.reservation = action.payload;
            })
            .addCase(getReservation.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});


export default ReservationSlice.reducer;


