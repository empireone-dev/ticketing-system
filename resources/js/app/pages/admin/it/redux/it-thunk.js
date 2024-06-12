import { create_it_service } from "@/app/services/it-service";
import { itSlice } from "./it-slice";

export function create_it_thunk(data) {
    return async function (dispatch, getState) {
        const result = create_it_service(data);
        return result;
    };
}

export function get_it_thunk(data) {
    return async function (dispatch, getState) {
        // dispatch(itSlice.actions.setUsers(data));
    };
}
