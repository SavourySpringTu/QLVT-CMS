import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PhieuXuatService from "../../services/PhieuXuatService"

export const fetchPhieuXuatbyQuyenandChiNhanh = createAsyncThunk(
    'phieuxuat/fetchPhieuXuatbyQuyenandChiNhanh',
    async (input) => {
        const response = await PhieuXuatService.getListPhieuXuat(input);
        return response.data;
    }
)
const initialState = {
    listPhieuXuat: [],
    isLoading: false,
    isError: false
}
export const phieuxuatSlice = createSlice({
    name: 'phieuxuat',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPhieuXuatbyQuyenandChiNhanh.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchPhieuXuatbyQuyenandChiNhanh.fulfilled, (state, action) => {
                state.listPhieuXuat = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(fetchPhieuXuatbyQuyenandChiNhanh.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
    }
})

export default phieuxuatSlice.reducer