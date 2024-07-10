import { TicketIcon } from "@heroicons/react/24/solid";
import { Modal } from "antd";
import React, { useState } from "react";
import { create_ticket_thunk } from "../redux/tickets-thunk";
import store from "@/app/store/store";
import { stringify } from "postcss";
import { useSelector } from "react-redux";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import { message } from "antd";

export default function AddTicketModalComponent({ isOpen, closeModal }) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});
    const { users } = useSelector((state) => state.it);
    const { user } = useSelector((state) => state.app);
    const [messageApi, contextHolder] = message.useMessage();

    const { categories } = useSelector((state) => state.category);

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
        fd.append("status", data.status);
        fd.append("isUrgent", data.isUrgent);
        fd.append("user_id", user.id);

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
                        <div className="relative z-0 w-full  group">
                            <select
                                name="category_id"
                                id=""
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                className="block py-2.5 pl-1.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            >
                                <option value="" disabled selected></option>
                                {categories.map((res) => {
                                    return (
                                        <option value={res.id}>
                                            {res.name}
                                        </option>
                                    );
                                })}

                                <option value="Others">Others</option>
                            </select>
                            <label
                                htmlFor="floating_Requestor_name"
                                className="peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Category
                            </label>
                        </div>
                        {data.category_id == "Others" && (
                            <div className="relative z-0 w-full  group">
                                <textarea
                                    type="text"
                                    name="others"
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            [e.target.name]: e.target.value,
                                        })
                                    }
                                    className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="floating_Requestor_name"
                                    className="peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Others Request
                                </label>
                            </div>
                        )}
                    </div>
                    <div className="grid md:gap-6 mt-4 ">
                        <div className="relative z-0 w-full mb-6 group">
                            <textarea
                                type="text"
                                name="details"
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_Requestor_name"
                                className="peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Request Details
                            </label>
                        </div>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <select
                            name="assigned_to"
                            id=""
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            className="block py-2.5 pl-1.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        >
                            <option disabled selected>
                                Select IT Personnel
                            </option>
                            {users.map((res, i) => {
                                return (
                                    <option key={i} value={res.id}>
                                        {res.name}
                                    </option>
                                );
                            })}
                        </select>
                        <label
                            htmlFor="floating_email"
                            className="peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Assigned IT Personnel
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <select
                            name="status"
                            id=""
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            className="block py-2.5 pl-1.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        >
                            <option value="" disabled selected></option>
                            <option value="Pending">Pending</option>
                            <option value="Assigned">Assigned</option>
                            <option value="Ongoing">Ongoing</option>
                            <option value="Closed">Closed</option>
                        </select>
                        <label
                            htmlFor="floating_Requestor_name"
                            className="peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Status
                        </label>
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
                            value=""
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
