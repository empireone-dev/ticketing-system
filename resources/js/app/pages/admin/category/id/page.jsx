import React from 'react'
import AdminLayout from "@/app/pages/admin/layout";
import AdminCategoriesIdTableSection from './sections/admin-categories-id-table-section'

export default function CategoryIDTickets({auth}) {
  return (
    <AdminLayout
    user={auth.user}
    >
      <AdminCategoriesIdTableSection />
    </AdminLayout>
  )
}
