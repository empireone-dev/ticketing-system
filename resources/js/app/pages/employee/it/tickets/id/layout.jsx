import store from "@/app/store/store";
import React, { useEffect } from "react";
import AdminTicketIdTabsSection from "./sections/admin-ticket-id-tabs-section";
import { get_ticket_by_id_thunk } from "@/app/pages/admin/tickets/redux/tickets-thunk";

export default function ITTicketIdLayout({ children }) {
    useEffect(() => {
        store.dispatch(get_ticket_by_id_thunk());
    }, []);
    return (
        <>
            <div className="my-2">
                <AdminTicketIdTabsSection />
            </div>
            {children}
            
        </>
    );
}
