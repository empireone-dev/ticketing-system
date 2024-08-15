import React, { useEffect } from "react";
import UsersTopbarSection from "./_sections/users-topbar-section";
import store from "@/app/store/store";
import { get_user_thunk } from "@/app/redux/app-thunk";
import UsersSidebarSection from "./_sections/users-sidebar-section";

export default function UsersLayout({ children,account }) {

    useEffect(() => {
        store.dispatch(get_user_thunk(account));
    }, []);
    return (
        <>
            <UsersSidebarSection />
            <div className="lg:pl-72">
                <UsersTopbarSection />
                <main>
                    <div className="px-4 sm:px-6 lg:px-8 py-4">{children}</div>
                </main>
            </div>
        </>
    );
}
