import Sidebar from "@/app/components/sidebar";
import React from "react";
import {
    BarsArrowDownIcon,
    HomeIcon,
    TicketIcon,
    UserGroupIcon,
    UsersIcon,
} from "@heroicons/react/24/outline";

export default function AdministratorSidebarSection() {
    const path = window.location.pathname.split("/")[2];
    const navigation = [
        {
            name: "Dashboard",
            href: "/admin/dashboard",
            icon: HomeIcon,
            current: path == "dashboard",
        },
        {
            name: "Tickets",
            href: "/admin/tickets?page=1",
            icon: TicketIcon,
            current: path == "tickets",
        },
        {
            name: "I.T Personnel",
            href: "/admin/it?page=1",
            icon: UserGroupIcon,
            current: path == "it",
        },
        {
            name: "Category Section",
            href: "/admin/category?page=1",
            icon: BarsArrowDownIcon,
            current: path == "category",
        },
    ];
    return (
        <>
            <Sidebar navigation={navigation} />
        </>
    );
}
