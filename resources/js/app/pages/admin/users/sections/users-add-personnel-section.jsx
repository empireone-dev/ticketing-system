import React, { useState } from 'react';
import { Button } from "flowbite-react";
import { UserPlusIcon } from '@heroicons/react/24/solid';
import AddItModalComponent from '../components/add-it-modal-component';

export default function UsersAddPersonnelSection() {
    const [openModal, setOpenModal] = useState(false);

    const openModalHandler = () => {
        setOpenModal(true);
    };

    const closeModalHandler = () => {
        setOpenModal(false);
    };

    return (
        <div>
            <Button onClick={openModalHandler} className='flex mb-3 font-semibold bg-indigo-700 hover:bg-indigo-500 text-white ' >
                <UserPlusIcon className='size-5' />
                Add User
            </Button>
            <AddItModalComponent isOpen={openModal} closeModal={closeModalHandler} />
        </div>
    );
}
