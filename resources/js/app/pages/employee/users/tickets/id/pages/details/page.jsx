import React from "react";
import UsersTicketIdLayout from "../../layout";
import UsersTicketDetailsSection from "./sections/users-ticket-details-section";
import UsersLayout from "./../../../../layout";

export default function TicketDetailsPage({ auth }) {
    return (
        <UsersLayout account={auth.user}>
            <UsersTicketIdLayout>
                <UsersTicketDetailsSection />
            </UsersTicketIdLayout>
        </UsersLayout>
    );
}
