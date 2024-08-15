import { createSlice } from '@reduxjs/toolkit'

export const itSlice = createSlice({
  name: 'it',
  initialState: {
    users: {
      data:[]
    },
    tickets:{
      data:[]
    }
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload
    },
    setTickets: (state, action) => {
      state.tickets = action.payload
    },
  },
})
export const { 
    setUsers,
 } = itSlice.actions

export default itSlice.reducer
