import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import {
    ClockIcon,
    DocumentCheckIcon,
    InformationCircleIcon,
    PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";

export default function AdminTicketIdTabsSection() {
    const path = window.location.pathname.split("/")[4];
    const ticketid = window.location.pathname.split("/")[3];

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }

    const steps = [
        {
            id: "details",
            name: <div className="mt-2" style={{ fontSize: "18px" }}>Project Details</div>,
            href: `/admin/tickets/${ticketid}/details`,
            status: path === "details" ? "current" : "complete",
            icon: InformationCircleIcon,
        },
        {
            id: "files",
            name: <div className="mt-2" style={{ fontSize: "18px" }}>Files</div>,
            href: `/admin/tickets/${ticketid}/files`,
            status: path === "files" ? "current" : "upcoming",
            icon: DocumentCheckIcon,
        },
        {
            id: "activities",
            name: <div className="mt-2" style={{ fontSize: "18px" }}>Activities</div>,
            href: `/admin/tickets/${ticketid}/activities`,
            status: path === "activities" ? "current" : "upcoming",
            icon: ClockIcon,
        },
        {
            id: "notes",
            name: <div className="mt-2" style={{ fontSize: "18px" }}>I.T Personnel Notes</div>,
            href: `/admin/tickets/${ticketid}/notes`,
            status: path === "notes" ? "current" : "upcoming",
            icon: PencilSquareIcon,
        },
    ];

    return (
        <div className="lg:border-b lg:border-t lg:border-gray-200">
            <nav aria-label="Progress" className="mx-auto">
                <ol
                    role="list"
                    className="overflow-hidden rounded-md lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200"
                >
                    {steps.map((step, stepIdx) => (
                        <li
                            key={step.id}
                            className="relative overflow-hidden lg:flex-1"
                        >
                            <div
                                className={
                                    "overflow-hidden border border-gray-200 lg:border-0"
                                }
                            >
                                {step.status === "current" ? (
                                    <Link href={step.href} aria-current="step">
                                        <span
                                            aria-hidden="true"
                                            className="absolute left-0 top-0 h-full w-1 bg-indigo-600 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                                        />
                                        <span
                                            className={classNames(
                                                stepIdx !== 0 ? "lg:pl-9" : "",
                                                "flex items-start px-6 py-5 text-sm font-medium"
                                            )}
                                        >
                                            <span className="flex-shrink-0">
                                                <step.icon className="flex h-10 w-10 items-center justify-center rounded-full text-indigo-600" />
                                            </span>
                                            <span className="ml-4 mt-0.5 flex min-w-0 flex-col">
                                                <span className="text-sm font-medium text-indigo-600">
                                                    {step.name}
                                                </span>
                                                <span className="text-sm font-medium text-gray-500">
                                                    {step.description}
                                                </span>
                                            </span>
                                        </span>
                                    </Link>
                                ) : (
                                    <Link href={step.href} className="group">
                                        <span
                                            aria-hidden="true"
                                            className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                                        />
                                        <span
                                            className={classNames(
                                                stepIdx !== 0 ? "lg:pl-9" : "",
                                                "flex items-start px-6 py-5 text-sm font-medium"
                                            )}
                                        >
                                            <span className="flex-shrink-0">
                                                <step.icon className="flex h-10 w-10 items-center justify-center rounded-full text-gray-500" />
                                            </span>
                                            <span className="ml-4 mt-0.5 flex min-w-0 flex-col">
                                                <span className="text-sm font-medium text-gray-500">
                                                    {step.name}
                                                </span>
                                                <span className="text-sm font-medium text-gray-500">
                                                    {step.description}
                                                </span>
                                            </span>
                                        </span>
                                    </Link>
                                )}

                                {stepIdx !== 0 && (
                                    <>
                                        {/* Separator */}
                                        <div
                                            aria-hidden="true"
                                            className="absolute inset-0 left-0 top-0 hidden w-3 lg:block"
                                        >
                                            <svg
                                                fill="none"
                                                viewBox="0 0 12 82"
                                                preserveAspectRatio="none"
                                                className="h-full w-full text-gray-300"
                                            >
                                                <path
                                                    d="M0.5 0V31L10.5 41L0.5 51V82"
                                                    stroke="currentColor"
                                                    vectorEffect="non-scaling-stroke"
                                                />
                                            </svg>
                                        </div>
                                    </>
                                )}
                            </div>
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    );
}
