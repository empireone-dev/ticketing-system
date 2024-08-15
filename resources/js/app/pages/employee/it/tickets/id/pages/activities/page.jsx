import React from "react";
import AdminTicketIdLayout from "../../layout";
import AdminTicketsActivitiesSection from "./sections/admin-tickets-activities-section";
import ItLayout from "./../../../../layout";
export default function TicketActivityPage({ auth }) {
    return (
        <ItLayout account={auth.user}>
            <AdminTicketIdLayout>
                <AdminTicketsActivitiesSection />
            </AdminTicketIdLayout>
        </ItLayout>
    );
}
