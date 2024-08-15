import React from 'react'
import AdminTicketIdLayout from '../../layout'
import AdminLayout from "./../../../../layout";
import AdminTicketNotesSection from './sections/admin-ticket-notes-section';

export default function TicketNotesPage({auth}) {
  return (
    <AdminLayout user={auth.user}>
    <AdminTicketIdLayout>
        <AdminTicketNotesSection />
    </AdminTicketIdLayout>
</AdminLayout>
  )
}
