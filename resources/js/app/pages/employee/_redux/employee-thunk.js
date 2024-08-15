import { get_dashboard_user_by_id_service } from "@/app/services/dashboard";
import { employeeSlice } from "./employee-slice";

export function get_dashboard_user_by_id_thunk(data) {
    return async function (dispatch, getState) {
        const result = await get_dashboard_user_by_id_service(data);
        dispatch(employeeSlice.actions.setDashboard(result.data));
        return result;
    };
}
