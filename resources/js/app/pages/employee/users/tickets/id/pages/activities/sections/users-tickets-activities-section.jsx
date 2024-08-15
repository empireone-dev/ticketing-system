import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "@/app/store/store";
import { get_activity_by_id_thunk } from "@/app/pages/admin/tickets/redux/tickets-thunk";
import { setPath } from "@/app/pages/admin/tickets/redux/tickets-slice";

export default function UsersTicketsActivitiesSection() {
    const dispatch = useDispatch();
    const { activity, path } = useSelector((state) => state.tickets);
    useEffect(() => {
        store.dispatch(
            get_activity_by_id_thunk(window.location.pathname.split("/")[3])
        );
    }, [path]);
    return (
        <div>
            <ol class="relative border-s border-indigo-700  mx-10">
                {activity.map((res) => {
                    return (
                        <li class="mb-10 ms-4">
                            <div class="absolute w-3 h-3 bg-indigo-700 rounded-full mt-1.5 -start-1.5 border border-white "></div>
                            <time class="mb-1 text-sm font-normal leading-none text-indigo-700 ">
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
                                class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-indigo-700 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 "
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
        </div>
    );
}
