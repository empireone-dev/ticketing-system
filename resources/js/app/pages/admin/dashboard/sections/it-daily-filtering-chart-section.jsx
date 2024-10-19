import React, { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { useSelector } from 'react-redux';

export default function ITDailyFilteringChartSection({ data }) {
    const [hovered, setHovered] = useState(null);
    const { dashboard } = useSelector((state) => state.admin);

    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];

    // Find today's data entry
    const todayData = data?.daily.find(item => item.title === today);

    // Get count for today or default to 0
    const todayCount = todayData ? todayData.count : 0;

    const handleSegmentClick = (event, segmentIndex, data) => {
        console.log("Clicked segment:", segmentIndex);
    };

    console.log('datass', data);

    return (
        <div>
            <div className='mb-2'>
                Daily Tickets: {todayCount}
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
                        value: todayCount, // Use today's count
                        color: "#e86100",
                    },
                    {
                        title: "Closed",
                        value: todayCount, // Use today's count
                        color: "#009e60",
                    },
                    {
                        title: "Assigned",
                        value: 0,
                        color: "#4299E1",
                    },
                    {
                        title: "Pending",
                        value: todayCount, // Use today's count
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
