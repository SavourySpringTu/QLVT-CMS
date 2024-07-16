import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CTPNService from "../../services/CTPNService"

export const fetchCTPNbyQuyenandChiNhanh = createAsyncThunk(
    'chitietphieunhap/fetchCTPNbyQuyenandChiNhanh',
    async (input) => {
        const response = await CTPNService.getListCTPN(input);
        return response.data;
    }
)
const initialState = {
    listCTPN: [],
    isLoading: false,
    isError: false
}
export const ctpnSlice = createSlice({
    name: 'chitietphieunhap',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCTPNbyQuyenandChiNhanh.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchCTPNbyQuyenandChiNhanh.fulfilled, (state, action) => {
                state.listCTPN = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(fetchCTPNbyQuyenandChiNhanh.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
    }
})

export default ctpnSlice.reducer