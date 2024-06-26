import { createSlice } from "@reduxjs/toolkit";

const DoctorSlice = createSlice({
    name: 'doctor',
    initialState: {
        loginStatus: false,
        loggedInDoctor: '',
        jwtToken: ''
    },
    reducers: {
        doctorRegister: (state, action) => {
            state.loggedInDoctor = '';
            state.loginStatus = false;
        },
        doctorLogin: (state, action) => {
            state.loggedInDoctor = action.payload.doctor;
            state.jwtToken = action.payload.token;
            state.loginStatus = true;
        },
        doctorUpdateProfile: (state, action) => {
            state.loggedInDoctor = action.payload;
            state.loginStatus = true;
        },
        doctorLogout: (state, action) => {
            state.loggedInDoctor = '';
            state.loginStatus = false;
        }
    }
});

export default DoctorSlice.reducer;

export const { doctorLogin, doctorLogout, doctorRegister, doctorUpdateProfile } = DoctorSlice.actions;
