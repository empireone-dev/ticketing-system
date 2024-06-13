import React from 'react'
import UserLayout from '../layout'
import UserTicketsTableSection from './sections/user-tickets-table-section'

export default function UserTicketPage() {
    return (
        <UserLayout>
            <UserTicketsTableSection/>
        </UserLayout>
    )
}
