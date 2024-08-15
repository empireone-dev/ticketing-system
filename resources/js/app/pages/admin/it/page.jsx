import React, { useEffect } from "react";
import AdminLayout from "../layout";
import ItPersonnelTableSection from "./sections/it-personnel-table-sections";
import store from "@/app/store/store";
import { get_user_by_position_thunk } from "./redux/it-thunk";
import ItAddPersonnelSection from "./sections/it-add-personnel-section";
import { get_dashboard_user_by_id_thunk } from "../../employee/_redux/employee-thunk";

export default function AdminITPage({ auth }) {
    useEffect(() => {
        store.dispatch(get_user_by_position_thunk(2));
    }, []);
    return (
        <AdminLayout user={auth.user}>
            <div className="mt-3">
                <ItAddPersonnelSection />
                <ItPersonnelTableSection />
            </div>
        </AdminLayout>
    );
}
