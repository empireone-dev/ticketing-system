import React, { useState } from 'react';
import { Button } from "flowbite-react";
import { TicketIcon } from '@heroicons/react/24/solid';
import UserAddTicketModalComponent from '../components/user-add-ticket-modal-components';

export default function UserTicketAddSection() {
    const [openModal, setOpenModal] = useState(false);

    const openModalHandler = () => {
        setOpenModal(true);
    };

    const closeModalHandler = () => {
        setOpenModal(false);
    };

    return (
        <div>
            <Button onClick={openModalHandler} className='flex mb-3 font-semibold bg-slate-700 hover:bg-slate-300 text-gray-200 hover:text-gray-700' >
                <TicketIcon className='size-5 mr-1' />
                Add New Ticket
            </Button>
            <UserAddTicketModalComponent isOpen={openModal} closeModal={closeModalHandler} />
        </div>
    );
}
