import React, { useEffect } from 'react'
import AdminLayout from '../layout'
import TicketsTableSection from './sections/tickets-table-section'
import store from '@/app/store/store'
import { get_ticket_thunk } from './redux/tickets-thunk'
import { get_it_thunk } from '../it/redux/it-thunk'
import { get_category_thunk } from '../category/redux/category-thunk'

export default function AdminTicketPage({auth}) {

  useEffect(()=>{
    store.dispatch(get_ticket_thunk())
    store.dispatch(get_it_thunk())
    store.dispatch(get_category_thunk())
  },[])
  return (
    <AdminLayout
    
    >
      <TicketsTableSection />
    </AdminLayout>
  )
}
