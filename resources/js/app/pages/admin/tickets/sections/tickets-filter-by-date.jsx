
import { DatePicker } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import { export_generate_ticket_thunk } from '../redux/tickets-thunk';
import store from '@/app/store/store';
const { RangePicker } = DatePicker;
import { CSVLink, CSVDownload } from "react-csv";
import { CloudDownloadOutlined, FileExcelFilled, SearchOutlined } from '@ant-design/icons';

export default function TicketsFilterByDate() {
    const [data, setData] = useState([])
    const [isLoading, setIsloading] = useState(false)
    async function generate_handler(start, end) {
        setIsloading(true)
        const data = {
            start: start,
            end: end,
        }
        const res = await store.dispatch(export_generate_ticket_thunk(data))
        setData(res.data.result.map(res => ({
            'Ticket ID': res.ticket_id,
            'Request To': res.user.name,
            'Assigned To': res.assigned_to.name,
            "Details": res.details,
            'Status': res.status,
        })))
        setIsloading(false)
    }
    return (
        <div className='flex gap-3 h-10'>

            <RangePicker
                format="MM-DD-YYYY"
                onChange={(value, dateString) => {
                    generate_handler(dateString[0], dateString[1])
                }}
            />

            <div>
                <button
                    disabled={isLoading}
                    className=' bg-blue-500 p-2 rounded-md text-white hover:bg-blue-600 '>
                    <CSVLink
                        asyncOnClick={true}
                        filename={'ticketing-system' + moment().format('LL') + ".csv"}
                        data={data}>
                        <div className='flex gap-2'>
                            <CloudDownloadOutlined />
                            {
                                isLoading ? "Loading..." : <>
                                    GENERATE
                                </>
                            }
                        </div>
                    </CSVLink>
                </button>

            </div>
        </div>
    );
}
