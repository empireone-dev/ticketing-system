import React, { useEffect, useState } from "react";
import DashboardCardSection from "./dashboard-card-section";
import { ChartPieIcon, TicketIcon } from "@heroicons/react/24/solid";
import { PieChart } from "react-minimal-pie-chart";
import { useSelector } from "react-redux";
import DashboardLineChartSection from "./dashboard-line-chart-section";
import DashboardITFilteringSection from "./dashboard-it-filtering-section";
import store from "@/app/store/store";
import { get_category_thunk } from "../../category/redux/category-thunk";
import CategoryChartSection from "./category-chart-section";

export default function DashboardSection() {
    const [hovered, setHovered] = useState(null);
    const { dashboard } = useSelector((state) => state.admin);

    const handleSegmentClick = (event, segmentIndex, data) => {
        console.log("Clicked segment:", segmentIndex);
    };

    const [selectedData, setSelectedData] = useState(null);

    const handleSelect = (value) => {
        const parsedData = JSON.parse(value);
        setSelectedData(parsedData);
    };

    useEffect(() => {
        store.dispatch(get_category_thunk())
    }, []);

    console.log("dashboardss", dashboard);
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-wrap gap-7 rounded-md">
                <DashboardCardSection
                    icon={<TicketIcon className="h-12 text-white" />}
                    title={`Pending Tickets: ${dashboard?.pending ?? 0}`}
                    href="Go To Pending Tickets Section"
                    link="/admin/tickets?page=1&search=Pending"
                />
                <DashboardCardSection
                    icon={<TicketIcon className="h-12 text-white" />}
                    title={`Urgent Tickets: ${dashboard?.urgent ?? 0}`}
                    href="Go To Urgent Tickets Section"
                    link="/admin/tickets?page=1&search=isUrgent"
                />
                <DashboardCardSection
                    icon={<TicketIcon className="h-12 text-white" />}
                    title={`Ongoing/Assigned Tickets: ${dashboard?.assigned ?? 0}`}
                    href="Go To Ongoing/Assigned Tickets Section"
                    link="/admin/tickets?page=1&search=Assigned"
                />
                <DashboardCardSection
                    icon={<TicketIcon className="h-12 text-white" />}
                    title={`Closed Tickets: ${dashboard?.closed ?? 0}`}
                    href="Go To Closed Tickets Section"
                    link="/admin/tickets?page=1&search=Closed"
                />
            </div>
            <div>
                <center>
                    <div className="flex flex-1 gap-9 ">
                        <div className=" p-3 rounded-lg w-full shadow-2xl">
                            <div className="flex text-3xl font-bold mb-3 p-3">
                                <ChartPieIcon className="size-10" />
                                Tickets Status Inquiry Chart
                            </div>

                            <div className="flex w-full items-start justify-center">
                                <div className="flex flex-1 flex-col gap-0.5 text-md">
                                    <div className="flex items-center text-yellow-400">
                                        <div className="ml-1">Pending:</div>
                                        <div className="ml-1 text-md">
                                            {dashboard?.pending ?? 0}
                                        </div>
                                    </div>
                                    <div className="flex text-[#e86100] items-center">
                                        <div className="ml-1">Urgent:</div>
                                        <div className="ml-1 text-md">
                                            {dashboard?.urgent ?? 0}
                                        </div>
                                    </div>
                                    <div className="flex text-blue-400 items-center">
                                        <div className="ml-1">Assigned:</div>
                                        <div className="ml-1 text-md">
                                            {dashboard?.assigned ?? 0}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col gap-0.5 text-md">
                                    <div className="flex text-green-600 items-center">
                                        <div className="ml-1">Closed:</div>
                                        <div className="ml-1 text-md">
                                            {dashboard?.closed ?? 0}
                                        </div>
                                    </div>
                                    <div className="flex text-[#ff0000] items-center">
                                        <div className="ml-1">Declined:</div>
                                        <div className=" ml-1 text-md">
                                            {dashboard?.declined ?? 0}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='mb-2 mt-3 flex flex-1 justify-start items-start'>
                                Total Tickets:{dashboard?.total ?? 0}
                            </div>
                            <PieChart
                                style={{ height: "300px" }}
                                lineWidth={55}
                                animate
                                animationDuration={1000}
                                label={({ dataEntry }) =>
                                    `${Math.round(dataEntry.percentage)}%`
                                }
                                labelStyle={(index) => ({
                                    fill: "black",
                                    fontSize: "7px",
                                    fontFamily: "sans-serif",
                                    transform:
                                        index === hovered
                                            ? "scale(1.1)"
                                            : "scale(1)",
                                    transition: "transform 0.3s",
                                })}
                                labelPosition={74}
                                paddingAngle={1.8}
                                onMouseOver={(event, segmentIndex, data) => {
                                    setHovered(segmentIndex);
                                }}
                                onMouseOut={() => {
                                    setHovered(null);
                                }}
                                onClick={(event, segmentIndex, data) => {
                                    handleSegmentClick(event, segmentIndex, data);
                                }}
                                data={[
                                    {
                                        title: "Urgent",
                                        value: dashboard?.urgent ?? 0,
                                        color: "#e86100",
                                    },
                                    {
                                        title: "Closed",
                                        value: dashboard?.closed ?? 0,
                                        color: "#009e60",
                                    },
                                    {
                                        title: "Assigned",
                                        value: dashboard?.assigned ?? 0,
                                        color: "#4299E1",
                                    },
                                    {
                                        title: "Pending",
                                        value: dashboard?.pending ?? 0,
                                        color: "#FFFF00",
                                    },
                                    {
                                        title: "Declined",
                                        value: dashboard?.declined ?? 0,
                                        color: "#ff0000",
                                    },
                                ].filter(entry => entry.value > 0)}
                                segmentsStyle={(index) => ({
                                    transition: "transform 0.3s",
                                    transform:
                                        index === hovered
                                            ? "scale(1.1)"
                                            : "scale(1)",
                                })}
                            />

                        </div>
                        <div className="w-full">
                            <CategoryChartSection />
                        </div>
                    </div>
                </center>
                <div className="mb-10">
                    <div className="flex text-3xl items-center justify-center text-gray-900 font-bold mb-3 mt-6 p-3">
                        <ChartPieIcon className="size-10" />
                        IT Personnel Tickets Data Inquiry
                    </div>
                    <select className="w-full flex items-center justify-center " onChange={(e) => handleSelect(e.target.value)}>
                        <option >Select an IT Personnel</option>
                        {dashboard?.data?.map(
                            (res, index) => (
                                <option key={index} value={JSON.stringify(res)}>
                                    {res?.name}
                                </option>
                            ))}
                    </select>
                    <div>
                        {selectedData && (
                            <>
                                <DashboardLineChartSection data={selectedData} />
                                <DashboardITFilteringSection data={selectedData} />
                            </>
                        )}
                    </div>
                </div>



                {/* <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-3/4">
                    <div class="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 px-4 bg-white ">
                        <div>
                            <h3 className='text-gray-900 font-bold text-3xl inline-flex items-center'><img src="/images/Final I.T Logo.png" class="h-12 me-2" alt="FlowBite Logo" /> I.T Personnel</h3>
                        </div>
                        <label for="table-search" class="sr-only">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="text" id="table-search-users" class="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500     " placeholder="Search for users" />
                        </div>
                    </div>
                    <DashboardTableSection />
                </div> */}
            </div>
        </div>
    );
}
