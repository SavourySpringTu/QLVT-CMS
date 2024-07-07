import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CTDHService from "../../services/CTDHService"

export const fetchCTDHbyQuyenandChiNhanh = createAsyncThunk(
    'chitietdathang/fetchCTDHbyQuyenandChiNhanh',
    async (input) => {
        const response = await CTDHService.getListCTDH(input);
        return response.data;
    }
)
const initialState = {
    listCTDH: [],
    isLoading: false,
    isError: false
}
export const ctdhSlice = createSlice({
    name: 'chitietdathang',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCTDHbyQuyenandChiNhanh.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchCTDHbyQuyenandChiNhanh.fulfilled, (state, action) => {
                state.listCTDH = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(fetchCTDHbyQuyenandChiNhanh.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
    }
})

export default ctdhSlice.reducer