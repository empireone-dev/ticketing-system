import React from "react";
import UsersTicketIdLayout from "../../layout";
import UsersTicketsActivitiesSection from "./sections/users-tickets-activities-section";
import UsersLayout from "./../../../../layout";
export default function TicketActivityPage({ auth }) {
    return (
        <UsersLayout account={auth.user}>
            <UsersTicketIdLayout>
                <UsersTicketsActivitiesSection />
            </UsersTicketIdLayout>
        </UsersLayout>
    );
}
