import React, { useEffect, useState } from "react";
import { Button, Modal, Select, Input, message } from "antd";
import { get_ticket_by_id_thunk, update_ticket_status_thunk } from "../../../../redux/tickets-thunk";
import store from "@/app/store/store";
import { get_user_by_position_thunk } from "../../../../../it/redux/it-thunk";
import { useSelector } from "react-redux";

const { TextArea } = Input;

export default function AdminTicketAsssignedSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const { users } = useSelector((state) => state.it);
    const { user } = useSelector((state) => state.app);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        status: "Assigned",
        user_id: user?.id,
        ticket_id: window.location.pathname.split("/")[3], // Ensure ticket_id is correct
        assigned_to: users?.[0]?.id || "", // Default to an empty string if no users
        notes: "",
    });

    // Fetch users on initial load
    useEffect(() => {
        store.dispatch(get_user_by_position_thunk(2)); // Fetch users by position, e.g., IT personnel
    }, []);

    // Update assigned_to when users data changes
    useEffect(() => {
        if (users?.length > 0) {
            setData((prevData) => ({
                ...prevData,
                assigned_to: users[0]?.id, // Set default assigned user to the first one
            }));
        }
    }, [users]); // This effect runs only when `users` changes

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = async () => {
        if (!data.notes) {
            messageApi.error("Notes are required!");
            return;
        }

        setLoading(true);

        try {
            // Dispatch the update ticket action
            await store.dispatch(update_ticket_status_thunk(data));
            await store.dispatch(get_ticket_by_id_thunk(data.ticket_id));

            messageApi.success("Updated successfully!");
            setTimeout(() => {
                setLoading(false);
                setIsModalOpen(false);
            }, 2000);
        } catch (error) {
            messageApi.error("An error occurred while updating the ticket.");
            setLoading(false);
        }
    };

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
                            onChange={(value) =>
                                setData((prevData) => ({
                                    ...prevData,
                                    assigned_to: value,
                                }))
                            }
                            options={users?.map((user) => ({
                                value: user.id,
                                label: user.name,
                            }))}
                        />
                    )}
                    <TextArea
                        value={data.notes}
                        onChange={(e) =>
                            setData((prevData) => ({
                                ...prevData,
                                notes: e.target.value,
                            }))
                        }
                        placeholder="Notes"
                        autoSize={{ minRows: 3, maxRows: 5 }}
                    />
                </div>
            </Modal>
        </div>
    );
}
