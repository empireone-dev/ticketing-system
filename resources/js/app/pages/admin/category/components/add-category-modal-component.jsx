import store from "@/app/store/store";
import { BarsArrowDownIcon } from "@heroicons/react/24/solid";
import { Modal } from "antd";
import React, { useState } from "react";
import { create_category_thunk } from "../redux/category-thunk";

export default function AddCategoryModalComponent({ isOpen, closeModal }) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});
   async function submitEvent(e) {
        e.preventDefault();
        setLoading(true);
        await store.dispatch(create_category_thunk(data));
        setData({});
        closeModal();
        setLoading(false)
    }
    return (
        <>
            <Modal
                title="Category Information"
                okText="Submit"
                onOk={submitEvent}
                confirmLoading={loading}
                open={isOpen}
                onCancel={closeModal}
            >
                <form className="max-w-full mx-auto mt-6 ">
                    <div className="grid md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="text"
                                className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_Requestor_name"
                                className="peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Category Name
                            </label>
                        </div>
                    </div>
                </form>
            </Modal>
        </>
    );
}
