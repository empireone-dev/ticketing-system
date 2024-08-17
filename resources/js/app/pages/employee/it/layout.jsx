import React, { useEffect } from "react";
import ItTopbarSection from "./_sections/it-topbar-section";
import TtSidebarSection from "./_sections/it-sidebar-section";
import store from "@/app/store/store";
import { get_user_thunk } from "@/app/redux/app-thunk";
import PusherNotifications from "@/app/realtime/push-notifications";

export default function ItLayout({ children, account }) {
    useEffect(() => {
        store.dispatch(get_user_thunk(account));
    }, []);
    return (
        <>
            <PusherNotifications />
            <TtSidebarSection />
            <div className="lg:pl-72">
                <ItTopbarSection />
                <main>
                    <div className="px-4 sm:px-6 lg:px-8 py-4">{children}</div>
                </main>
            </div>
        </>
    );
}
