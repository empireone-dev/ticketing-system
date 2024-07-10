import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPath } from "../redux/tickets-slice";
import store from "@/app/store/store";
import { get_activity_by_id_thunk } from "../redux/tickets-thunk";

export default function ActivitiesTabContentSection() {
    const dispatch = useDispatch();
    const { activity,path } = useSelector((state) => state.tickets);
    useEffect(() => {
        store.dispatch(
            get_activity_by_id_thunk(window.location.pathname.split("/")[3])
        );
    }, [path]);
    return (
        <ol class="relative border-s border-gray-700  mx-10">
            {activity.map((res) => {
                return (
                    <li class="mb-10 ms-4">
                        <div class="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -start-1.5 border border-white "></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-700 ">
                            {moment(res.created_at).format("LLLL")}
                        </time>
                        <h3 class="text-lg font-semibold text-gray-900 capitalize">
                            Requested By: {res.user?.name}
                        </h3>
                        <p class="mb-4 text-base font-normal text-gray-500 capitalize">
                            {res.message}
                        </p>
                        <button
                            onClick={() => dispatch(setPath("details"))}
                            class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-700 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 "
                        >
                            Show more{" "}
                            <svg
                                class="w-3 h-3 ms-2 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </button>
                    </li>
                );
            })}
        </ol>
    );
}
