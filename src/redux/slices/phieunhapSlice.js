import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PhieuNhapService from "../../services/PhieuNhapService.js"

export const fetchPhieuNhapbyQuyenandChiNhanh = createAsyncThunk(
    'phieunhap/fetchPhieuNhapbyQuyenandChiNhanh',
    async (data) => {
        const response = await PhieuNhapService.getListPhieuNhap(data);
        return response.data;
    }
)
const initialState = {
    listPhieuNhap: [],
    isLoading: false,
    isError: false
}
export const phieunhapSlice = createSlice({
    name: 'phieunhap',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPhieuNhapbyQuyenandChiNhanh.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchPhieuNhapbyQuyenandChiNhanh.fulfilled, (state, action) => {
                state.listPhieuNhap = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(fetchPhieuNhapbyQuyenandChiNhanh.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
    }
})

export default phieunhapSlice.reducer