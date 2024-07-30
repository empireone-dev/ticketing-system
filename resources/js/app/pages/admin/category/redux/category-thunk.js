import {
    create_category_service,
    get_categories_by_category_service,
    get_category_service,
} from "@/app/services/category-service";
import { categorySlice } from "./category-slice";

export function create_category_thunk(data) {
    return async function (dispatch, getState) {
        const result = await create_category_service(data);
        dispatch(categorySlice.actions.setCategories(result.data.result));
        return result;
    };
}

export function get_category_thunk(data) {
    return async function (dispatch, getState) {
        const result = await get_category_service();
        dispatch(categorySlice.actions.setCategories(result.data.result));
    };
}

export function get_categories_by_category_thunk(data) {
    return async function (dispatch, getState) {
        const result = await get_categories_by_category_service();
        dispatch(categorySlice.actions.setTickets(result.data.result));
    };
}
