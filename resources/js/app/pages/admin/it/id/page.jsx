import React, { useEffect } from "react";
import ItTableIdSection from "./section/it-table-id-section";
import store from "@/app/store/store";
import { get_ticket_by_user_id_thunk } from "../redux/it-thunk";
import MainLayout from "../../layout";

export default function ItIdPage({ auth }) {
    useEffect(() => {
        store.dispatch(get_ticket_by_user_id_thunk());
    }, []);
    return (
        <MainLayout user={auth.user}>
            <ItTableIdSection />
        </MainLayout>
    );
}
