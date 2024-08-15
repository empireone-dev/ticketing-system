import store from "@/app/store/store";
import React, { useEffect } from "react";
import { get_ticket_by_id_thunk } from "../redux/tickets-thunk";
import AdminTicketIdTabsSection from "./sections/admin-ticket-id-tabs-section";

export default function AdminTicketIdLayout({ children }) {
    useEffect(() => {
        store.dispatch(get_ticket_by_id_thunk());
    }, []);
    return <>
          <div className="my-2">
            <AdminTicketIdTabsSection />
        </div>
    {children}
    </>;
}
