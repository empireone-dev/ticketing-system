import React from 'react'
import DashboardCardSection from './dashboard-card-section'
import { TicketIcon } from '@heroicons/react/24/solid'

export default function DashboardSection() {
    return (
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


    )
}
