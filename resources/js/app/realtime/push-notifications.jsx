import React, { useEffect } from "react";
import Pusher from "pusher-js";
import { useDispatch } from "react-redux";
import { setRefresh } from "../redux/app-slice";

const PusherNotifications = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        // Enable pusher logging - don't include this in production
        Pusher.logToConsole = true;

        const pusher = new Pusher("f8a6f1c714553f657559", {
            cluster: "mt1",
        });

        const channel = pusher.subscribe("my-channel");
        const handleNotification = (data) => {
            // Check if the browser supports notifications
            if ("Notification" in window) {
                // Check if notification permissions have been granted
                if (Notification.permission === "granted") {
                    // Create and display the notification
                    new Notification("Empireone Ticket Notification", {
                        body: JSON.stringify(data),
                        icon: "/images/logoIT.png", // Optional: add an icon
                    });
                    dispatch(setRefresh(Math.random()));
                } else if (Notification.permission !== "denied") {
                    // Request permission to show notifications
                    Notification.requestPermission().then((permission) => {
                        if (permission === "granted") {
                            new Notification("Empireone Ticket Notification", {
                                body: JSON.stringify(data),
                                icon: "/images/logoIT.png", // Optional: add an icon
                            });
                            dispatch(setRefresh(Math.random()));
                        }
                    });
                }
            } else {
                // Browser does not support notifications
                console.log("Browser does not support notifications.");
            }
        };

        channel.bind("my-event", handleNotification);

        // Cleanup function to unsubscribe from Pusher on component unmount
        return () => {
            pusher.unsubscribe("my-channel");
        };
    }, []);

    return null; // This component does not render anything
};

export default PusherNotifications;
