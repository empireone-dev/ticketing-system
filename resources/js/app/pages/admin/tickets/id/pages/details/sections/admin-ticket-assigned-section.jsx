import React, { useEffect, useState } from "react";
import { Button, Modal, Select, Input, message } from "antd";
import {
    get_ticket_by_id_thunk,
    update_ticket_status_thunk,
} from "../../../../redux/tickets-thunk";
import store from "@/app/store/store";
import {
    get_it_thunk,
    get_user_by_position_thunk,
} from "../../../../../it/redux/it-thunk";
import { useSelector } from "react-redux";
const { TextArea } = Input;

export default function AdminTicketAssignedSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const { users } = useSelector((state) => state.it);
    const { user } = useSelector((state) => state.app);
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState({
        status: "Assigned",
        user_id: user?.id,
        ticket_id: window.location.pathname.split("/")[3],
        assigned_to: users?.[0]?.id || null,
        notes: "",
    });

    useEffect(() => {
        // Update `data` state when `users` changes
        if (Array.isArray(users) && users.length > 0) {
            setData((prevData) => ({
                ...prevData,
                assigned_to: users[0]?.id,
            }));
        }
    }, [users]);

    useEffect(() => {
        // Fetch users with position ID 2
        store.dispatch(get_user_by_position_thunk(2));
    }, []);

    const showModal = () => {
        setIsModalOpen(true);
    };

    async function handleOk() {
        setLoading(true);
        if (data.notes) {
            try {
                await store.dispatch(update_ticket_status_thunk(data));
                await store.dispatch(get_ticket_by_id_thunk());
                messageApi.success("Updated successfully!");
                setTimeout(() => {
                    setLoading(false);
                    setIsModalOpen(false);
                }, 2000);
            } catch (error) {
                messageApi.error("Failed to update ticket!");
                setLoading(false);
            }
        } else {
            messageApi.error("Notes is required!");
            setLoading(false);
        }
    }

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            {contextHolder}
            <Button size="large" type="primary" danger onClick={showModal}>
                Assign Ticket
            </Button>
            <Modal
                title="Assign Ticket"
                open={isModalOpen}
                onOk={handleOk}
                okText="Submit"
                confirmLoading={loading}
                onCancel={handleCancel}
            >
                <div className="flex flex-col gap-4">
                    {data.status === "Assigned" && (
                        <Select
                            size="large"
                            value={data.assigned_to}
                            className="w-full"
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    assigned_to: e,
                                })
                            }
                            options={
                                Array.isArray(users) && users.length > 0
                                    ? users.map((res) => ({
                                        value: res.id,
                                        label: res.name,
                                    }))
                                    : []
                            }
                            placeholder={
                                Array.isArray(users) && users.length > 0
                                    ? "Select user"
                                    : "No users available"
                            }
                            disabled={!Array.isArray(users) || users.length === 0}
                        />
                    )}
                    <TextArea
                        value={data.notes}
                        onChange={(e) =>
                            setData({
                                ...data,
                                notes: e.target.value,
                            })
                        }
                        placeholder="Notes"
                        autoSize={{
                            minRows: 3,
                            maxRows: 5,
                        }}
                    />
                </div>
            </Modal>
        </div>
    );
}
