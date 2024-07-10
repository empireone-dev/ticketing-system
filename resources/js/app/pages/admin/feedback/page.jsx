import React from 'react'
import AdminLayout from '../layout'
import FeedbackSection from './sections/feedback-section'

export default function FeedbackPage({auth}) {
  return (
    <AdminLayout
    user={auth.user}
    >
      <FeedbackSection/>
    </AdminLayout>
  )
}
