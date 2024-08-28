import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
  name: 'users',
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
 } = usersSlice.actions

export default usersSlice.reducer
