import React, { useEffect } from 'react'
import ItLayout from '../layout'
import ItTableTicketsSection from './sections/it-tickets-table-section'
import store from '@/app/store/store';
import { get_ticket_by_user_id_thunk } from '@/app/pages/admin/it/redux/it-thunk';
import { useSelector } from 'react-redux';

export default function ItTicketsPage({auth}) {
  
  const { user,refresh } = useSelector((state) => state.app);
  useEffect(()=>{
    if (user) {
     store.dispatch(get_ticket_by_user_id_thunk(auth.user.id));
    }
  },[user,refresh])
  return (
    <ItLayout account={auth.user}>
      <ItTableTicketsSection/>
    </ItLayout>
  )
}
