import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    user: [],
    sidebarOpen:false,
    refresh:[]
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    setSidebarOpen: (state, action) => {
      state.sidebarOpen = !state.sidebarOpen
    },
    setRefresh: (state, action) => {
      state.refresh = action.payload
    },
  },
})
export const { 
    setUser,
    setSidebarOpen,
    setRefresh
 } = appSlice.actions

export default appSlice.reducer
