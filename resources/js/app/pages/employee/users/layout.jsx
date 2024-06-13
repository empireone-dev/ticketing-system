import React from 'react'
import UserSidebarComponents from './components/user-sidebar-components'
import UserTopnavComponents from './components/user-topnav-components'

export default function UserLayout({children}) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-800">
      <UserSidebarComponents />

      <div className="flex flex-1">
        <UserTopnavComponents />

        <div className="p-4 sm:ml-64 flex-1">
          <div className="p-4 mt-14">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
