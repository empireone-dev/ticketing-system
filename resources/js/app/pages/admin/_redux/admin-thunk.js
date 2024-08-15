import { get_admin_dashboard_service } from "@/app/services/dashboard";
import { adminSlice } from "./admin-slice";

export function get_dashboard_user_by_id_thunk(data) {
    return async function (dispatch, getState) {
        const result = await get_admin_dashboard_service(data);
        dispatch(adminSlice.actions.setDashboard(result.data));
        return result;
    };
}
