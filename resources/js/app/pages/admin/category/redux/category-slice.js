import { createSlice } from '@reduxjs/toolkit'

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: {
      data:[]
    },
    allCategories:[],
    tickets:{
      data:[]
    }
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload
    },
    setTickets: (state, action) => {
      state.tickets = action.payload
    },
    setAllCategories: (state, action) => {
      state.allCategories = action.payload
    },
  },
})
export const { 
    setCategories,
    setTickets,
    setAllCategories
 } = categorySlice.actions

export default categorySlice.reducer
