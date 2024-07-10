import React, { useEffect } from 'react'
import AdminLayout from '../layout'
import ItPersonnelTableSection from './sections/it-personnel-table-sections'
import store from '@/app/store/store'
import { get_it_thunk } from './redux/it-thunk'

export default function AdminITPage({auth}) {

  useEffect(()=>{
    store.dispatch(get_it_thunk())
  },[])
  return (
    <AdminLayout
    user={auth.user}
    >
      <ItPersonnelTableSection/>
    </AdminLayout>
  )
}
