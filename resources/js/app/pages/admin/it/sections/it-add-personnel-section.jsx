import React, { useState } from 'react';
import { Button } from "flowbite-react";
import { UserPlusIcon } from '@heroicons/react/24/solid';
import AddItModalComponent from '../components/add-it-modal-component';

export default function ItAddPersonnelSection() {
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
                <UserPlusIcon className='size-5' />
                Add I.T Personnel
            </Button>
            <AddItModalComponent isOpen={openModal} closeModal={closeModalHandler} />
        </div>
    );
}
