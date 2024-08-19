import React, { useEffect, useState, useRef } from "react";
import Pusher from "pusher-js";
import { useDispatch, useSelector } from "react-redux";
import { setRefresh } from "../redux/app-slice";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { router } from "@inertiajs/react";

const PusherNotifications = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.app);
    const [open, setOpen] = useState(false);
    const [isUrgent, setIsUrgent] = useState(false);
    const audioRef = useRef(null);
    const [data, setData] = useState({});
    function playAudio(params) {
        if (audioRef.current) {
            audioRef.current.play();
            audioRef.current.loop = true;
        }
    }

    useEffect(() => {
        Pusher.logToConsole = true;

        const pusher = new Pusher("f8a6f1c714553f657559", {
            cluster: "mt1",
        });

        const channel = pusher.subscribe("my-channel");
        const handleNotification = (data) => {
            setOpen(true);
            setIsUrgent(data.message.isUrgent === "true");
            setData(data.message);
            if ("Notification" in window) {
                setTimeout(() => {
                    playAudio();
                }, 1000);

                if (Notification.permission === "granted") {
                    new Notification("Empireone Ticket Notification", {
                        icon: "/images/logoIT.png",
                    });
                    dispatch(setRefresh(Math.random()));
                } else if (Notification.permission !== "denied") {
                    Notification.requestPermission().then((permission) => {
                        if (permission === "granted") {
                            new Notification("Empireone Ticket Notification", {
                                icon: "/images/logoIT.png",
                            });
                            dispatch(setRefresh(Math.random()));
                        }
                    });
                }
            } else {
                console.log("Browser does not support notifications.");
            }
        };

        channel.bind("my-event", handleNotification);
        return () => {
            pusher.unsubscribe("my-channel");
        };
    }, [dispatch]);

    function closeModal(value) {
        setOpen(value);
        if (audioRef.current) {
            audioRef.current.pause();
        }
    }
    function open_concern() {
        if (user.site_id == 1) {
            router.visit(`/admin/tickets/${data.id}/details`);
        } else if (user.site_id == 2) {
            router.visit(`/employee/it/tickets/${data.id}/details`);
        } else if (user.site_id == 3) {
            router.visit(`/employee/users/tickets/${data.id}/details`);
        }
        // router.visit(`/employee/it/tickets/${data.id}/details`);

        closeModal(false);
    }
    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                        <div>
                            <div className="mt-3 text-center sm:mt-5">
                                {isUrgent && (
                                    <>
                                        <audio ref={audioRef}>
                                            <source
                                                src="/audio/alert1.mp3"
                                                type="audio/mpeg"
                                            />
                                        </audio>
                                        <img
                                            src="/images/urgent2.gif"
                                            className="z-50 h-50 w-50"
                                            alt="Urgent Notification"
                                        />
                                    </>
                                )}
                                {!isUrgent && (
                                    <>
                                        <audio ref={audioRef}>
                                            <source
                                                src="/audio/normal.mp3"
                                                type="audio/mpeg"
                                            />
                                        </audio>
                                        <img
                                            src="/images/message.gif"
                                            className="z-50 h-50 w-full"
                                            alt="Urgent Notification"
                                        />
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                            <button
                                type="button"
                                onClick={() => open_concern()}
                                className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                            >
                                Show Concern
                            </button>
                            <button
                                type="button"
                                onClick={() => closeModal(false)}
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                            >
                                Cancel
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
};

export default PusherNotifications;
