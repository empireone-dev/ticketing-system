import { createSlice } from '@reduxjs/toolkit'

export const ticketSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
    ticket:{}
  },
  reducers: {
    setTickets: (state, action) => {
      state.tickets = action.payload
    },
    setTicket: (state, action) => {
      state.ticket = action.payload
    },
  },
})
export const { 
    setTickets,
    setTicket
 } = ticketSlice.actions

export default ticketSlice.reducer
