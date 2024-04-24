import { configureStore } from '@reduxjs/toolkit'
import nhanvienReducer from './slices/nhanvienSlice.js'


export const store = configureStore({
    reducer: {
        nhanvien: nhanvienReducer
    },
})