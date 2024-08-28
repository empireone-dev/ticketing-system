import React, { useEffect } from "react";
import AdminLayout from "../layout";
import UsersPersonnelTableSection from "./sections/users-personnel-table-sections";
import store from "@/app/store/store";
import { get_user_by_position_thunk } from "./redux/users-thunk";
import UsersAddPersonnelSection from "./sections/users-add-personnel-section";

export default function AdminITPage({ auth }) {
    useEffect(() => {
        store.dispatch(get_user_by_position_thunk(3));
    }, []);
    return (
        <AdminLayout user={auth.user}>
            <div className="mt-3">
                <UsersAddPersonnelSection />
                <UsersPersonnelTableSection />
            </div>
        </AdminLayout>
    );
}
