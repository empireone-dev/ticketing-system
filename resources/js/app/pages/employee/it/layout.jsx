import React from 'react'
import ItSidebarComponents from './components/it-sidebar-components'
import ItTopnavComponents from './components/it-topnav-components'

export default function ItLayout({children}) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-800">
      <ItSidebarComponents />

      <div className="flex flex-1">
        <ItTopnavComponents />

        <div className="p-4 sm:ml-64 flex-1">
          <div className="p-4 mt-14">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
