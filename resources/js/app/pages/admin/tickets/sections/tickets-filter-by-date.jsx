import { ArrowRightOutlined, CalendarOutlined } from '@ant-design/icons';
import { CalendarIcon } from '@heroicons/react/24/outline';
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

    // Function to handle showing the start date picker
    const handleStartDateFocus = () => {
        setStartDatePickerVisible(true);
        setEndDatePickerVisible(false); // Close end date picker if it was open
    };

    // Function to handle showing the end date picker
    const handleEndDateFocus = () => {
        setEndDatePickerVisible(true);
        setStartDatePickerVisible(false); // Close start date picker if it was open
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
                    onFocus={handleStartDateFocus} // Show the picker when input is focused
                    className='h-12 w-full pl-10 pr-10 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                {/* Calendar Icon inside the input */}
                <CalendarIcon
                    className="absolute h-6 left-3 top-7 text-gray-400 cursor-pointer"
                    onClick={handleStartDateFocus} // Show date picker when icon is clicked
                />
                {isStartDatePickerVisible && (
                    <div className="absolute top-12 left-0 z-10">
                        <DatePicker
                            open={isStartDatePickerVisible}
                            onChange={handleStartDateChange}
                            value={startDate}
                            onClickOutside={() => setStartDatePickerVisible(false)} // Close picker when clicking outside
                        />
                    </div>
                )}
            </div>
            <div className='mt-7'>
                <ArrowRightOutlined />
            </div>
            {/* End Date Field */}
            <div className="relative flex items-center">
                <input
                    id="end-date"
                    type="text"
                    placeholder='End Date'
                    value={endDate ? endDate.format('YYYY-MM-DD') : ''} // Format the date to display
                    onChange={(e) => setEndDate(e.target.value)}
                    onFocus={handleEndDateFocus} // Show the picker when input is focused
                    className='h-12 w-full pl-10 pr-10 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                {/* Calendar Icon inside the input */}
                <CalendarIcon
                    className="absolute h-6 left-3 top-7 text-gray-400 cursor-pointer"
                    onClick={handleEndDateFocus} // Show date picker when icon is clicked
                />
                {isEndDatePickerVisible && (
                    <div className="absolute top-12 left-0 z-10">
                        <DatePicker
                            open={isEndDatePickerVisible}
                            onChange={handleEndDateChange}
                            value={endDate}
                            onClickOutside={() => setEndDatePickerVisible(false)} // Close picker when clicking outside
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
