import Table from "@/app/components/table";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function UsersDashboardTableSection() {
    const { users } = useSelector((state) => state.it);
    const [dataChecked, setDataChecked] = useState([]);

    // Ensure users.data is an array before mapping over it
    const data = Array.isArray(users?.data) ? users.data.map((res) => ({
        ...res,
        // status: (
        //     <div className="flex gap-4">
        //         <div
        //             className={`h-2.5 w-2.5 rounded-full ${
        //                 res.isOnline === "true" ? "bg-green-500" : "bg-red-500"
        //             } me-2`}
        //         ></div>
        //         {res.isOnline === "true" ? "Online" : "Offline"}
        //     </div>
        // ),
        // action: (
        //     <div className="flex gap-4">
        //         {/* Uncomment if actions are needed */}
        //         {/* <EditTnventorySection datas={res} /> */}
        //         {/* <DeleteInventorySection datas={res} /> */}
        //     </div>
        // ),
    })) : []; // Default to an empty array if users.data is not an array

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
            title: "Assigned Tickets",
            key: "assigned_count",
        },
        {
            title: "Closed Tickets",
            key: "closed_count",
        },
        // You can uncomment the 'Status' and 'Action' columns if needed
        // {
        //     title: "Status",
        //     key: "status",
        // },
        // {
        //     title: "Action",
        //     key: "action",
        // },
    ];

    console.log('users.data', users?.data); // To check the data structure

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
