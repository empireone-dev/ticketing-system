import React, { useState } from "react";
import { create_it_thunk } from "../redux/it-thunk";
import store from "@/app/store/store";
import { Button, Modal } from "antd";

export default function AddItModalComponent({ isOpen, closeModal }) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});

    async function submitEvent(e) {
        e.preventDefault();
        setLoading(true);
        const result = await store.dispatch(create_it_thunk(data));
        console.log("result", result);
        setData({});
        closeModal();
        setLoading(false);
    }

    function data_handler(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }
    return (
        <>
        
            <Modal
                title=" IT Personnel Information"
                okText="Submit"
                onOk={submitEvent}
                confirmLoading={loading}
                open={isOpen}
                onCancel={closeModal}
            >
                <div className="text-center md:mt-0 md:text-left w-full">
                    <form
                        onSubmit={submitEvent}
                        className="max-w-full mx-auto mt-4 "
                    >
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                onChange={data_handler}
                                type="text"
                                value={data?.name ?? ""}
                                name="name"
                                id="name"
                                className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="name"
                                className="z-30 peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Fullname
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                onChange={data_handler}
                                type="email"
                                name="email"
                                value={data?.email ?? ""}
                                id="email"
                                className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="email"
                                className="peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 z-30 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Email address
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                onChange={data_handler}
                                type="text"
                                name="position"
                                id="position"
                                value={data?.position ?? ""}
                                className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="position"
                                className="peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 z-30 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Position
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                onChange={data_handler}
                                type="text"
                                name="password"
                                id="password"
                                value={data?.password ?? ""}
                                className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="password"
                                className="peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 z-30 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Password
                            </label>
                        </div>
                        <div className="grid md:gap-6">
                            <div className="relative z-0 w-full mb-6 group mt-2">
                                <select
                                    onChange={data_handler}
                                    name="site"
                                    id=""
                                    className="block py-2.5 pl-1.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                >
                                    <option value=""></option>
                                    <option value="San Carlos">
                                        San Carlos Site
                                    </option>
                                    <option value="Carcar">Carcar Site</option>
                                </select>
                                <label
                                    htmlFor="floating_Requestor_name"
                                    className="peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 z-30 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Site
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    );
}
