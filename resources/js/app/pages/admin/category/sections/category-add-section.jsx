import React, { useState } from 'react';
import { Button } from "flowbite-react";
import { BarsArrowDownIcon } from '@heroicons/react/24/solid';
import AddCategoryModalComponent from '../components/add-category-modal-component';

export default function CategoryAddSection() {
    const [openModal, setOpenModal] = useState(false);

    const openModalHandler = () => {
        setOpenModal(true);
    };

    const closeModalHandler = () => {
        setOpenModal(false);
    };

    return (
        <div>
            <Button onClick={openModalHandler} className='flex mb-3 font-semibold bg-indigo-700 hover:bg-indigo-600 text-white ' >
                <BarsArrowDownIcon className='size-5 mr-1' />
                Add New Category
            </Button>
            <AddCategoryModalComponent isOpen={openModal} closeModal={closeModalHandler} />
        </div>
    );
}
