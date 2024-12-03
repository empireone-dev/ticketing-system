import { ExclamationTriangleIcon, TicketIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { router } from "@inertiajs/react";
import Table from "@/app/components/table";
import Pagination from "@/app/components/pagination";
import { ArrowDownOnSquareIcon, CheckIcon, UserIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { FieldTimeOutlined } from "@ant-design/icons";
import { Select } from "antd";

export default function TicketsTableSection() {
    const { tickets } = useSelector((state) => state.tickets);
    const { categories } = useSelector((state) => state.category);
    const [dataChecked, setDataChecked] = useState([]);

    const urls = new URL(window.location.href);
    const searchParams = new URLSearchParams(urls.search);
    const pages = searchParams.get('page');
    const category = searchParams.get('category');
    function search_category(value) {
        router.visit('?page=' + pages + '&category=' + (value || 'null'))
    }

    const options = categories?.data?.map((category) => ({
        label: category.name,
        value: category.value,
    }));

    console.log('categories', categories?.data)
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
            title: <div className="flex gap-3 items-center justify-center">
                {/* 
                Account
                <FilterOutlined /> */}
                <Select
                    allowClear
                    className="w-32 mr-4"
                    showSearch
                    placeholder="Category"
                    optionFilterProp="label"
                    value={category == 'null' ? null : category}
                    onChange={search_category}
                    // onSearch={onSearch}
                    options={options}
                />
            </div>,
            key: "category_id",
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
        category_id: res?.category?.name ?? "",
        created_at: moment(res.created_at).format("LLL"),
        status: (
            <>
                {/* {res.isUrgent && (
                <div className="bg-yellow-600 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border-gray-500">
                    <UserIcon className="w-4 h-4 mr-1" />{res.status}
                </div>
            )} */}

                {res.status === "Assigned" && (
                    <div className="bg-blue-600 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border-gray-500">
                        <ArrowDownOnSquareIcon className="w-4 h-4" />&nbsp;Assigned
                    </div>
                )}

                {res.status === "Pending" && (
                    <div className="bg-yellow-600 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border-gray-500">
                        <FieldTimeOutlined />&nbsp;Pending
                    </div>
                )}

                {res.status === "Closed" && (
                    <div className="bg-green-600 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border-gray-500">
                        <CheckIcon className="w-4 h-4" />&nbsp;Closed
                    </div>
                )}

                {res.status === "Declined" && (
                    <div className="bg-red-600 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border-gray-500">
                        <XMarkIcon className="w-4 h-4" />&nbsp;Declined
                    </div>
                )}
                {res.isUrgent === "true" && (
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
