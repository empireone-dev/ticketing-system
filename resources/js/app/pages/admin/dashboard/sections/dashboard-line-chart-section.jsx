import LineChart from "@/app/components/line-chart";
import React from "react";

export default function DashboardLineChartSection({ data }) {
    return (
        <div className="flex w-full">
            {/* <div className="flex-1 w-full">
                <LineChart dataValue={data?.daily} title="Daily Stats Reports"/>
            </div>
            <div className="flex-1 w-full">
                <LineChart dataValue={data?.weekly} title="Weekly Stats Reports"/>
            </div>
            <div className="flex-1 w-full">
                <LineChart dataValue={data?.monthly} title="Monthly Stats Reports"/>
            </div> */}
            <div className="w-2/3">
                <LineChart
                    dataValue={data?.daily}
                    title="Daily Stats Reports"
                />
            </div>
            <div className="w-1/3">
                <div className="flex flex-col">
                    <LineChart
                        dataValue={data?.weekly}
                        title="Weekly Stats Reports"
                    />
                    <LineChart
                        dataValue={data?.monthly}
                        title="Monthly Stats Reports"
                    />
                </div>
            </div>
        </div>
    );
}
