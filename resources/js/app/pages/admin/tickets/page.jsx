import React, { useEffect } from "react";
import AdminLayout from "../layout";
import TicketsTableSection from "./sections/tickets-table-section";
import store from "@/app/store/store";
import { get_ticket_thunk } from "./redux/tickets-thunk";
import { get_it_thunk, get_user_by_position_thunk } from "../it/redux/it-thunk";
import { get_category_thunk } from "../category/redux/category-thunk";
import TicketAddSection from "./sections/ticket-add-section";
import { useSelector } from "react-redux";

export default function AdminTicketPage({ auth }) {
    const { refresh } = useSelector((state) => state.app);
    useEffect(() => {
        store.dispatch(get_user_by_position_thunk(2));
        store.dispatch(get_category_thunk());
        store.dispatch(get_it_thunk());
    }, []);

    useEffect(() => {
        store.dispatch(get_ticket_thunk(auth.user));
    }, [refresh])
    return (
        <AdminLayout user={auth.user}>
            <div className="py-3">
                <TicketAddSection />
                <TicketsTableSection />
            </div>
        </AdminLayout>
    );
}
