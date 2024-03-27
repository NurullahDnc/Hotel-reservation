import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    rooms: [],
    status: "idle",
    error: null,
    categories: []

}

export const getRoom = createAsyncThunk("getRoom", async () => {

    try {
        const response = await axios.post('http://localhost:5000/room');
        return response.data.room;
    } catch (error) {
        throw Error("Failed to fetch rooms");
    }

});

export const getCategories = createAsyncThunk("getCategories", async () => {

    try {
        const response = await axios.get('http://localhost:5000/categories');
        return response.data.categories;
    } catch (error) {
        throw Error("Failed to fetch rooms");
    }

});

const RoomSlice = createSlice({
    name: "rooms",
    initialState,
    reducers: {},

    extraReducers: (builder) => {

        builder
            .addCase(getRoom.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getRoom.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.rooms = action.payload;
            })
            .addCase(getRoom.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })

            .addCase(getCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
            })
    }
});


export default RoomSlice.reducer;