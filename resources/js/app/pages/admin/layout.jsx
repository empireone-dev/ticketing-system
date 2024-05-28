import React from 'react'
import AdminSidebarComponents from './components/admin-sidebar-components'
import AdminTopnavComponents from './components/admin-topnav-components'

export default function AdminLayout({ children }) {
  return (
    <div>
      <div>


        <AdminTopnavComponents />

        <AdminSidebarComponents />

        <div class="p-4 sm:ml-64">
          <div class="p-4  mt-14">
            {children}
          </div>
        </div>

      </div>
    </div>
  )
}
