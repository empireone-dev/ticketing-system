import { ArrowRightOutlined, CalendarOutlined } from '@ant-design/icons';
import { DatePicker } from 'antd';
import React, { useState } from 'react';

export default function TicketsFilterByDate() {
    const [startDate, setStartDate] = useState(null); // Use null for date object
    const [endDate, setEndDate] = useState(null); // Use null for date object
    const [isStartDatePickerVisible, setStartDatePickerVisible] = useState(false);
    const [isEndDatePickerVisible, setEndDatePickerVisible] = useState(false);

    const handleStartDateChange = (date) => {
        setStartDate(date);
        setStartDatePickerVisible(false); // Close the picker after selecting a date
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
        setEndDatePickerVisible(false); // Close the picker after selecting a date
    };

    return (
        <div className='flex flex-1 justify-end gap-2'>
            {/* Start Date Field */}
            <div className="relative flex items-center">
                <input
                    id="start-date"
                    type="text"
                    placeholder='Start Date'
                    value={startDate ? startDate.format('YYYY-MM-DD') : ''} // Format the date to display
                    onChange={(e) => setStartDate(e.target.value)}
                    onFocus={() => setStartDatePickerVisible(true)} // Show the picker when input is focused
                    className='h-12 w-full pl-10 pr-10 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                {/* Calendar Icon inside the input */}
                <CalendarOutlined
                    className="absolute left-3 top-8 text-gray-400 cursor-pointer"
                    onClick={() => setStartDatePickerVisible(true)} // Show date picker when icon is clicked
                />
                {isStartDatePickerVisible && (
                    <DatePicker
                        open={isStartDatePickerVisible}
                        onChange={handleStartDateChange}
                        value={startDate}
                        onClickOutside={() => setStartDatePickerVisible(false)} // Close picker when clicking outside
                    />
                )}
            </div>
            <div className='mt-7'>
                <ArrowRightOutlined />
            </div>
            <div className="relative flex items-center">
                <input
                    id="end-date"
                    type="text"
                    placeholder='End Date'
                    value={endDate ? endDate.format('YYYY-MM-DD') : ''} // Format the date to display
                    onChange={(e) => setEndDate(e.target.value)}
                    onFocus={() => setEndDatePickerVisible(true)} // Show the picker when input is focused
                    className='h-12 w-full pl-10 pr-10 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                {/* Calendar Icon inside the input */}
                <CalendarOutlined
                    className="absolute left-3 top-8 text-gray-400 cursor-pointer"
                    onClick={() => setEndDatePickerVisible(true)} // Show date picker when icon is clicked
                />
                {isEndDatePickerVisible && (
                    <DatePicker
                        open={isEndDatePickerVisible}
                        onChange={handleEndDateChange}
                        value={endDate}
                        onClickOutside={() => setEndDatePickerVisible(false)} // Close picker when clicking outside
                    />
                )}
            </div>
        </div>
    );
}
