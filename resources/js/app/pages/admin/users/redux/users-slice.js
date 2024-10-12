import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
  name: 'user',
  initialState: {
    users: {
      data:[]
    },
    tickets:{
      data:[]
    },
    allUsers:[],
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload
    },
    setTickets: (state, action) => {
      state.tickets = action.payload
    },
    setAllUsers: (state, action) => {
      state.allUsers = action.payload
    },
  },
})
export const { 
    setUsers,
    setAllUsers,
 } = usersSlice.actions

export default usersSlice.reducer
