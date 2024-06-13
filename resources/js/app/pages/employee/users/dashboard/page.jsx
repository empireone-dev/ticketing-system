import React from 'react'
import UserLayout from '../layout'
import UserDashboardSection from './sections/user-dashboard-section'

export default function UserDashboardPage() {
  return (
    <UserLayout>
        <UserDashboardSection/>
    </UserLayout>
  )
}
