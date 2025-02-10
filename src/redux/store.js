import { configureStore } from '@reduxjs/toolkit'
// import authReducer from "../redux/slice/auth/authSlice.js"
import profileReducer from "../redux/profileSlice.js"

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    profile: profileReducer
  }
})