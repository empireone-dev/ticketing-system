import React from "react";
import AdminTicketIdLayout from "../../layout";
import AdminLayout from "./../../../../layout";
import AdminTicketsActivitiesSection from "./sections/admin-tickets-activities-section";
export default function TicketActivityPage({ auth }) {
    return (
        <AdminLayout user={auth.user}>
            <AdminTicketIdLayout>
                <AdminTicketsActivitiesSection />
            </AdminTicketIdLayout>
        </AdminLayout>
    );
}
