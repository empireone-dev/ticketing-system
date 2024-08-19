import React from "react";
import { useSelector } from "react-redux";
import AdminTicketChangeStatusSection from "./admin-ticket-change-status-section";
import AdminTicketAsssignedSection from "./admin-ticket-assigned-section";

export default function AdminTicketDetailsSection() {
    const { ticket } = useSelector((state) => state.tickets);
    return (
        <div>
            <div class="px-4 sm:px-0">
                <div className="flex items-center justify-between">
                    <h3 class="text-base font-semibold leading-7 text-gray-900">
                        Project Information
                    </h3>
                    <div className="flex gap-3">
                        {ticket.status == "Pending" && (
                            <AdminTicketAsssignedSection />
                        )}
                        <AdminTicketChangeStatusSection />
                    </div>
                </div>
                <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-800">
                    Start At: {ticket.start}
                </p>
                <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-800">
                    End At: {ticket.end}
                </p>
            </div>
            <div class="mt-6 border-t border-gray-100">
                <dl class="divide-y divide-gray-100">
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">
                            Ticket ID:
                        </dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            #{ticket.ticket_id}
                        </dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">
                            Assigned To:
                        </dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {ticket?.assigned_to?.name}
                        </dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">
                            Category
                        </dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {ticket?.category?.name}
                        </dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">
                            Status
                        </dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {ticket?.status}
                        </dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">
                            Urgent?
                        </dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {ticket?.isUrgent == null ? "No" : "Yes"}
                        </dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">
                            Details
                        </dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {ticket?.details}
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    );
}
