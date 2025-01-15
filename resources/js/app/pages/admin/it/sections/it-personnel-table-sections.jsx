import { ExclamationTriangleIcon, TicketIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { router } from "@inertiajs/react";
import Table from "@/app/components/table";
import Pagination from "@/app/components/pagination";

export default function ItPersonnelTableSection() {
    const { users } = useSelector((state) => state.it);
    const [dataChecked, setDataChecked] = useState([]);
    console.log("users", users);
    const columns = [
        {
            title: "Name",
            key: "name",
        },
        {
            title: "Position",
            key: "position",
        },
        {
            title: "Status",
            key: "status",
        },
        {
            title: "Assigned",
            key: "assigned_to",
        },
        {
            title: "Pending",
            key: "pending",
        },
        {
            title: "Declined",
            key: "declined",
        },
        {
            title: "Closed",
            key: "closed",
        },
        {
            title: "Action",
            key: "action",
        },
    ];
    const data = users.map((res) => ({
        ...res,
        name: res?.name ?? "",
        status: (
            <>
                <div class="flex items-center">
                    <div
                        class={`h-2.5 w-2.5 rounded-full ${
                            res.isOnline == "true"
                                ? "bg-green-500 "
                                : "bg-red-500 "
                        } me-2`}
                    ></div>{" "}
                    {res.isOnline == "true" ? "Online" : "Offline"}
                </div>
            </>
        ),
        assigned_to: res.assigned_count,
        closed: res.closed_count,
        pending: res.pending_count,
        declined: res.declined_count,
        action: (
            <div className="flex gap-4">
                <button
                    onClick={() => router.visit(`/admin/it/${res.id}`)}
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
                {/* <Pagination data={users} /> */}
            </div>
        </>
    );
}
