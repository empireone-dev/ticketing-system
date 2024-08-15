import React from 'react'
import AdminTicketIdLayout from '../../layout'
import AdminLayout from "./../../../../layout";
import AdminTicketFilesSections from './sections/admin-ticket-files-sections';

export default function TicketFilesPage({auth}) {
  return (
    <AdminLayout user={auth.user}>
    <AdminTicketIdLayout>
  
        <AdminTicketFilesSections />
    </AdminTicketIdLayout>
</AdminLayout>
  )
}
