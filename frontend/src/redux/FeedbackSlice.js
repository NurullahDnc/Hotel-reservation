import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUS } from "../utils/Status";

const initialState ={
    feedback: [],
    feedbackStatus: STATUS.IDLE,
    status: "idle",
 
    
}

//tum geri bildirimleri getir
export const getFeedback = createAsyncThunk("getFeedback", async () => {

    try {
        const response = await axios.get('http://localhost:5000/feedback');
        return response.data.data;
    } catch (error) {
        throw Error("error");
    }
      
});



const FeedbackSlice = createSlice({
    name: "getFeedback",
    initialState,
    reducers:{},

    extraReducers: (builder) => {
        builder
            .addCase(getFeedback.pending, (state) => {
                state.feedbackStatus = STATUS.LOADING;
            })
            .addCase(getFeedback.fulfilled, (state, action) => {
                state.feedbackStatus = STATUS.SUCCESS;
                state.feedback = action.payload;
            })
            .addCase(getFeedback.rejected, (state, action) => {
                state.feedbackStatus = STATUS.FAIL;
            })

         
    }
});


export default FeedbackSlice.reducer;


