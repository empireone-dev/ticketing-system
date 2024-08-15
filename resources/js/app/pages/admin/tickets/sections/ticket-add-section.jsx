import React, { useState } from 'react';
import { Button } from "flowbite-react";
import { TicketIcon } from '@heroicons/react/24/solid';
import AddTicketModalComponent from '../components/add-ticket-modal-component';

export default function TicketAddSection() {
    const [openModal, setOpenModal] = useState(false);

    const openModalHandler = () => {
        setOpenModal(true);
    };

    const closeModalHandler = () => {
        setOpenModal(false);
    };

    return (
        <div>
            <Button onClick={openModalHandler} className='flex mb-3 font-semibold bg-indigo-700 hover:bg-indigo-500 text-gray-200' >
                <TicketIcon className='size-5 mr-1' />
                Add New Ticket
            </Button>
            <AddTicketModalComponent isOpen={openModal} closeModal={closeModalHandler} />
        </div>
    );
}
