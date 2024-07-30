import React, { useEffect } from 'react'
import AdminLayout from '../../layout'
import TtTableIdSection from './section/it-table-id-section'
import store from '@/app/store/store'
import { get_ticket_by_user_id_thunk } from '../redux/it-thunk'

export default function ItIdPage() {
  useEffect(()=>{
    store.dispatch(get_ticket_by_user_id_thunk())
  },[])
  return (
    <AdminLayout>
      <TtTableIdSection />
    </AdminLayout>
  )
}
