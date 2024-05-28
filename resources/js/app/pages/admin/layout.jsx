import React from 'react'
import AdminSidebarComponents from './components/admin-sidebar-components'
import AdminTopnavComponents from './components/admin-topnav-components'

export default function AdminLayout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <AdminTopnavComponents />

      <div className="flex flex-1">
        <AdminSidebarComponents />

        <div className="p-4 sm:ml-64 flex-1">
          <div className="p-4 mt-14">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
