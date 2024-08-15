import React from "react";
import UsersTicketIdLayout from "../../layout";
import AdminTicketNotesSection from "./sections/admin-ticket-notes-section";
import UsersLayout from "./../../../../layout";

export default function TicketNotesPage({ auth }) {
    return (
        <UsersLayout account={auth.user}>
            <UsersTicketIdLayout>
                <AdminTicketNotesSection />
            </UsersTicketIdLayout>
        </UsersLayout>
    );
}
