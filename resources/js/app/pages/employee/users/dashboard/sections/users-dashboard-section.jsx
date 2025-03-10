import React, { useState } from 'react';
import { TicketIcon } from '@heroicons/react/24/solid';
import UsersDashboardCardSection from './users-dashboard-card-section';
import UsersDashboardTableSection from './users-dashboard-table-section';
import { useSelector } from 'react-redux';

export default function UsersDashboardSection() {


  const { dashboard } = useSelector((state) => state.employee);

  console.log('dashboard', dashboard)

  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-wrap gap-7 rounded-md'>
        <UsersDashboardCardSection
          icon={<TicketIcon className='h-12 text-white' />}
          title={`My Urgent Tickets: ${dashboard.urgent ?? 0}`}
          href="Go To Urgent Tickets Section"
          link='/employee/users/tickets?page=1&search=isUrgent'
        />
        <UsersDashboardCardSection
          icon={<TicketIcon className='h-12 text-white' />}
          title={`My Pending Tickets: ${dashboard.pending ?? 0}`}
          href="Go To Pending Tickets Section"
          link='/employee/users/tickets?page=1&search=Pending'
        />
        <UsersDashboardCardSection
          icon={<TicketIcon className='h-12 text-white' />}
          title={`My Ongoing Tickets: ${dashboard.assigned ?? 0}`}
          href="Go To Ongoing Tickets Section"
          link='/employee/users/tickets?page=1&search=Ongoing'
        />
        <UsersDashboardCardSection
          icon={<TicketIcon className='h-12 text-white' />}
          title={`My Closed Tickets: ${dashboard.closed ?? 0}`}
          href="Go To Closed Tickets Section"
          link='/employee/users/tickets?page=1&search=Closed'
        />
      </div>
      <div className='flex gap-7 rounded-md'>

        {/* <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
          <div class="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 px-4 bg-slate-700 ">
            <div>
              <h3 className='text-gray-300 font-bold text-3xl inline-flex items-center'><img src="/images/Final I.T Logo.png" class="h-12 me-2" alt="FlowBite Logo" /> I.T Personnel</h3>
            </div>
            <label for="table-search" class="sr-only">Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="text" id="table-search-users" class="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500     " placeholder="Search for users" />
            </div>
          </div>
          <UsersDashboardTableSection />
        </div> */}
      </div>
    </div>
  );
}
