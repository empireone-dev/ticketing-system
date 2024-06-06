import React from 'react'
import DashboardCardSection from './dashboard-card-section'
import { TicketIcon } from '@heroicons/react/24/solid'
import DashboardTableSection from './dashboard-table-section'
import { PieChart } from 'react-minimal-pie-chart'

export default function DashboardSection() {

    const shiftSize = 7;
    return (
        <div className='flex flex-col gap-8'>
            <div className='flex flex-wrap gap-7 rounded-md'>
                <DashboardCardSection
                    icon={<TicketIcon className='h-12 text-white' />}
                    title="Pending Tickets"
                    href="Go To Pending Tickets Section"
                />
                <DashboardCardSection
                    icon={<TicketIcon className='h-12 text-white' />}
                    title="Assigned Tickets"
                    href="Go To Assigned Tickets Section"
                />
                <DashboardCardSection
                    icon={<TicketIcon className='h-12 text-white' />}
                    title="Ongoing Tickets"
                    href="Go To Ongoing Tickets Section"
                />
                <DashboardCardSection
                    icon={<TicketIcon className='h-12 text-white' />}
                    title="Closed Tickets"
                    href="Go To Closed Tickets Section"
                />
            </div>
            <div className='flex  gap-7 rounded-md'>

                <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-3/4">
                    <div class="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 px-4 bg-slate-700 dark:bg-gray-900">
                        <div>
                            <h3 className='text-gray-300 font-bold text-3xl inline-flex items-center'><img src="/images/Final I.T Logo.png" class="h-12 me-2" alt="FlowBite Logo" /> I.T Personnel</h3>
                        </div>
                        <label for="table-search" class="sr-only">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="text" id="table-search-users" class="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />
                        </div>
                    </div>
                    <DashboardTableSection />
                </div>
                <div className='bg-white shadow-lg p-3 rounded-lg'>
                    <div className='text-3xl'>
                    PIE CHART
                    </div>
                    <PieChart
                        onClick={(e, segmentIndex)=>{
                           console.log('e',e)
                        }}
                        // segmentsShift={({ dataEntry }) => dataEntry.value}
                        label={({ dataEntry }) => dataEntry.value}
                        data={[
                            { title: 'One', value: 10, color: '#E38627' },
                            { title: 'Two', value: 15, color: '#C13C37' },
                            { title: 'Three', value: 20, color: '#6A2135' },
                        ]}
                    />
                </div>
            </div>
        </div>



    )
}
