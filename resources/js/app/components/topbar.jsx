import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Bars3Icon, BellIcon } from "@heroicons/react/24/outline";
import {
    ChevronDownIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { setSidebarOpen } from "@/app/redux/app-slice";
import { Link, router } from "@inertiajs/react";
import { change_site_service } from "../services/users-service";
import store from "../store/store";
import { get_user_thunk } from "../redux/app-thunk";

export default function Topbar() {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.app);
    const [search, setSearch] = useState('')
    const userNavigation = [
        { name: "Your profile", href: "#" },
        { name: "Sign out", href: "#" },
    ];

    function searchData(params) {

    }
    async function change_site(e) {
        try {
            await change_site_service({
                ...user,
                site_id: e.target.value
            })
            // await store.dispatch(get_user_thunk(user));
            router.visit(window.location.href)
        } catch (error) {

        }
    }
    return (
        <>
            <div className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                <button
                    type="button"
                    onClick={() => dispatch(setSidebarOpen())}
                    className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                >
                    <span className="sr-only">Open sidebar</span>
                    <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                </button>

                {/* Separator */}
                <div
                    aria-hidden="true"
                    className="h-6 w-px bg-gray-200 lg:hidden"
                />

                <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                    <form
                        action="#"
                        onSubmit={searchData}
                        className="relative flex flex-1"
                    >
                        <label htmlFor="search-field" className="sr-only">
                            Search
                        </label>
                        <MagnifyingGlassIcon
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                        />
                        <input
                            onChange={(e) => setSearch(e.target.value)}
                            id="search-field"
                            name="search"
                            type="search"
                            placeholder="Search..."
                            className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                        />
                    </form>
                    <div className="flex items-center gap-x-4 lg:gap-x-6 rounded-md">
                        {/* {
                            user.account_type == 1
                            // && user.site_id == 1 
                            && <select
                                onChange={change_site}
                                value={user.site_id}
                                className="rounded-md"
                            >
                                <option value="1">San Carlos Site</option>
                                <option value="2">Carcar Site</option>
                            </select>
                        } */}

                        <button
                            type="button"
                            className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                        >
                            <span className="sr-only">View notifications</span>
                            <BellIcon aria-hidden="true" className="h-6 w-6" />
                        </button>

                        {/* Separator */}
                        <div
                            aria-hidden="true"
                            className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
                        />

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative">
                            <MenuButton className="-m-1.5 flex items-center p-1.5">
                                <span className="sr-only">Open user menu</span>
                                <img
                                    alt=""
                                    src="/images/user.png"
                                    // alt="gray user profile icon png @transparentpng.com"
                                    className="h-8 w-8 rounded-full bg-gray-50"
                                />
                                <span className="hidden lg:flex lg:items-center">
                                    <span
                                        aria-hidden="true"
                                        className="ml-4 text-sm font-semibold leading-6 text-gray-900 capitalize"
                                    >
                                        {user.name}
                                    </span>
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className="ml-2 h-5 w-5 text-gray-400"
                                    />
                                </span>
                            </MenuButton>
                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <MenuItem>
                                    <Link
                                        method="post"
                                        as="button"
                                        href={route("logout")}
                                        className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
                                    >
                                        Logout
                                    </Link>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </div>
        </>
    );
}
