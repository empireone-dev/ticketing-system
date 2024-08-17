import { ExclamationTriangleIcon, TicketIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import TicketAddSection from "./ticket-add-section";
import { useSelector } from "react-redux";
import moment from "moment";
import { router } from "@inertiajs/react";
import Table from "@/app/components/table";
import Pagination from "@/app/components/pagination";
import { UserIcon } from "@heroicons/react/24/outline";

export default function TicketsTableSection() {
    const { tickets } = useSelector((state) => state.tickets);
    const [dataChecked, setDataChecked] = useState([]);
    const columns = [
        {
            title: "Name of Requestor",
            key: "name",
        },
        {
            title: "Ticket No.",
            key: "ticket_id",
        },
        {
            title: "Assigned I.T Personnel",
            key: "assigned_to",
        },
        {
            title: "Status",
            key: "status",
        },
        {
            title: "Date Filed",
            key: "created_at",
        },
        {
            title: "Action",
            key: "action",
        },
    ];
    const data = tickets?.data.map((res) => ({
        ...res,
        name: res?.user?.name ?? "",
        assigned_to: res?.assigned_to?.name ?? "",
        created_at: moment(res.created_at).format("LLL"),
        status: (
            <>
                {res.isUrgent && (
                    <div class="bg-yellow-600 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border-gray-500">
                         <UserIcon className="w-4 h-4 mr-1" /> {res.status}
                    </div>
                )}

                {res.isUrgent == "true" && (
                 <div className="bg-red-600 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border border-transparent animate-border-glow">
                        <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                        Urgent
                    </div>
                )}
            </>
        ),
        action: (
            <div className="flex gap-4">
                <button
                    onClick={() =>
                        router.visit("/admin/tickets/" + res.id + "/details")
                    }
                    type="button"
                    class="text-white bg-[#2557D6] gap-2 hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-1.5 text-center inline-flex items-center"
                >
                    <TicketIcon className="size-5 " />
                    View Ticket
                </button>
            </div>
        ),
    }));
    return (
        <>
            <div className="flex flex-col items-center justify-between h-[85vh] w-full">
                <Table
                    setDataChecked={setDataChecked}
                    dataChecked={dataChecked}
                    columns={columns}
                    data={data}
                    isCheckbox={true}
                />
                <Pagination data={tickets} />
            </div>
        </>
    );
}
