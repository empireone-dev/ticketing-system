import React from "react";
import UsersLayout from "./../../../../layout";
import UsersTicketIdLayout from "../../layout";
import ItTicketFilesSections from "./sections/it-ticket-files-sections";

export default function TicketFilesPage({ auth }) {
    return (
        <UsersLayout account={auth.user}>
            <UsersTicketIdLayout>
                <ItTicketFilesSections />
            </UsersTicketIdLayout>
        </UsersLayout>
    );
}
