import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import KhachHangService from '../../services/KhachHangService'

export const fetchAllKhachHang = createAsyncThunk(
    'khachhang/fetchAllKhachHang',
    async () => {
        const response = await KhachHangService.getListKhachHang();
        return response.data;
    }
)
const initialState = {
    listKhachHang: [],
    isLoading: false,
    isError: false
}
export const khachhangSlice = createSlice({
    name: 'khachhang',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllKhachHang.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchAllKhachHang.fulfilled, (state, action) => {
                state.listKhachHang = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(fetchAllKhachHang.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
    }
})

export default khachhangSlice.reducer