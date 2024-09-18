import React, { useState } from "react";
import { create_it_thunk, get_user_by_position_thunk } from "../redux/users-thunk";
import store from "@/app/store/store";
import { Button, Modal } from "antd";
import Input from "@/app/components/input";
import Select from "@/app/components/select";
import { useSelector } from "react-redux";

export default function AddItModalComponent({ isOpen, closeModal }) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});
    const { user } = useSelector((state) => state.app);

    async function submitEvent(e) {
        e.preventDefault();
        setLoading(true);
        try {
            await store.dispatch(
                create_it_thunk({
                    ...data,
                    user_id:user.id,
                    account_type: 3,
                })
            );
            await store.dispatch(get_user_by_position_thunk(3));
            setData({});
            closeModal();
            setLoading(false);
        } catch (error) {
            alert("error");
            setLoading(false);
        }
    }

    function data_handler(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }
    console.log("data", data);
    return (
        <>
            <Modal
                title="User Information"
                okText="Submit"
                onOk={submitEvent}
                confirmLoading={loading}
                open={isOpen}
                onCancel={closeModal}
            >
                <div className="text-center md:mt-0 md:text-left w-full">
                    <form
                        onSubmit={submitEvent}
                        className="max-w-full mx-auto mt-4 flex flex-col gap-5"
                    >
                        <Input
                            onChange={(e) => data_handler(e)}
                            value={data.name ?? ""}
                            required="true"
                            name="name"
                            label="Fullname"
                            type="text"
                        />
                        <Input
                            onChange={(e) => data_handler(e)}
                            value={data.email ?? ""}
                            required="true"
                            name="email"
                            label="Email"
                            type="email"
                        />

                        <Input
                            onChange={(e) => data_handler(e)}
                            value={data.position ?? ""}
                            required="true"
                            name="position"
                            label="Position"
                            type="text"
                        />
                        {user.id == 0 && (
                            <Select
                                label="Select Site"
                                onChange={(e) => data_handler(e)}
                                name="site_id"
                                options={[
                                    { label: "San Carlos", value: 1 },
                                    { label: "Carcar", value: 2 },
                                ]}
                            />
                        )}

                    </form>
                </div>
            </Modal>
        </>
    );
}
