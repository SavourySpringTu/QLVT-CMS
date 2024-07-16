import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CTPXService from "../../services/CTPXService"

export const fetchCTPXbyQuyenandChiNhanh = createAsyncThunk(
    'chitietphieuxuat/fetchCTPXbyQuyenandChiNhanh',
    async (input) => {
        const response = await CTPXService.getListCTPX(input);
        return response.data;
    }
)
const initialState = {
    listCTPX: [],
    isLoading: false,
    isError: false
}
export const ctpxSlice = createSlice({
    name: 'chitietphieuxuat',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCTPXbyQuyenandChiNhanh.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchCTPXbyQuyenandChiNhanh.fulfilled, (state, action) => {
                state.listCTPX = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(fetchCTPXbyQuyenandChiNhanh.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
    }
})

export default ctpxSlice.reducer