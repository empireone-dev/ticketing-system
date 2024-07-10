// import { create_it_service, get_it_service } from "@/app/services/it-service";
import {appSlice} from "./app-slice";

// export function create_it_thunk(data) {
//     return async function (dispatch, getState) {
//         const result = await create_it_service(data);
//         dispatch(itSlice.actions.setUsers(result.data.result));
//         return result;
//     };
// }

export function get_user_thunk(data) {
    return async function (dispatch, getState) {
        dispatch(appSlice.actions.setUser(data));
    };
}
