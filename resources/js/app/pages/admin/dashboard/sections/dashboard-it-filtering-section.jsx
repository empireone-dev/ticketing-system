import { ChartPieIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import ITDailyFilteringChartSection from './it-daily-filtering-chart-section';
import ITMonthlyFilteringChartSection from './it-monthly-filtering-chart-section';
import ITWeeklyFilteringChartSection from './it-weekly-filtering-chart-section copy';

export default function DashboardITFilteringSection({ data }) {
    const [hovered, setHovered] = useState(null);
    const { dashboard } = useSelector((state) => state.admin);

    const handleSegmentClick = (event, segmentIndex, data) => {
        console.log("Clicked segment:", segmentIndex);
    };

    // console.log('data', data)
    return (
        <div>
            <div className=" p-3 rounded-lg w-full">
                <div className="flex text-3xl text-gray-900 font-bold mb-3 mt-4">
                    <ChartPieIcon className="size-10" />
                    Tickets Inquiry Chart
                </div>
                <div className="font-black text-xl mb-6">
                    IT Personnel: {data?.name}
                </div>
                <div className='flex flex-1 gap-2 w-full items-center justify-between'>
                    <ITDailyFilteringChartSection data={data} />
                    <ITWeeklyFilteringChartSection data={data} />
                    <ITMonthlyFilteringChartSection data={data} />
                </div>
            </div>
        </div>
    )
}
