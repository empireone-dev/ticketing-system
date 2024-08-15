import React from 'react'
import AdminTicketIdLayout from '../../layout'
import AdminLayout from "./../../../../layout";
import AdminTicketDetailsSection from './sections/admin-ticket-details-section';

export default function TicketDetailsPage({auth}) {
  return (
    <AdminLayout user={auth.user}>
    <AdminTicketIdLayout>
        <AdminTicketDetailsSection />
    </AdminTicketIdLayout>
</AdminLayout>
  )
}
