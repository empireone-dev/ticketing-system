import React from 'react'
import AdminLayout from '../layout'
import TicketsTableSection from './sections/tickets-table-section'

export default function AdminTicketPage() {
  return (
    <AdminLayout>
      <TicketsTableSection/>
    </AdminLayout>
  )
}
