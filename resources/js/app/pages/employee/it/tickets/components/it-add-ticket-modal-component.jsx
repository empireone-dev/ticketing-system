import { TicketIcon } from '@heroicons/react/24/solid';
import React from 'react';

export default function ItAddTicketModalComponent({ isOpen, closeModal }) {
    return (
        <>
            <div className={`fixed inset-0 z-50 overflow-hidden bg-opacity-75 ${isOpen ? 'transition-opacity duration-300 opacity-100' : 'opacity-0 pointer-events-none'}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center md:block md:p-0">
                    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div className="absolute inset-0 bg-slate-600 opacity-60" onClick={closeModal}></div>
                    </div>

                    <span className="hidden md:inline-block md:align-middle md:h-screen" aria-hidden="true">&#8203;</span>

                    <div className="relative inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all md:my-8 md:align-middle md:max-w-4xl md:w-full">
                        <div className="bg-white pb-4 pt-5 md:pb-4">
                            <div className="md:flex md:items-start">
                                <div className="text-center md:ml-4 md:mt-0 md:text-left w-full">
                                    <button onClick={closeModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                    <h3 className="flex text-base font-bold leading-6 text-gray-900" id="modal-title"><TicketIcon className='size-5 mr-1' /> Ticket Details</h3>
                                    <form className="max-w-full mx-auto mt-4 pr-4 ">
                                        <div className="grid md:gap-6">
                                            <div className="relative z-0 w-full mb-6 group">
                                                <input type="text" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                <label htmlFor="floating_Requestor_name" className="peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ticket No.</label>
                                            </div>
                                        </div>
                                        <div className="grid md:gap-6">
                                            <div className="relative z-0 w-full mb-6 group">
                                                <input type="text" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                <label htmlFor="floating_Requestor_name" className="peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Requestor name</label>
                                            </div>
                                        </div>
                                        <div className="grid md:gap-6">
                                            <div className="relative z-0 w-full mb-6 group">
                                                <select name="" id="" className="block py-2.5 pl-1.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                                                    <option value=""></option>
                                                    <option value="">adasda</option>
                                                    <option value="">adasda</option>
                                                    <option value="">adasda</option>
                                                </select>
                                                <label htmlFor="floating_Requestor_name" className="peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Category</label>
                                            </div>
                                        </div>
                                        <div className="grid md:gap-6">
                                            <div className="relative z-0 w-full mb-6 group">
                                                <textarea type="text" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                <label htmlFor="floating_Requestor_name" className="peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Request Details</label>
                                            </div>
                                        </div>
                                        <div className="relative z-0 w-full mb-6 group">
                                            <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" value="Pending" required />
                                            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Status</label>
                                        </div>
                                        <div class="flex items-center mb-4">
                                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500   focus:ring-2 " />
                                            <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Is Urgent</label>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-3 md:flex md:flex-row-reverse md:px-6">
                                            <button type="button" className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-md font-semibold text-white shadow-md hover:bg-blue-500 md:ml-3 md:w-auto">Submit</button>
                                            <button type="button" onClick={closeModal} className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-md font-semibold text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 md:mt-0 md:w-auto">Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
