import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const profileDataApi = createAsyncThunk(
    "admin/profileData",
    async (formData) => {
        const token = localStorage.getItem("token")
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/user/getMyProfile`,
                {
                    headers:
                    {
                        "Content-Type": "application/json",
                        "x-auth-token-user": token
                    }
                })
            const data = response.data
            // console.log(data);
            
            return data
        } catch (error) {
            return error.response?.data?.message;
        }
    })

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        profileData: null,
        loading: false,
        error: null,
        messsage:""

    },
    extraReducers: (builder) => {
        builder
            .addCase(profileDataApi.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(profileDataApi.fulfilled, (state, action) => {
                state.loading = false;
                state.profileData = action.payload.results.user;
                state.messsage = action.payload.message;
            })
            .addCase(profileDataApi.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
})

export default profileSlice.reducer;