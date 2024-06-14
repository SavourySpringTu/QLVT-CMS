import { configureStore } from '@reduxjs/toolkit'
import nhanvienReducer from './slices/nhanvienSlice.js'
import vattuReducer from './slices/vattuSlice.js'
import phieunhapReducer from './slices/phieunhapSlice.js'


export const store = configureStore({
    reducer: {
        vattu: vattuReducer,
        nhanvien: nhanvienReducer,
        phieunhap: phieunhapReducer
    },
})