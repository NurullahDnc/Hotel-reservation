import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUS } from "../utils/Status";

const initialState ={
    comment: [],
    commentStatus: STATUS.IDLE,
    status: "idle",
    error: null,
    commentAccepted: [],
    comments: []
    
}

//tum yorumlar getir
export const getComment = createAsyncThunk("getComment", async () => {

    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/comment/`);
        return response.data.data;
    } catch (error) {
        throw Error("error");
    }
      
});

//kulanıcı yorumlarını getir
export const getUserComment = createAsyncThunk(`getUserComment`, async (userId) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/comment/${userId}`);
        return response.data.data;
    } catch (error) {
        throw Error("error");
    }
});

//onaylanan yorumlar
export const getAcceptedComments = createAsyncThunk("getAcceptedComments", async () => {

    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/comment/accepted`);
        return response.data.data;
    } catch (error) {
         throw Error("error");
    }
      
});


const CommentSlice = createSlice({
    name: "comment",
    initialState,
    reducers:{},

    extraReducers: (builder) => {
        builder
            .addCase(getUserComment.pending, (state) => {
                state.commentStatus = STATUS.LOADING;
            })
            .addCase(getUserComment.fulfilled, (state, action) => {
                state.commentStatus = STATUS.SUCCESS;
                state.comment = action.payload;
            })
            .addCase(getUserComment.rejected, (state, action) => {
                state.commentStatus = STATUS.FAIL;
            })

            .addCase(getComment.fulfilled, (state, action) => {
                 state.comments = action.payload;
            })

            .addCase(getAcceptedComments.fulfilled, (state, action) => {
                state.commentAccepted = action.payload;
           })
    }
});


export default CommentSlice.reducer;


