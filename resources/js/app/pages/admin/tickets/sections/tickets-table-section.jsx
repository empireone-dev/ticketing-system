import { ExclamationTriangleIcon, TicketIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { router } from "@inertiajs/react";
import Table from "@/app/components/table";
import {
    ArrowDownOnSquareIcon,
    CheckIcon,
    UserIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { FieldTimeOutlined } from "@ant-design/icons";
import { Pagination, Select } from "antd";
import TicketsSearchSection from "./tickets-search-section";
import TicketsFilterByDate from "./tickets-filter-by-date";

export default function TicketsTableSection() {
    const { tickets } = useSelector((state) => state.tickets);
    const { categories } = useSelector((state) => state.category);
    const { users } = useSelector((state) => state.it);

    const [dataChecked, setDataChecked] = useState([]);
    const url = window.location.pathname + window.location.search;

    const urls = new URL(window.location.href);
    const searchParams = new URLSearchParams(urls.search);
    const pages = searchParams.get("page");
    const category_id = searchParams.get("category_id") || null;
    const assigned_to = searchParams.get("assigned_to") || null;

    // Function to handle category filter
    function search_category(value) {
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set("category_id", value || "null");
        router.visit(window.location.pathname + "?" + searchParams.toString());
    }

    // Safely prepare options for the Select components
    const categoryOptions = Array.isArray(categories?.data)
        ? categories.data.map((category) => ({
              label: category.name,
              value: category.id,
          }))
        : [];

    // Safely retrieve the selected category
    const category = Array.isArray(categories?.data)
        ? categories.data.find((res) => res.id == category_id)
        : null;

    console.log("Categories:", categories);

    // Define table columns
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
            title: (
                <div className="flex gap-3 items-center justify-center">
                    <Select
                        allowClear
                        className="w-40 mr-4"
                        showSearch
                        placeholder="I.T Personnel"
                        optionFilterProp="label"
                        defaultValue={assigned_to || null}
                        onChange={(e) =>
                            router.visit(
                                window.location.pathname +
                                    "?page=1" +
                                    "&assigned_to=" +
                                    e
                            )
                        }
                        options={[
                            { value: "", label: "SCIT Department" }, // Default option
                            ...(Array.isArray(users)
                                ? users.map((res) => ({
                                      value: res?.id,
                                      label: res?.name,
                                  }))
                                : []),
                        ]}
                    />
                </div>
            ),
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
            title: (
                <div className="flex gap-3 items-center justify-center">
                    <Select
                        allowClear
                        className="w-36 mr-4"
                        showSearch
                        placeholder="Category"
                        optionFilterProp="label"
                        defaultValue={category?.name ?? null}
                        onChange={search_category}
                        options={categoryOptions}
                    />
                </div>
            ),
            key: "category_id",
        },
    ];

    // Prepare table data
    const data = Array.isArray(tickets?.data)
        ? tickets.data.map((res) => ({
              ...res,
              ticket_id: (
                  <button
                      onClick={() =>
                          router.visit("/admin/tickets/" + res.id + "/details")
                      }
                      className="underline"
                  >
                      {res.ticket_id}
                  </button>
              ),
              name: res?.user?.name ?? "",
              assigned_to: res?.assigned_to?.name ?? "",
              category_id: res?.category?.name ?? "",
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
             
          }))
        : [];

    const page = parseInt(searchParams.get("page"), 10) || 1;
    const currentPage = page;

    const onChangePaginate = (page) => {
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set("page", page);
        searchParams.set("assigned_to", assigned_to || "");

        const newUrl = window.location.pathname + "?" + searchParams.toString();
        router.visit(newUrl);
    };

    const pageSize = 10;

    return (
        <>
            <div className="flex items-center justify-between">
                <TicketsSearchSection />
                <TicketsFilterByDate />
            </div>

            <div className="flex flex-col items-center justify-between h-[85vh] w-full">
                <Table
                    pagination={false}
                    setDataChecked={setDataChecked}
                    dataChecked={dataChecked}
                    columns={columns}
                    data={data}
                    isCheckbox={true}
                    dataSource={tickets?.data || []}
                />
                <div className="w-full mt-3.5">
                    {tickets?.total > 0
                        ? `Showing ${
                              (currentPage - 1) * pageSize + 1
                          } to ${Math.min(
                              currentPage * pageSize,
                              tickets.total
                          )} of ${tickets.total} entries`
                        : "No entries available"}
                </div>
                <Pagination
                    onChange={onChangePaginate}
                    current={currentPage}
                    total={tickets?.total || 0}
                    pageSize={pageSize}
                    showSizeChanger={false}
                />
            </div>
        </>
    );
}
