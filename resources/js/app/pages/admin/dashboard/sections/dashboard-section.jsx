import React, { useState } from 'react';
import DashboardCardSection from './dashboard-card-section';
import { ChartPieIcon, TicketIcon } from '@heroicons/react/24/solid';
import DashboardTableSection from './dashboard-table-section';
import { PieChart } from 'react-minimal-pie-chart';

export default function DashboardSection() {
    const [hovered, setHovered] = useState(null);

    const handleSegmentClick = (event, segmentIndex, data) => {
        console.log('Clicked segment:', segmentIndex);
    };

    return (
        <div className='flex flex-col gap-8'>
            <div className='flex flex-wrap gap-7 rounded-md'>
                <DashboardCardSection
                    icon={<TicketIcon className='h-12 text-white' />}
                    title="Pending Tickets: 0"
                    href="Go To Pending Tickets Section"
                />
                <DashboardCardSection
                    icon={<TicketIcon className='h-12 text-white' />}
                    title="Assigned Tickets: 0"
                    href="Go To Assigned Tickets Section"
                />
                <DashboardCardSection
                    icon={<TicketIcon className='h-12 text-white' />}
                    title="Ongoing Tickets: 0"
                    href="Go To Ongoing Tickets Section"
                />
                <DashboardCardSection
                    icon={<TicketIcon className='h-12 text-white' />}
                    title="Closed Tickets: 0"
                    href="Go To Closed Tickets Section"
                />
            </div>
            <div className='flex  gap-7 rounded-md'>

                <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-3/4">
                    <div class="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 px-4 bg-slate-700 ">
                        <div>
                            <h3 className='text-gray-300 font-bold text-3xl inline-flex items-center'><img src="/images/Final I.T Logo.png" class="h-12 me-2" alt="FlowBite Logo" /> I.T Personnel</h3>
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
                </div>
                <div className='bg-slate-700 shadow-lg p-3 rounded-lg'>
                    <div className='flex text-3xl text-gray-300 font-bold mb-3 p-3'>
                        <ChartPieIcon className='size-10' />
                        Inquiry Chart
                    </div>
                    <PieChart
                        style={{ height: '300px' }}
                        lineWidth={55}
                        animate
                        animationDuration={1000}
                        label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
                        labelStyle={(index) => ({
                            fill: 'black',
                            fontSize: '7px',
                            fontFamily: 'sans-serif',
                            transform: index === hovered ? 'scale(1.1)' : 'scale(1)', 
                            transition: 'transform 0.3s' 
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
                            { title: 'One', value: 10, color: '#FF6B6B' },
                            { title: 'Two', value: 15, color: '#48BB78' },
                            { title: 'Three', value: 20, color: '#4299E1' },
                            { title: 'Four', value: 23, color: '#FFFF00' },
                            { title: 'Five', value: 20, color: '#FF00FF' },
                        ]}
                        segmentsStyle={(index) => ({
                            transition: 'transform 0.3s',
                            transform: index === hovered ? 'scale(1.1)' : 'scale(1)'
                        })}
                    />

                </div>
            </div>
        </div>
    );
}
