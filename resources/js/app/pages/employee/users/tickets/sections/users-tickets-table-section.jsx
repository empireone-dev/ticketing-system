import { ExclamationTriangleIcon, TicketIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { router } from "@inertiajs/react";
import Table from "@/app/components/table";
import Pagination from "@/app/components/pagination";
import {
    ArrowDownOnSquareIcon,
    CheckIcon,
    UserIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { FieldTimeOutlined } from "@ant-design/icons";

export default function UsersTicketsTableSection() {
    const { tickets } = useSelector((state) => state.it);
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
    ];
    const data = tickets?.data.map((res) => ({
        ...res,
        ticket_id: (
            <button
                onClick={() =>
                    router.visit(
                        "/employee/users/tickets/" + res.id + "/details"
                    )
                }
                className="underline"
            >
                {res.ticket_id}
            </button>
        ),
        name: res?.user?.name ?? "",
        assigned_to: res?.assigned_to?.name ?? "",
        created_at: moment(res.created_at).format("LLL"),
        status: (
            <>
                {res.status === "Assigned" && (
                    <div className="bg-blue-600 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border-gray-500">
                        <ArrowDownOnSquareIcon className="w-4 h-4" />
                        &nbsp;Assigned
                    </div>
                )}

                {res.status === "Pending" && (
                    <div className="bg-yellow-600 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border-gray-500">
                        <FieldTimeOutlined />
                        &nbsp;Pending
                    </div>
                )}

                {res.status === "Closed" && (
                    <div className="bg-green-600 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border-gray-500">
                        <CheckIcon className="w-4 h-4" />
                        &nbsp;Closed
                    </div>
                )}

                {res.status === "Declined" && (
                    <div className="bg-red-600 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border-gray-500">
                        <XMarkIcon className="w-4 h-4" />
                        &nbsp;Declined
                    </div>
                )}
                {res.isUrgent === "Low Priority" && (
                    <div className="bg-green-600 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border border-transparent animate-border-glow">
                        <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                        {res.isUrgent}
                    </div>
                )}
                {res.isUrgent === "Medium Priority" && (
                    <div className="bg-orange-600 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border border-transparent animate-border-glow">
                        <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                        {res.isUrgent}
                    </div>
                )}
                {res.isUrgent === "High Priority" && (
                    <div className="bg-red-600 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border border-transparent animate-border-glow">
                        <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                        {res.isUrgent}
                    </div>
                )}
            </>
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
