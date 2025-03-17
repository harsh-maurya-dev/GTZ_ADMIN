import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCall } from "../../api/ApiCall";

export const profileDataApi = createAsyncThunk(
    "admin/profileData",
    async (formData) => {
        try {
            const response = await apiCall('get', '/user/getMyProfile');
            // const data = response.data
            // console.log(data);
            // console.log(response);
            
            return response
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
        messsage: ""
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