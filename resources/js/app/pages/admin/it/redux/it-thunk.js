import { create_it_service, get_it_service, get_user_by_position_service } from "@/app/services/it-service";
import { itSlice } from "./it-slice";
import { get_ticket_by_user_id_service } from "@/app/services/ticket-service";

export function create_it_thunk(data) {
    return async function (dispatch, getState) {
        const result = await create_it_service(data);
        // dispatch(itSlice.actions.setUsers(result.data.result));
        return result;
    };
}

export function get_it_thunk(data) {
    return async function (dispatch, getState) {
        const result = await get_it_service()
        dispatch(itSlice.actions.setUsers(result.data.result));
    };
}
export function get_user_by_position_thunk(position) {
    return async function (dispatch, getState) {
        const result = await get_user_by_position_service(position)
        dispatch(itSlice.actions.setUsers(result.data.result));
    };
}

export function get_ticket_by_user_id_thunk(id) {
    return async function (dispatch, getState) {
        const result = await get_ticket_by_user_id_service(id)
        dispatch(itSlice.actions.setTickets(result.data.result));
    };
}

