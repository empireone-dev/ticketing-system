import { PieChartFilled, PoweroffOutlined } from '@ant-design/icons'
import { ChatBubbleLeftEllipsisIcon, TicketIcon } from '@heroicons/react/24/solid'
import { Link } from '@inertiajs/react'
import React from 'react'

export default function ItSidebarComponents() {
  return (
    <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-slate-800 border-r border-gray-900 sm:translate-x-0" aria-label="Sidebar">
    <div class="h-full px-3 pb-4 overflow-y-auto bg-slate-800">
       <ul class="space-y-2 font-medium">
          <li>
             <Link href='/employee/it/dashboard' class="flex items-center p-2 text-white rounded-lg hover:bg-gray-100 hover:text-gray-900 group">
             <PieChartFilled className='text-lg text-gray-400'/>
                <span class="ms-3">Dashboard</span>
             </Link>
          </li>
          <li>
             <a href="/employee/it/tickets" class="flex items-center p-1 text-white rounded-lg hover:bg-gray-100 hover:text-gray-900 group">
                <TicketIcon className='h-7 text-gray-400'/>
                <span class="flex-1 ms-2 whitespace-nowrap">My Tickets Section</span>
             </a>
          </li>
          <li>
             <a href="/employee/it/feedback" class="flex items-center p-1 text-white rounded-lg hover:bg-gray-100 hover:text-gray-900 group">
                <ChatBubbleLeftEllipsisIcon className='h-7 text-gray-400'/>
                <span class="flex-1 ms-2 whitespace-nowrap">Feedback Section</span>
             </a>
          </li>
          <li>
             <a href="#" class="flex items-center p-2 text-white rounded-lg hover:bg-gray-100 hover:text-gray-900 group">
                <PoweroffOutlined className='text-xl text-gray-400'/>
                <span class="flex-1 ms-3 whitespace-nowrap">Log out</span>
             </a>
          </li>
       </ul>
    </div>
 </aside>
  )
}
