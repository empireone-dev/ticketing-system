import Sidebar from "@/app/components/sidebar";
import React from "react";
import {
    BarsArrowDownIcon,
    HomeIcon,
    TicketIcon,
    UserGroupIcon,
    UsersIcon,
} from "@heroicons/react/24/outline";

export default function UsersSidebarSection() {
  const path = window.location.pathname.split("/")[3];
  const navigation = [
      {
          name: "Dashboard",
          href: "/employee/users/dashboard",
          icon: HomeIcon,
          current: path == "dashboard",
      },
      {
          name: "My Tickets",
          href: "/employee/users/tickets?page=1",
          icon: TicketIcon,
          current: path == "tickets",
      },
  ];
  return (
    <Sidebar navigation={navigation} />
  )
}
