import React, { useEffect } from 'react'
import AdminLayout from '../../layout'
import TicketViewSection from '../sections/ticket-view-section'
import store from '@/app/store/store'
import { get_ticket_by_id_thunk } from '../redux/tickets-thunk'

export default function TicketIDPage() {

  useEffect(() => {
  store.dispatch(get_ticket_by_id_thunk())
  }, [])
  
  return (
    <AdminLayout>
      <TicketViewSection />
    </AdminLayout>
  )
}
