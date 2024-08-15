import store from "@/app/store/store";
import React, { useEffect } from "react";
import UsersTicketIdTabsSection from "./sections/users-ticket-id-tabs-section";
import { get_ticket_by_id_thunk } from "@/app/pages/admin/tickets/redux/tickets-thunk";

export default function UsersTicketIdLayout({ children }) {
    useEffect(() => {
        store.dispatch(get_ticket_by_id_thunk());
    }, []);
    return (
        <>
        
            <div className="my-2">
                <UsersTicketIdTabsSection />
            </div>
            {children}
        </>
    );
}
