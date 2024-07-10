import {
    ClockIcon,
    DocumentTextIcon,
    FolderIcon,
    PencilSquareIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import ProjectDetailsTabContentSection from "./project-details-tab-content-section";
import FileTabContentSection from "./file-tab-content-section";
import ActivitiesTabContentSection from "./activities-tab-content-section";
import ItPersonnelTabContentSection from "./it-personnel-tab-content-section";
import { useDispatch, useSelector } from "react-redux";
import { setPath } from "../redux/tickets-slice";

export default function TicketViewSection() {
    const { path } = useSelector((state) => state.tickets);
    const dispatch = useDispatch();

    return (
        <div>
            <div className="flex items-center justify-between flex-1 space-y-4 py-3 px-3 rounded-t-lg bg-slate-500">
                <div className="mb-4 w-full relative">
                    <ul
                        className="flex flex-wrap -mb-px text-sm font-medium text-center"
                        id="default-tab"
                        role="tablist"
                    >
                        <li
                            className="me-2 flex-1 relative"
                            role="presentation"
                        >
                            <button
                                onClick={() => dispatch(setPath("details"))}
                                className={`flex items-center justify-center hover:bg-white p-4 border-b-2 rounded-t-lg ${
                                    path === "details" ? "bg-white" : ""
                                } w-full`}
                                id="details-tab"
                                type="button"
                                role="tab"
                                aria-controls="details"
                                aria-selected={path === "details"}
                            >
                                <DocumentTextIcon className="h-5 w-5 mr-1" />{" "}
                                Project Details
                            </button>
                            {path === "details" && (
                                <div className="absolute inset-x-0 bottom-0 h-1 bg-white rounded-t-lg"></div>
                            )}
                        </li>
                        <li
                            className="me-2 flex-1 relative"
                            role="presentation"
                        >
                            <button
                                onClick={() => dispatch(setPath("files"))}
                                className={`flex items-center justify-center hover:bg-white p-4 border-b-2 rounded-t-lg ${
                                    path === "files" ? "bg-white" : ""
                                } w-full`}
                                id="files-tab"
                                type="button"
                                role="tab"
                                aria-controls="files"
                                aria-selected={path === "files"}
                            >
                                <FolderIcon className="h-5 w-5 mr-1" /> Files
                            </button>
                            {path === "files" && (
                                <div className="absolute inset-x-0 bottom-0 h-1 bg-white rounded-t-lg"></div>
                            )}
                        </li>
                        <li
                            className="me-2 flex-1 relative"
                            role="presentation"
                        >
                            <button
                                onClick={() => dispatch(setPath("activities"))}
                                className={`flex items-center justify-center hover:bg-white p-4 border-b-2 rounded-t-lg ${
                                    path === "activities" ? "bg-white" : ""
                                } w-full`}
                                id="activities-tab"
                                type="button"
                                role="tab"
                                aria-controls="activities"
                                aria-selected={path === "activities"}
                            >
                                <ClockIcon className="h-5 w-5 mr-1" />{" "}
                                Activities
                            </button>
                            {path === "activities" && (
                                <div className="absolute inset-x-0 bottom-0 h-1 bg-white rounded-t-lg"></div>
                            )}
                        </li>
                        <li className="flex-1 relative" role="presentation">
                            <button
                                onClick={() => dispatch(setPath("notes"))}
                                className={`flex items-center justify-center hover:bg-white p-4 border-b-2 rounded-t-lg ${
                                    path === "notes" ? "bg-white" : ""
                                } w-full`}
                                id="notes-tab"
                                type="button"
                                role="tab"
                                aria-controls="notes"
                                aria-selected={path === "notes"}
                            >
                                <PencilSquareIcon className="h-5 w-5 mr-1" />{" "}
                                I.T Personnel Notes
                            </button>
                            {path === "notes" && (
                                <div className="absolute inset-x-0 bottom-0 h-1 bg-white rounded-t-lg"></div>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
            <div id="default-tab-content h-screen">
                <div
                    className={`p-4 rounded-b-lg bg-gray-50 ${
                        path === "details" ? "block" : "hidden"
                    }`}
                    id="details"
                    role="tabpanel"
                    aria-labelledby="details-tab"
                >
                    <ProjectDetailsTabContentSection />
                </div>
                <div
                    className={`p-4 rounded-b-lg bg-gray-50 ${
                        path === "files" ? "block" : "hidden"
                    }`}
                    id="files"
                    role="tabpanel"
                    aria-labelledby="files-tab"
                >
                    <FileTabContentSection />
                </div>
                <div
                    className={`p-4 rounded-b-lg bg-gray-50 ${
                        path === "activities" ? "block" : "hidden"
                    }`}
                    id="activities"
                    role="tabpanel"
                    aria-labelledby="activities-tab"
                >
                    <ActivitiesTabContentSection />
                </div>
                <div
                    className={`p-4 rounded-b-lg bg-gray-50 ${
                        path === "notes" ? "block" : "hidden"
                    }`}
                    id="notes"
                    role="tabpanel"
                    aria-labelledby="notes-tab"
                >
                    <ItPersonnelTabContentSection />
                </div>
            </div>
        </div>
    );
}
