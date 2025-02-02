import React, { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { useSelector } from 'react-redux';

export default function ITWeeklyFilteringChartSection({ data }) {
    const [hovered, setHovered] = useState(null);
    const { dashboard } = useSelector((state) => state.admin);

    // Get the current date
    const today = new Date();

    // Get the start of the week (Monday) and end of the week (Sunday)
    const firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 1));
    const lastDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 7));

    // Convert to YYYY-MM-DD format
    const formatDate = (date) => date.toISOString().split('T')[0];

    // Get all dates for the current week
    const weekDates = [];
    for (let d = new Date(firstDayOfWeek); d <= lastDayOfWeek; d.setDate(d.getDate() + 1)) {
        weekDates.push(formatDate(new Date(d)));
    }

    // Sum counts for the week
    const weekCount = data?.daily.reduce((total, item) => {
        if (weekDates.includes(item.title)) {
            return total + item.count;
        }
        return total;
    }, 0) ?? 0;

    const handleSegmentClick = (event, segmentIndex, data) => {
        console.log("Clicked segment:", segmentIndex);
    };

    console.log('Weekly Data:', data);

    return (
        <div>
            <div className='mb-2'>
                Weekly Tickets: {weekCount}
            </div>
            {/* <div className="flex w-full items-start justify-between">
                <div className="flex flex-1 flex-col gap-0.5 text-md">
                    <div className="flex items-center text-yellow-400">
                        <div className="ml-1">Pending:</div>
                        <div className="ml-1 text-md">

                        </div>
                    </div>
                    <div className="flex text-[#e86100] items-center">
                        <div className="ml-1">Urgent:</div>
                        <div className="ml-1 text-md">

                        </div>
                    </div>
                    <div className="flex text-blue-400 items-center">
                        <div className="ml-1">Assigned:</div>
                        <div className="ml-1 text-md">

                        </div>
                    </div>
                </div>
                <div className="flex flex-1 flex-col gap-0.5 text-md">
                    <div className="flex text-green-600 items-center">
                        <div className="ml-1">Closed:</div>
                        <div className="ml-1 text-md">

                        </div>
                    </div>
                    <div className="flex text-[#ff0000] items-center">
                        <div className="ml-1">Declined:</div>
                        <div className="ml-1 text-md">

                        </div>
                    </div>
                </div>
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
                        value: weekCount,
                        color: "#e86100",
                    },
                    {
                        title: "Closed",
                        value: weekCount,
                        color: "#009e60",
                    },
                    {
                        title: "Assigned",
                        value: 0,
                        color: "#4299E1",
                    },
                    {
                        title: "Pending",
                        value: weekCount,
                        color: "#FFFF00",
                    },
                    {
                        title: "Declined",
                        value: 0,
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
            /> */}
        </div>
    );
}
