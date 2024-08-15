import React, { useEffect } from "react";
import AdminLayout from "../layout";
import DashboardSection from "./sections/dashboard-section";
import store from "@/app/store/store";
import { get_user_by_position_thunk } from "../it/redux/it-thunk";
import { get_dashboard_user_by_id_thunk } from "../_redux/admin-thunk";

export default function AdminDashboardPage({ auth }) {
    useEffect(() => {
        store.dispatch(get_dashboard_user_by_id_thunk());
        store.dispatch(get_user_by_position_thunk(2))
    }, []);
    return (
        <AdminLayout user={auth.user}>
            <div className="py-5">
                <DashboardSection />
            </div>
        </AdminLayout>
    );
}
