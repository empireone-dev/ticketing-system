import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
    name: "employee",
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
    employeeSlice.actions;

export default employeeSlice.reducer;
