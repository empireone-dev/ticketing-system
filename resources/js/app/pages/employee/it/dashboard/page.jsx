import React, { useEffect } from 'react'
import ItLayout from '../layout'
// import ItDashboardCardSection from './sections/it-dashboard-card-section'
import ItDashboardSection from './sections/it-dashboard-section'
import store from '@/app/store/store';
import { get_it_thunk } from '@/app/pages/admin/it/redux/it-thunk';
import { get_dashboard_user_by_id_thunk } from '../../_redux/employee-thunk';

export default function ItDashboardPage({auth}) {
  useEffect(() => {
    store.dispatch(get_it_thunk());
    store.dispatch(get_dashboard_user_by_id_thunk(auth.user.id))
}, []);
  return (
    <ItLayout
    account={auth.user}
    >
        <ItDashboardSection/>
    </ItLayout>
  )
}
