import { configureStore } from '@reduxjs/toolkit'
import nhanvienReducer from './slices/nhanvienSlice.js'
import vattuReducer from './slices/vattuSlice.js'


export const store = configureStore({
    reducer: {
        vattu: vattuReducer,
        nhanvien: nhanvienReducer
    },
})