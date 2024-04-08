import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUS } from "../utils/Status";

const initialState ={
    activity: [],
    activityStatus: STATUS.IDLE,
    status: "idle",
 
    
}

//tum geri bildirimleri getir
export const getActivity = createAsyncThunk("getactivity", async () => {

    try {
        const response = await axios.get('http://localhost:5000/activity');
        return response.data.data;

    } catch (error) {
        throw Error("error");
    }
      
});



const ActivitySlice = createSlice({
    name: "getActivity",
    initialState,
    reducers:{},

    extraReducers: (builder) => {
        builder
            .addCase(getActivity.pending, (state) => {
                state.activityStatus = STATUS.LOADING;
            })
            .addCase(getActivity.fulfilled, (state, action) => {
                state.activityStatus = STATUS.SUCCESS;
                state.activity = action.payload;
            })
            .addCase(getActivity.rejected, (state, action) => {
                state.activityStatus = STATUS.FAIL;
            })

         
    }
});


export default ActivitySlice.reducer;


