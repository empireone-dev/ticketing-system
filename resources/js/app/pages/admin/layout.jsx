import Notification from "@/app/components/notification";
import AdministratorSidebarSection from "./_sections/administrator-sidebar-section";
import AdministratorTopbarSection from "./_sections/administrator-topbar-section";
import { useEffect, useState } from "react";
import { get_user_thunk } from "@/app/redux/app-thunk";
import store from "@/app/store/store";
import PusherNotifications from "@/app/realtime/push-notifications";

export default function MainLayout({ children, user }) {
    const [show, setShow] = useState(true);
    useEffect(() => {
        store.dispatch(get_user_thunk(user));
    }, []);
    return (
        <>
            {/* <Notification
                show={show}
                setShow={setShow}
                type="success"
                title="Successfully Save"
                subTitle="Anyone with a link can now view this file."
            /> */}
            <PusherNotifications />
            <AdministratorSidebarSection />
            <div className="lg:pl-72">
                <AdministratorTopbarSection />
                <main>
                    <div className="px-4 sm:px-6 lg:px-8">
                        {children}
                    </div>
                </main>
            </div>
        </>
    );
}
