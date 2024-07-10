import React, { useEffect } from 'react'
import AdminLayout from '../layout'
import CategoryTableSection from './sections/category-table-section'
import store from '@/app/store/store'
import { get_category_thunk } from './redux/category-thunk'

export default function AdminCategoryPage({auth}) {

  useEffect(()=>{
    store.dispatch(get_category_thunk())
  },[])
  return (
    <AdminLayout
    user={auth.user}
    >
      <CategoryTableSection/>
    </AdminLayout>
  )
}
