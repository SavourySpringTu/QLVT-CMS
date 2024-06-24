import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import KhoService from "../../services/KhoService"

export const fetchAllKho = createAsyncThunk(
    'vattu/fetchAllKho',
    async () => {
        const response = await KhoService.getListKho();
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
            .addCase(fetchAllKho.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchAllKho.fulfilled, (state, action) => {
                state.listKho = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(fetchAllKho.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
    }
})

export default khoSlice.reducer