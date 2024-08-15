import React from "react";
import ItLayout from "./../../../../layout";
import ITTicketIdLayout from "../../layout";
import ItTicketFilesSections from "./sections/it-ticket-files-sections";

export default function TicketFilesPage({ auth }) {
    return (
        <ItLayout account={auth.user}>
            <ITTicketIdLayout>
                <ItTicketFilesSections />
            </ITTicketIdLayout>
        </ItLayout>
    );
}
