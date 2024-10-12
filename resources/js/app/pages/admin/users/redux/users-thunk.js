import { create_user_service, get_user_service, get_user_by_position_service } from "@/app/services/users-service";
import { usersSlice } from "./users-slice";
import { get_ticket_by_user_id_service } from "@/app/services/ticket-service";

export function create_it_thunk(data) {
    return async function (dispatch, getState) {
        const result = await create_user_service(data);
        // dispatch(usersSlice.actions.setUsers(result.data.result));
        return result;
    };
}

export function get_it_thunk(data) {
    return async function (dispatch, getState) {
        const result = await get_user_service()
        dispatch(usersSlice.actions.setUsers(result.data.result));
    };
}

// export function get_user_thunk(data) {
//     return async function (dispatch, getState) {
//         const result = (await get_user_service())
//         dispatch(usersSlice.actions.setUsers(result.data.result));
//     };
// }

export function get_user_thunk(data) {
    return async function (dispatch, getState) {
        const result = await get_user_service();
        dispatch(usersSlice.actions.setUsers(result.data.result));
        dispatch(usersSlice.actions.setAllUsers(result.data.users));
    };
}



export function get_user_by_position_thunk(position) {
    return async function (dispatch, getState) {
        const result = await get_user_by_position_service(position)
        dispatch(usersSlice.actions.setUsers(result.data.result));
    };
}

export function get_ticket_by_user_id_thunk(id) {
    return async function (dispatch, getState) {
        const result = await get_ticket_by_user_id_service(id)
        dispatch(usersSlice.actions.setTickets(result.data.result));
    };
}

