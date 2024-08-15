import Table from "@/app/components/table";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function ItDashboardTableSection() {
    const { users } = useSelector((state) => state.it);
    const [dataChecked, setDataChecked] = useState([]);
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
            title: "Assigned Tickets",
            key: "model",
        },
        {
            title: "Closed Tickets",
            key: "serial",
        },
        {
            title: "Action",
            key: "action",
        },
    ];
    const data = users.data.map((res) => ({
        ...res,
        status: (
            <div className="flex gap-4">
                <div
                    class={`h-2.5 w-2.5 rounded-full ${
                        res.isOnline == "true" ? "bg-green-500 " : "bg-red-500 "
                    } me-2`}
                ></div>{" "}
                {res.isOnline == "true" ? "Online" : "Offline"}
            </div>
        ),
        action: (
            <div className="flex gap-4">
                {/* <EditTnventorySection datas={res} /> */}ss
                {/* <DeleteInventorySection datas={res} /> */}
            </div>
        ),
    }));
    return (
        <div>
            <Table
                setDataChecked={setDataChecked}
                dataChecked={dataChecked}
                columns={columns}
                data={data}
                isCheckbox={true}
            />
        </div>
    );
}
