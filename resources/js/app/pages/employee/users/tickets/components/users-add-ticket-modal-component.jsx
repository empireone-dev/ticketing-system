import { Modal } from "antd";
import React, { useState } from "react";
import store from "@/app/store/store";
import { stringify } from "postcss";
import { useSelector } from "react-redux";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import { message } from "antd";
import { create_ticket_thunk } from "@/app/pages/admin/tickets/redux/tickets-thunk";
import Input from "@/app/components/input";
import { get_ticket_by_user_id_thunk } from "@/app/pages/admin/it/redux/it-thunk";
import { get_category_thunk } from "@/app/pages/admin/category/redux/category-thunk";
import Select from "@/app/components/select";
import Textarea from "@/app/components/textarea";
import { send_push_notification } from "@/app/redux/app-thunk";

export default function UsersAddTicketModalComponent({ isOpen, closeModal }) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});
    const { users } = useSelector((state) => state.it);
    const { user } = useSelector((state) => state.app);
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
        fd.append("status", data.status);
        fd.append("isUrgent", data.isUrgent);
        fd.append("user_id", user.id);
        fd.append("others", data.others);

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
        await store.dispatch(get_ticket_by_user_id_thunk(user.id));
        await store.dispatch(send_push_notification())
        if (data.category_id == "Others") {
            store.dispatch(get_category_thunk());
        }
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
                            label="Select IT Personnel"
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