import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import NhanVienService from '../../services/NhanVienService'

export const fetchNhanVienbyQuyenandChiNhanh = createAsyncThunk(
    'nhanvien/fetchNhanVienbyQuyenandChiNhanh',
    async (input) => {
        const response = await NhanVienService.getListNhanVien(input);
        return response.data;
    }
)
const initialState = {
    listNhanVien: [],
    isLoading: false,
    isError: false
}
export const nhanvienSlice = createSlice({
    name: 'nhanvien',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNhanVienbyQuyenandChiNhanh.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchNhanVienbyQuyenandChiNhanh.fulfilled, (state, action) => {
                state.listNhanVien = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(fetchNhanVienbyQuyenandChiNhanh.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
    }
})

export default nhanvienSlice.reducer