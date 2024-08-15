import { ExclamationTriangleIcon, TicketIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import CategoryAddSection from "./category-add-section";
import { useSelector } from "react-redux";
import moment from "moment";
import { router } from "@inertiajs/react";
import Table from "@/app/components/table";
import Pagination from "@/app/components/pagination";

export default function CategoryTableSection() {
    const { categories } = useSelector((state) => state.category);

    const [dataChecked, setDataChecked] = useState([]);
    const columns = [
        {
            title: "Name of Category",
            key: "name",
        },
        {
            title: "Pending Tickets",
            key: "pending",
        },
        {
            title: "Assigned Tickets",
            key: "assigned",
        },
        {
            title: "Ongoing Tickets",
            key: "ongoing",
        },
        {
            title: "Closed Tickets",
            key: "closed",
        },
        {
            title: "Total Tickets",
            key: "total",
        },
        {
            title: "Action",
            key: "action",
        },
    ];
    const newData = Object.entries(categories.data).map((res) => ({
        ...res[1],
    }));
    const data = newData
        ?.map((res) => ({
            ...res,
            action: (
                <div className="flex gap-4">
                    <button
                        onClick={() =>
                            router.visit(
                                "/admin/category/" + res.id + "?page=1"
                            )
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
                <Pagination data={categories} />
            </div>
        </>
    );
}
