import { createSlice } from '@reduxjs/toolkit'

export const itSlice = createSlice({
  name: 'it',
  initialState: {
    users: false,
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload
    },
  },
})
export const { 
    setUsers,
 } = itSlice.actions

export default itSlice.reducer
