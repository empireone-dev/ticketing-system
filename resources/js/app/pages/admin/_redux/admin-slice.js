import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
    name: "admin",
    initialState: {
        dashboard: {},
    },
    reducers: {
        setDashboard: (state, action) => {
            state.dashboard = action.payload;
        },
    },
});
export const { setDashboard } =
    adminSlice.actions;

export default adminSlice.reducer;
