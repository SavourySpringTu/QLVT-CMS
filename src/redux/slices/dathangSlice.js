import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import DatHangService from "../../services/DatHangService"

export const fetchAllDatHang = createAsyncThunk(
    'dathang/fetchAllDatHang',
    async () => {
        const response = await DatHangService.getListDatHang();
        console.log(response.data)
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
            .addCase(fetchAllDatHang.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchAllDatHang.fulfilled, (state, action) => {
                state.listDatHang = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(fetchAllDatHang.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
    }
})

export default dathangSlice.reducer