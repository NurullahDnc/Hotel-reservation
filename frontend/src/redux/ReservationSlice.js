import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUS } from "../utils/Status";

const initialState ={
    userReservation: [],
    reservationStatus: STATUS.IDLE,
    status: "idle",
    error: null,

    reservation: []
    
}

export const getUserReservation = createAsyncThunk("getUserReservation", async (userId) => {

    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/reservation/reservations`,{
            headers: {
                Authorization: userId
              }
        });
        return response.data.data;
    } catch (error) {
        throw Error("error");
    }
      
});

export const getReservation = createAsyncThunk("getReservation", async () => {

    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/reservation`);
        return response.data.data;
    } catch (error) {
        throw Error("error");
    }

});

//    router.route('/:id').get(PhotoController.getAPhoto);


const ReservationSlice = createSlice({
    name: "Reservation",
    initialState,
    reducers:{},

    extraReducers: (builder) => {
        builder
            .addCase(getUserReservation.pending, (state) => {
                state.reservationStatus = STATUS.LOADING;
            })
            .addCase(getUserReservation.fulfilled, (state, action) => {
                state.reservationStatus = STATUS.SUCCESS;
                state.userReservation = action.payload;
            })
            .addCase(getUserReservation.rejected, (state, action) => {
                state.reservationStatus = STATUS.FAIL;
            })

            .addCase(getReservation.fulfilled, (state, action) => {
                 state.reservation = action.payload;
            })
    }
});


export default ReservationSlice.reducer;


