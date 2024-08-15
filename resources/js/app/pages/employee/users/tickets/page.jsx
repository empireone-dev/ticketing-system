import React, { useEffect } from "react";
import UsersLayout from "../layout";
import UsersTicketsTableSection from "./sections/users-tickets-table-section";
import store from "@/app/store/store";
import {
    get_ticket_by_user_id_thunk,
    get_user_by_position_thunk,
} from "@/app/pages/admin/it/redux/it-thunk";
import { useSelector } from "react-redux";
import UsersTicketAddSection from "./sections/users-tickets-add-section";
import { get_category_thunk } from "@/app/pages/admin/category/redux/category-thunk";

export default function ItTicketsPage({ auth }) {
    const { user, refresh } = useSelector((state) => state.app);
    useEffect(() => {
        if (user) {
            store.dispatch(get_category_thunk());
            store.dispatch(get_user_by_position_thunk(2));
        }
    }, [user]);

    useEffect(() => {
        store.dispatch(get_ticket_by_user_id_thunk(user.id));
    }, [refresh]);
    return (
        <UsersLayout account={auth.user}>
            <UsersTicketAddSection />
            <UsersTicketsTableSection />
        </UsersLayout>
    );
}
