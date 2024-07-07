import { configureStore } from '@reduxjs/toolkit'
import nhanvienReducer from './slices/nhanvienSlice.js'
import vattuReducer from './slices/vattuSlice.js'
import phieunhapReducer from './slices/phieunhapSlice.js'
import chitietphieunhapReducer from './slices/ctpnSlice.js'
import dathangReducer from './slices/dathangSlice.js'
import khoReducer from './slices/khoSlice.js'
import chitietdathangReducer from './slices/ctdhSlice.js'
import khachhangReducer from './slices/khachhangSlice.js'

export const store = configureStore({
    reducer: {
        vattu: vattuReducer,
        nhanvien: nhanvienReducer,
        phieunhap: phieunhapReducer,
        chitietphieunhap: chitietphieunhapReducer,
        kho: khoReducer,
        chitietdathang: chitietdathangReducer,
        dathang: dathangReducer,
        khachhang: khachhangReducer
    },
})