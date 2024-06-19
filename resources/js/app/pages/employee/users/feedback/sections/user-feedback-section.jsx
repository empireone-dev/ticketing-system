import { ChatBubbleLeftEllipsisIcon, ExclamationTriangleIcon, TicketIcon } from '@heroicons/react/24/solid'
import React from 'react'

export default function UserFeedbackSection() {
    return (
        <div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div class="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 px-4 bg-slate-900 rounded-t-lg">
                    <div>
                        <h3 className='text-gray-300 font-bold text-3xl inline-flex items-center'><img src="/images/Final I.T Logo.png" class="h-12 me-2" alt="FlowBite Logo" /> Feedback Section</h3>
                    </div>
                    <label for="table-search" class="sr-only">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" SendBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text" id="table-search-users" class="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500     " placeholder="Search for users" />
                    </div>
                </div>
                <table class="w-full text-sm text-left rtl:text-right text-gray-300">
                    <thead class="text-xs text-white-200 uppercase bg-slate-700">
                        <tr className='border-b border-slate-500'>

                            
                            <th scope="col" class="px-6 py-3">
                                Ticket No.
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Assigned I.T Personnel
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Status
                            </th><th scope="col" class="px-6 py-3 ">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="text-white bg-slate-700  border-b border-slate-500 hover:bg-slate-500">
                            
                            <td class="px-6 py-4">
                                <div class="text-base text-white font-semibold flex"><TicketIcon className='size-5 mr-1' />#IT300524000027</div>
                            </td>
                            <td class="px-6 py-4">
                            <div class="bg-indigo-400 text-gray-100 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border-gray-500">UI Designing</div>
                            </td>
                            <td class="px-6 py-4">
                                <div class="flex items-center">
                                    <img class="w-10 h-10 rounded-full" src="/images/ppto.png" alt="Jese image" />
                                    <div class="ps-3">
                                        <div class="text-base text-white font-semibold">Leslie Livingston</div>
                                        <div class="bg-indigo-400 text-gray-100 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border-gray-500">React Developer</div>
                                    </div>
                                </div>
                            </td>
                            <td class="flex px-6 py-4">
                                <div class="bg-yellow-400 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border-gray-500">Pending</div>
                                <div class="bg-red-300 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border-gray-500"><ExclamationTriangleIcon className='size-5 mr-1' />Urgent</div>
                            </td>
                            <td class="px-6 py-4">

                                <button type="button" class="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2">
                                <ChatBubbleLeftEllipsisIcon className='size-5 mr-1' /> Send Feedback
                                </button>
                            </td>
                        </tr>
                        <tr class="border-b border-slate-500 text-white bg-slate-700 hover:bg-slate-500">
                        
                            <td class="px-6 py-4">
                                <div class="text-base text-white font-semibold flex"><TicketIcon className='size-5 mr-1' />#IT300524000027</div>
                            </td>
                            <td class="px-6 py-4">
                            <div class="bg-indigo-400 text-gray-100 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border-gray-500">Technical</div>
                            </td>
                            <td class="px-6 py-4">
                                <div class="flex items-center">
                                    <img class="w-10 h-10 rounded-full" src="/images/ppto.png" alt="Jese image" />
                                    <div class="ps-3">
                                        <div class="text-base text-white font-semibold">Leslie Livingston</div>
                                        <div class="bg-indigo-400 text-gray-100 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border-gray-500">React Developer</div>
                                    </div>
                                </div>
                            </td>
                            <td class="flex px-6 py-4">
                                <div class="bg-orange-400 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border-gray-500">On-going</div>
                            </td>
                            <td class="px-6 py-4">

                                <button type="button" class="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2">
                                <ChatBubbleLeftEllipsisIcon className='size-5 mr-1' /> Send Feedback
                                </button>
                            </td>
                        </tr>
                        <tr class="text-white bg-slate-700  border-b border-slate-500 hover:bg-slate-500">
                       
                            <td class="px-6 py-4">
                                <div class="text-base text-white font-semibold flex"><TicketIcon className='size-5 mr-1' />#IT300524000027</div>
                            </td>
                            <td class="px-6 py-4">
                            <div class="bg-indigo-400 text-gray-100 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border-gray-500">Web & App Development</div>
                            </td>
                            <td class="px-6 py-4">
                                <div class="flex items-center">
                                    <img class="w-10 h-10 rounded-full" src="/images/ppto.png" alt="Jese image" />
                                    <div class="ps-3">
                                        <div class="text-base text-white font-semibold">Leslie Livingston</div>
                                        <div class="bg-indigo-400 text-gray-100 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border-gray-500">React Developer</div>
                                    </div>
                                </div>
                            </td>
                            <td class="flex px-6 py-4">
                                <div class="bg-green-400 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border-gray-500">Closed</div>
                            </td>
                            <td class="px-6 py-4">

                                <button type="button" class="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2">
                                <ChatBubbleLeftEllipsisIcon className='size-5 mr-1' /> Send Feedback
                                </button>
                            </td>
                        </tr>
                        <tr class="text-white bg-slate-700  border-b border-slate-500 hover:bg-slate-500">
                        
                            <td class="px-6 py-4">
                                <div class="text-base text-white font-semibold flex"><TicketIcon className='size-5 mr-1' />#IT300524000027</div>
                            </td>
                            <td class="px-6 py-4">
                            <div class="bg-indigo-400 text-gray-100 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border-gray-500">Network & Security</div>
                            </td>
                            <td class="px-6 py-4">
                                <div class="flex items-center">
                                    <img class="w-10 h-10 rounded-full" src="/images/ppto.png" alt="Jese image" />
                                    <div class="ps-3">
                                        <div class="text-base text-white font-semibold">Leslie Livingston</div>
                                        <div class="bg-indigo-400 text-gray-100 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border-gray-500">React Developer</div>
                                    </div>
                                </div>
                            </td>
                            <td class="flex px-6 py-4">
                                <div class="bg-cyan-400 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border-gray-500">Assigned</div>
                                <div class="bg-red-300 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border-gray-500"><ExclamationTriangleIcon className='size-5 mr-1' />Urgent</div>
                            </td>
                            <td class="px-6 py-4">

                                <button type="button" class="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2">
                                <ChatBubbleLeftEllipsisIcon className='size-5 mr-1' /> Send Feedback
                                </button>
                            </td>
                        </tr>
                        <tr class="text-white bg-slate-700  border-b border-slate-500 hover:bg-slate-500">
                       
                            <td class="px-6 py-4">
                                <div class="text-base text-white font-semibold flex"><TicketIcon className='size-5 mr-1' />#IT300524000027</div>
                            </td>
                            <td class="px-6 py-4">
                            <div class="bg-indigo-400 text-gray-100 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border-gray-500">Graphics Designing</div>
                            </td>
                            <td class="px-6 py-4">
                                <div class="flex items-center">
                                    <img class="w-10 h-10 rounded-full" src="/images/ppto.png" alt="Jese image" />
                                    <div class="ps-3">
                                        <div class="text-base text-white font-semibold">Leslie Livingston</div>
                                        <div class="bg-indigo-400 text-gray-100 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border-gray-500">React Developer</div>
                                    </div>
                                </div>
                            </td>
                            <td class="flex px-6 py-4">
                                <div class="bg-yellow-400 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border-gray-500">Pending</div>
                            </td>
                            <td class="px-6 py-4">

                                <button type="button" class="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2">
                                   <ChatBubbleLeftEllipsisIcon className='size-5 mr-1' /> Send Feedback
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>


            </div>
        </div>
    )
}
