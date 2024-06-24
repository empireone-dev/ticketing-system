import { PieChartFilled, PoweroffOutlined } from "@ant-design/icons";
import {
    BarsArrowDownIcon,
    ChatBubbleLeftEllipsisIcon,
    TicketIcon,
    UserGroupIcon,
} from "@heroicons/react/24/solid";
import { Link } from "@inertiajs/react";
import React from "react";

export default function AdminSidebarComponents() {
    const active = window.location.pathname.split("/")[2];
    return (
        <aside
            id="logo-sidebar"
            className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-slate-800 border-r border-gray-900 sm:translate-x-0"
            aria-label="Sidebar"
        >
            <div className="h-full px-3 pb-4 overflow-y-auto bg-slate-800">
                <ul className="space-y-2 font-medium">
                    <li>
                        <Link
                            href="/admin/dashboard"
                            className={`${
                                active == "dashboard"
                                    ? "bg-white text-gray-900"
                                    : "text-white hover:bg-gray-500 hover:text-gray-900"
                            } flex items-center p-1  rounded-lg group`}
                        >
                            <PieChartFilled className="text-2xl text-gray-400" />
                            <span className="ms-3">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/admin/it"
                            className={`${
                                active == "it"
                                    ? "bg-white text-gray-900"
                                    : "text-white  hover:bg-gray-500 hover:text-gray-900"
                            } flex items-center p-1  rounded-lg group`}
                        >
                            <UserGroupIcon className="h-7 text-gray-400" />
                            <span className="flex-1 ms-2 whitespace-nowrap">
                                I.T Personnel
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/admin/tickets"
                            className={`${
                                active == "tickets"
                                    ? "bg-white text-gray-900"
                                    : "text-white hover:bg-gray-500 hover:text-gray-900"
                            } flex items-center p-1  rounded-lg group`}
                        >
                            <TicketIcon className="h-7 text-gray-400" />
                            <span className="flex-1 ms-2 whitespace-nowrap">
                                Tickets Section
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/admin/category"
                            className={`${
                                active == "category"
                                    ? "bg-white text-gray-900"
                                    : "text-white hover:bg-gray-500 hover:text-gray-900"
                            } flex items-center p-1  rounded-lg group`}
                        >
                            <BarsArrowDownIcon className="h-7 text-gray-400" />
                            <span className="flex-1 ms-2 whitespace-nowrap">
                                Category Section
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/admin/feedback"
                            className={`${
                                active == "feedback"
                                    ? "bg-white text-gray-900"
                                    : "text-white hover:bg-gray-500 hover:text-gray-900"
                            } flex items-center p-1  rounded-lg group`}
                        >
                            <ChatBubbleLeftEllipsisIcon className="h-7 text-gray-400" />
                            <span className="flex-1 ms-2 whitespace-nowrap">
                                Feedback Section
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            className="flex items-center p-2 text-white rounded-lg hover:bg-gray-500 hover:text-gray-900 group"
                        >
                            <PoweroffOutlined className="text-xl text-gray-400" />
                            <span className="flex-1 ms-3 whitespace-nowrap">
                                Log out
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
