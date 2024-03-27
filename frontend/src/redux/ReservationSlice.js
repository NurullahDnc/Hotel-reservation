import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUS } from "../utils/Status";

const initialState ={
    reservation: [],
    reservationStatus: STATUS.IDLE,
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
                state.reservationStatus = STATUS.LOADING;
            })
            .addCase(getReservation.fulfilled, (state, action) => {
                state.reservationStatus = STATUS.SUCCESS;
                state.reservation = action.payload;
            })
            .addCase(getReservation.rejected, (state, action) => {
                state.reservationStatus = STATUS.FAIL;
            });
    }
});


export default ReservationSlice.reducer;


