import { createSlice } from '@reduxjs/toolkit'

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
    tickets:[]
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload
    },
    setTickets: (state, action) => {
      state.tickets = action.payload
    },
  },
})
export const { 
    setCategories,
    setTickets
 } = categorySlice.actions

export default categorySlice.reducer
