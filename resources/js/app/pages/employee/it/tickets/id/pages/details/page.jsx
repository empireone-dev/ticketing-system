import React from "react";
import ITTicketIdLayout from "../../layout";
import ITTicketDetailsSection from "./sections/it-ticket-details-section";
import ItLayout from "./../../../../layout";

export default function TicketDetailsPage({ auth }) {
    return (
        <ItLayout account={auth.user}>
            <ITTicketIdLayout>
                <ITTicketDetailsSection />
            </ITTicketIdLayout>
        </ItLayout>
    );
}
