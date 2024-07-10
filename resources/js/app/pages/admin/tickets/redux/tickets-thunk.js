import { create_it_service, get_it_service } from "@/app/services/it-service";
import { ticketSlice } from "./tickets-slice";
import { create_ticket_service, get_ticket_by_id_service, get_ticket_service, update_ticket_status_service } from "@/app/services/ticket-service";
import { get_activity_by_id_service } from "@/app/services/activity-service";
import { get_notes_by_id_service } from "@/app/services/note-service";

export function update_ticket_status_thunk(data) {
    return async function (dispatch, getState) {
        const result = await update_ticket_status_service(data);
        // dispatch(ticketSlice.actions.setActivity(result.data.result));
        return result;
    };
}

export function get_activity_by_id_thunk(id) {
    return async function (dispatch, getState) {
        const result = await get_activity_by_id_service(id);
        dispatch(ticketSlice.actions.setActivity(result.data.result));
        return result;
    };
}

export function get_notes_by_id_thunk(id) {
    return async function (dispatch, getState) {
        const result = await get_notes_by_id_service(id);
        dispatch(ticketSlice.actions.setNotes(result.data.result));
        return result;
    };
}

export function create_ticket_thunk(data) {
    return async function (dispatch, getState) {
        const result = await create_ticket_service(data);
        dispatch(ticketSlice.actions.setTickets(result.data.result));
        return result;
    };
}

export function get_ticket_thunk(data) {
    return async function (dispatch, getState) {
        const result = await get_ticket_service()
        dispatch(ticketSlice.actions.setTickets(result.data.result));
    };
}



export function get_ticket_by_id_thunk(data) {
    return async function (dispatch, getState) {
        const result = await get_ticket_by_id_service()
        dispatch(ticketSlice.actions.setTicket(result.data.result));
    };
}