import { configureStore } from '@reduxjs/toolkit';
import { atuhSlice } from './auth';

export const store = configureStore({
    reducer: {
        auth: atuhSlice.reducer,
    },
});