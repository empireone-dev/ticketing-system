import { create_it_service, get_it_service } from "@/app/services/it-service";
import { itSlice } from "./it-slice";

export function create_it_thunk(data) {
    return async function (dispatch, getState) {
        const result = await create_it_service(data);
        dispatch(itSlice.actions.setUsers(result.data.result));
        return result;
    };
}

export function get_it_thunk(data) {
    return async function (dispatch, getState) {
        const result = await get_it_service()
        dispatch(itSlice.actions.setUsers(result.data.result));
    };
}
