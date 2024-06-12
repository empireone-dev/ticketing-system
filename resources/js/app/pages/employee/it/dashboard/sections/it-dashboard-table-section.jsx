import React from 'react'

export default function ItDashboardTableSection() {
  return (
    <div>
                    <table class="w-full text-sm text-left rtl:text-right text-gray-300">
                        <thead class="text-xs text-white-200 uppercase bg-slate-700">
                            <tr className='border-b border-slate-500'>

                                <th scope="col" class="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Position
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Assigned Tickets
                                </th>
                                <th scope="col" class="px-6 py-3 ">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="text-white bg-slate-700  border-b border-slate-500 hover:bg-slate-500">
                                <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
                                    <img class="w-10 h-10 rounded-full" src="/images/ppto.png" alt="Jese image" />
                                    <div class="ps-3">
                                        <div class="text-base text-white font-semibold">Neil Sims</div>
                                        <div class="font-bold text-gray-400">neil.sims@flowbite.com</div>
                                    </div>
                                </th>
                                <td class="px-6 py-4">
                                    <div class="bg-indigo-400 text-gray-100 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border-gray-500">React Developer</div>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex items-center">
                                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex items-center justify-center w-4 h-4 text-center text-medium p-3 font-bold text-blue-800 bg-blue-200 rounded">10</div>
                                </td>
                                <td class="px-6 py-4">

                                    <button type="button" class="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2">
                                        View Assigned Tickets
                                    </button>
                                </td>
                            </tr>
                            <tr class="border-b border-slate-500 text-white bg-slate-700 hover:bg-slate-500">
                                <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    <img class="w-10 h-10 rounded-full" src="/images/ppto.png" alt="Jese image" />
                                    <div class="ps-3">
                                        <div class="text-base text-white font-semibold">Bonnie Green</div>
                                        <div class="font-bold text-gray-400">bonnie@flowbite.com</div>
                                    </div>
                                </th>
                                <td class="px-6 py-4">
                                    <div class="bg-indigo-400 text-gray-100 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border-gray-500">Designer</div>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex items-center">
                                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex items-center justify-center w-4 h-4 text-center text-medium p-3 font-bold text-blue-800 bg-blue-200 rounded">10</div>
                                </td>
                                <td class="px-6 py-4">

                                    <button type="button" class="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2">
                                        View Assigned Tickets
                                    </button>
                                </td>
                            </tr>
                            <tr class="text-white bg-slate-700  border-b border-slate-500 hover:bg-slate-500">
                                <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    <img class="w-10 h-10 rounded-full" src="/images/ppto.png" alt="Jese image" />
                                    <div class="ps-3">
                                        <div class="text-base text-white font-semibold">Jese Leos</div>
                                        <div class="font-bold text-gray-400">jese@flowbite.com</div>
                                    </div>
                                </th>
                                <td class="px-6 py-4">
                                    <div class="bg-indigo-400 text-gray-100 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border-gray-500"> Vue JS Developer</div>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex items-center">
                                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex items-center justify-center w-4 h-4 text-center text-medium p-3 font-bold text-blue-800 bg-blue-200 rounded">10</div>
                                </td>
                                <td class="px-6 py-4">

                                    <button type="button" class="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2">
                                        View Assigned Tickets
                                    </button>
                                </td>
                            </tr>
                            <tr class="text-white bg-slate-700  border-b border-slate-500 hover:bg-slate-500">
                                <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    <img class="w-10 h-10 rounded-full" src="/images/ppto.png" alt="Jese image" />
                                    <div class="ps-3">
                                        <div class="text-base text-white font-semibold">Thomas Lean</div>
                                        <div class="font-bold text-gray-400">thomes@flowbite.com</div>
                                    </div>
                                </th>
                                <td class="px-6 py-4">
                                    <div class="bg-indigo-400 text-gray-100 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border-gray-500">UI/UX Engineer</div>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex items-center">
                                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex items-center justify-center w-4 h-4 text-center text-medium p-3 font-bold text-blue-800 bg-blue-200 rounded">10</div>
                                </td>
                                <td class="px-6 py-4">

                                    <button type="button" class="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2">
                                        View Assigned Tickets
                                    </button>
                                </td>
                            </tr>
                            <tr class="text-white bg-slate-700  border-b border-slate-500 hover:bg-slate-500">
                                <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    <img class="w-10 h-10 rounded-full" src="/images/ppto.png" alt="Jese image" />
                                    <div class="ps-3">
                                        <div class="text-base text-white font-semibold">Leslie Livingston</div>
                                        <div class="font-bold text-gray-400">leslie@flowbite.com</div>
                                    </div>
                                </th>
                                <td class="px-6 py-4">
                                    <div class="bg-indigo-400 text-gray-100 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border-gray-500">SEO Specialist</div>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex items-center">
                                        <div class="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div> Offline
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex items-center justify-center w-4 h-4 text-center text-medium p-3 font-bold text-blue-800 bg-blue-200 rounded">10</div>
                                </td>
                                <td class="px-6 py-4">

                                    <button type="button" class="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2">
                                        View Assigned Tickets
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
    </div>
  )
}
