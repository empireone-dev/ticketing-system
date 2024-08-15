import React from 'react'
import AdminTicketIdLayout from '../../layout'
import AdminTicketNotesSection from './sections/admin-ticket-notes-section';
import ItLayout from './../../../../layout';

export default function TicketNotesPage({auth}) {
  return (
    <ItLayout account={auth.user}>
    <AdminTicketIdLayout>
        <AdminTicketNotesSection />
    </AdminTicketIdLayout>
</ItLayout>
  )
}
