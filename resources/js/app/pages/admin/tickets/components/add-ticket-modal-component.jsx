import { TicketIcon } from "@heroicons/react/24/solid";
import { Modal } from "antd";
import React, { useState } from "react";
import { create_ticket_thunk, get_ticket_thunk } from "../redux/tickets-thunk";
import store from "@/app/store/store";
import { stringify } from "postcss";
import { useDispatch, useSelector } from "react-redux";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import { message } from "antd";
import Input from "@/app/components/input";
import Select from "@/app/components/select";
import Textarea from "@/app/components/textarea";
import { get_user_by_position_thunk } from "../../it/redux/it-thunk";
import { setRefresh } from "@/app/redux/app-slice";
import { send_push_notification } from "@/app/redux/app-thunk";
import { DatePicker } from "antd";
import moment from "moment";

export default function AddTicketModalComponent({ isOpen, closeModal }) {
    const [loading, setLoading] = useState(false);
    const { RangePicker } = DatePicker;
    const [data, setData] = useState({
        status: "Pending",
    });
    const { users } = useSelector((state) => state.it);
    const { user } = useSelector((state) => state.app);
    const dispatch = useDispatch();
    const [messageApi, contextHolder] = message.useMessage();

    const { allCategories: categories } = useSelector(
        (state) => state.category
    );

    function checkStatus(data) {
        // Check if there is any object with status 'active'
        const hasActive = data?.some((obj) => obj.status !== "done");
        if (hasActive) {
            return false;
        } else {
            return true;
        }
    }
    async function submitEvent(e) {
        e.preventDefault();
        setLoading(true);
        const fd = new FormData();
        fd.append("assigned_to", data.assigned_to);
        fd.append("category_id", data.category_id);
        fd.append("details", data.details);
        fd.append("station", data.station);
        fd.append("status", data.status);
        fd.append("isUrgent", data.isUrgent);
        fd.append("user_id", user.id);
        fd.append("start", data?.start ?? moment().format("LLLL"));
        fd.append("end", data?.end ?? moment().format("LLLL"));

        if (checkStatus(data.files) && data.files) {
            for (let i = 0; i < data.files.length; i++) {
                if (
                    data.files[i].name !== "uploaded" &&
                    data.files[i].status == "done"
                ) {
                    fd.append("files[]", data.files[i].originFileObj);
                }
            }
        }
        await store.dispatch(create_ticket_thunk(fd));
        await store.dispatch(get_user_by_position_thunk(2));
        await store.dispatch(get_ticket_thunk(user));
        await store.dispatch(send_push_notification(fd));
        messageApi.success("Created Successfully!");
        setData({});
        closeModal();
        setLoading(false);
    }

    return (
        <>
            {contextHolder}
            <Modal
                title="Ticket Information"
                okText="Submit"
                onOk={submitEvent}
                confirmLoading={loading}
                open={isOpen}
                onCancel={closeModal}
            >
                <form className="max-w-full mx-auto mt-4 ">
                    <div className="grid md:gap-6">
                        <Select
                            value={data.category_id}
                            label="Category"
                            name="category_id"
                            required="true"
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    category_id: e.target.value,
                                })
                            }
                            options={categories.map((res) => ({
                                label: res.name,
                                value: res.id,
                            }))}
                        />
                        {data.category_id == "Others" && (
                            <Input
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        others: e.target.value,
                                    })
                                }
                                value={data.others ?? ""}
                                required="true"
                                name="others"
                                label="Other Request"
                                type="text"
                            />
                        )}
                    </div>
                    <div className="grid md:gap-6 mt-4 ">
                        <RangePicker
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    start: moment(e[0].$d).format("LLLL"),
                                    end: moment(e[1].$d).format("LLLL"),
                                })
                            }
                            showTime
                        />
                    </div>
                    <div className="grid md:gap-6 mt-4 ">
                        <Textarea
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    details: e.target.value,
                                })
                            }
                            value={data.details ?? ""}
                            required="true"
                            name="details"
                            label="Request Details"
                            type="text"
                        />
                    </div>
                    <div className="grid md:gap-6 mt-4 mb-7 ">
                        <Input
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    station: e.target.value,
                                })
                            }
                            value={data.station ?? ""}
                            // required="true"
                            name="station"
                            label="PC/Station No."
                            type="text"
                        />
                    </div>
                    <div className="relative z-0 w-full mb-6 group mt-4 ">
                        <Select
                            value={data.assigned_to}
                            label="Select IT Personnel"
                            name="assigned_to"
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    assigned_to: e.target.value,
                                })
                            }
                            options={users?.data.map((res) => ({
                                label: res.name,
                                value: res.id,
                            }))}
                        />
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <Select
                            value={data.status}
                            label="Status"
                            name="status"
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    status: e.target.value,
                                })
                            }
                            options={[
                                { name: "Pending", value: "Pending" },
                                { name: "Assigned", value: "Assigned" },
                                { name: "Ongoing", value: "Ongoing" },
                                { name: "Closed", value: "Closed" },
                            ].map((res) => ({
                                label: res.name,
                                value: res.id,
                            }))}
                        />
                    </div>
                    <Upload
                        onChange={(e) =>
                            setData({
                                ...data,
                                files: e.fileList,
                            })
                        }
                        multiple
                        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                        listType="picture"
                        method="GET"
                        className="upload-list-inline"
                    >
                        <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                    <div class="flex items-center my-4">
                        <input
                            id="default-checkbox"
                            type="checkbox"
                            checked={data.isUrgent == "true"}
                            name="isUrgent"
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    [e.target.name]: JSON.stringify(
                                        e.target.checked
                                    ),
                                })
                            }
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500   focus:ring-2 "
                        />
                        <label
                            for="default-checkbox"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Is Urgent
                        </label>
                    </div>
                </form>
            </Modal>
        </>
    );
}
