
import { configureStore } from '@reduxjs/toolkit';
import itSlice from '../pages/admin/it/redux/it-slice';
import ticketSlice  from '../pages/admin/tickets/redux/tickets-slice';
import categorySlice from '../pages/admin/category/redux/category-slice';
import appSlice from '../redux/app-slice';
import employeeSlice from '../pages/employee/_redux/employee-slice';
import adminSlice from '../pages/admin/_redux/admin-slice';
const store = configureStore({
    reducer: {
        app:appSlice,
        it: itSlice,
        tickets:ticketSlice,
        category:categorySlice,
        employee:employeeSlice,
        admin:adminSlice
    },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;
