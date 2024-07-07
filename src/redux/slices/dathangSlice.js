import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import DatHangService from "../../services/DatHangService"

export const fetchDatHangbyQuyenandChiNhanh = createAsyncThunk(
    'dathang/fetchDatHangbyQuyenandChiNhanh',
    async (input) => { 
        const response = await DatHangService.getListDatHang(input);
        return response.data;
    }
)
const initialState = {
    listDatHang: [],
    isLoading: false,
    isError: false
}
export const dathangSlice = createSlice({
    name: 'dathang',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDatHangbyQuyenandChiNhanh.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchDatHangbyQuyenandChiNhanh.fulfilled, (state, action) => {
                state.listDatHang = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(fetchDatHangbyQuyenandChiNhanh.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
    }
})

export default dathangSlice.reducer