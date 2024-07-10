import React, { useEffect } from "react";
import AdminSidebarComponents from "./components/admin-sidebar-components";
import AdminTopnavComponents from "./components/admin-topnav-components";
import store from "@/app/store/store";
import { get_user_thunk } from "@/app/redux/app-thunk";

export default function AdminLayout({ children, user }) {
    useEffect(() => {
        store.dispatch(get_user_thunk(user));
    }, []);
    return (
        <div className="flex flex-col min-h-screen bg-slate-800">
            <AdminTopnavComponents />

            <div className="flex flex-1">
                <AdminSidebarComponents />

                <div className="p-4 sm:ml-64 flex-1">
                    <div className="p-4 mt-14">{children}</div>
                </div>
            </div>
        </div>
    );
}
