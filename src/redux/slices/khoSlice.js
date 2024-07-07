import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import KhoService from "../../services/KhoService"

export const fetchKhobyQuyenandChiNhanh = createAsyncThunk(
    'kho/fetchKhobyQuyenandChiNhanh',
    async (input) => {
        const response = await KhoService.getListKho(input);
        return response.data;
    }
)
const initialState = {
    listKho: [],
    isLoading: false,
    isError: false
}
export const khoSlice = createSlice({
    name: 'kho',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchKhobyQuyenandChiNhanh.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchKhobyQuyenandChiNhanh.fulfilled, (state, action) => {
                state.listKho = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(fetchKhobyQuyenandChiNhanh.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
    }
})

export default khoSlice.reducer