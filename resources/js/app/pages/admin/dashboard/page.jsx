import React from 'react'
import AdminLayout from '../layout'
import DashboardSection from './sections/dashboard-section'

export default function AdminDashboardPage({auth}) {
  return (
    <AdminLayout 
    user={auth.user}>
      <DashboardSection/>
    </AdminLayout>
  )
}
