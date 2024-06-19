
import { configureStore } from '@reduxjs/toolkit';
import itSlice from '../pages/admin/it/redux/it-slice';
import ticketSlice  from '../pages/admin/tickets/redux/tickets-slice';
import categorySlice from '../pages/admin/category/redux/category-slice';
const store = configureStore({
    reducer: {
        it: itSlice,
        tickets:ticketSlice,
        category:categorySlice
    },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;
