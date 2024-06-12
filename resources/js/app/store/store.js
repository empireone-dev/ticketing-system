
import { configureStore } from '@reduxjs/toolkit';
import itSlice from '../pages/admin/it/redux/it-slice';
const store = configureStore({
    reducer: {
        id: itSlice,
    },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;
