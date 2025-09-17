import { createSlice } from '@reduxjs/toolkit';
export const atuhSlice = createSlice({
    name: 'atuh',
    initialState: {
        status: 'checking', //'not-authenticated', ''authenticated
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        login: (state, action) => {
            
        },
        logout: (state, payload) => {

        },
        checkingCredentials: (state) => {

        }
    }
});
export const { login, logout, checkingCredentials } = atuhSlice.actions;