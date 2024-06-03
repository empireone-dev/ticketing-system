import React from 'react'
import AdminLayout from '../layout'
import DashboardSection from './sections/dashboard-section'

export default function AdminDashboardPage() {
  return (
    <AdminLayout account="1">
      <DashboardSection/>
    </AdminLayout>
  )
}
