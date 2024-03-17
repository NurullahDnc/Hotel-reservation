import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    logout: []
}

export const getLogout = createAsyncThunk("message", async() =>{
    const res = axios.get("http://localhost:3001/message");
    return res
} )

const MessageSlice = createSlice({
    name: "message",
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
        builder.addCase(getMessage.fulfilled, (state, action) => {
             state.message = action.payload.data;
        });

    }
})

export default getLogout.reducer;