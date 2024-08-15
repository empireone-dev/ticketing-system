import { createSlice } from "@reduxjs/toolkit";

export const ticketSlice = createSlice({
    name: "tickets",
    initialState: {
        tickets: {
            data:[]
        },
        ticket: {},
        activity: [],
        path: "details",
        notes: [],
    },
    reducers: {
        setTickets: (state, action) => {
            state.tickets = action.payload;
        },
        setTicket: (state, action) => {
            state.ticket = action.payload;
        },
        setActivity: (state, action) => {
            state.activity = action.payload;
        },
        setPath: (state, action) => {
            state.path = action.payload;
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
    },
});
export const { setTickets, setTicket, setActivity, setPath,setNotes } =
    ticketSlice.actions;

export default ticketSlice.reducer;
