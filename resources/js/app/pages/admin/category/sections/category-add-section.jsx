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
            <Button onClick={openModalHandler} className='flex mb-3 font-semibold bg-slate-700 hover:bg-slate-300 text-gray-200 hover:text-gray-700' >
                <BarsArrowDownIcon className='size-5 mr-1' />
                Add New Category
            </Button>
            <AddCategoryModalComponent isOpen={openModal} closeModal={closeModalHandler} />
        </div>
    );
}
