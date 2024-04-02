 import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUS } from "../utils/Status";

const initialState ={
    user: null,
    //baslangic degeri
    userStatus: STATUS.IDLE,
    token: null,
    logout: false,
    users: null
}

export const getUserInfo = createAsyncThunk("getUserInfo", async () => {
    try {
        //cookiden token alınıyor
        const token = document.cookie.split('; ').find(row => row.startsWith('jwt='));
        //kullanıcının bilgisini almak için istek atılıyor ve token gönderiliyor
        const res = await axios.get('http://localhost:5000/user/profile', {
            headers: {
                Authorization: `jwt ${token.split('=')[1]}`
            }
        });
        return res.data;
    } catch (error) {
         throw error;  
    }
});



export const getUser = createAsyncThunk("getUser", async () => {

    try {
        const response = await axios.get('http://localhost:5000/user');
        return response.data;
    } catch (error) {
        throw Error("Failed to fetch rooms");
    }

});

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        
        // Kullanıcı oturumunu sonlandırır ve ilgili verileri null yapar.
        logout: (state, action) => {
            document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'; 
            state.logout = true; // Çıkış yapıldığında logout durumunu true yap
            state.token = null; // Token'i null yap
            state.userInfo = null; // Kullanıcı bilgisini null yap
        }
    },
    extraReducers: (builder) =>{

        builder.addCase(getUserInfo.pending, (state, action) => {
            state.userStatus = STATUS.LOADING
        });

        builder.addCase(getUserInfo.fulfilled, (state, action) => {
            state.userStatus = STATUS.SUCCESS
            state.user = action.payload;
        });

        //kulanıcı bilgiisni alırken hata olusa, user null yap
        builder.addCase(getUserInfo.rejected, (state) => {
            state.userStatus = STATUS.FAIL
        });

        builder.addCase(getUser.fulfilled, (state, action) => {
            state.users = action.payload;
        });
    }
});

export const { logout } = UserSlice.actions;

export default UserSlice.reducer;




/*
     setToken: (state, action) => {
            state.token = action.payload;
            state.logout = !action.payload; // token null ise logout true yap
        },
*/