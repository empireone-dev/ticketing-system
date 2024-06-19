import React from "react";
import ItAddPersonnelSection from "./it-add-personnel-section";
import { useSelector } from "react-redux";
import { router } from "@inertiajs/react";

export default function ItPersonnelTableSection() {
    const { users } = useSelector((state) => state.it);
    console.log("users", users);
    return (
        <div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <ItAddPersonnelSection />
                <div class="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 px-4 bg-slate-900 rounded-t-lg">
                    <div>
                        <h3 className="text-gray-300 font-bold text-3xl inline-flex items-center">
                            <img
                                src="/images/Final I.T Logo.png"
                                class="h-12 me-2"
                                alt="FlowBite Logo"
                            />{" "}
                            I.T Personnel
                        </h3>
                    </div>
                    <label for="table-search" class="sr-only">
                        Search
                    </label>
                    <div class="relative">
                        <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                class="w-4 h-4 text-gray-500 "
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="table-search-users"
                            class="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500     "
                            placeholder="Search for users"
                        />
                    </div>
                </div>
                <table class="w-full text-sm text-left rtl:text-right text-gray-300">
                    <thead class="text-xs text-white-200 uppercase bg-slate-700">
                        <tr className="border-b border-slate-500">
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
                            <th scope="col" class="px-6 py-3">
                                Closed Tickets
                            </th>
                            <th scope="col" class="px-6 py-3 ">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((res, i) => {
                            return (
                                <tr class="text-white bg-slate-700  border-b border-slate-500 hover:bg-slate-500">
                                    <th
                                        scope="row"
                                        class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
                                    >
                                        <img
                                            class="w-10 h-10 rounded-full"
                                            src="/images/ppto.png"
                                            alt="Jese image"
                                        />
                                        <div class="ps-3">
                                            <div class="text-base text-white font-semibold">
                                                {res.name}
                                            </div>
                                            <div class="font-bold text-gray-400">
                                                {res.email}
                                            </div>
                                        </div>
                                    </th>
                                    <td class="px-6 py-4">
                                        <div class="bg-indigo-400 text-gray-100 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border-gray-500">
                                            {res.position}
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="flex items-center">
                                            <div
                                                class={`h-2.5 w-2.5 rounded-full ${
                                                    res.isOnline == "true"
                                                        ? "bg-green-500 "
                                                        : "bg-red-500 "
                                                } me-2`}
                                            ></div>{" "}
                                            {res.isOnline == "true"
                                                ? "Online"
                                                : "Offline"}
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="flex items-center justify-center w-4 h-4 text-center text-medium p-3 font-bold text-blue-800 bg-blue-200 rounded">
                                            10
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="flex items-center justify-center w-4 h-4 text-center text-medium p-3 font-bold text-blue-800 bg-blue-200 rounded">
                                            10
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <button
                                            onClick={()=>router.visit(`/admin/it/${res.id}`)}
                                            type="button"
                                            class="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2"
                                        >
                                            View Assigned Tickets
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
