
import { send_push_notification_service } from "../services/push-notification-service";
import {appSlice} from "./app-slice";

export function get_user_thunk(data) {
    return async function (dispatch, getState) {
        dispatch(appSlice.actions.setUser(data));
    };
}

export function send_push_notification(data) {
    return async function (dispatch, getState) {
        await send_push_notification_service(data)
    };
}
