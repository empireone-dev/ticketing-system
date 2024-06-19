import { create_it_service, get_it_service } from "@/app/services/it-service";
import { ticketSlice } from "./tickets-slice";
import { create_ticket_service, get_ticket_service } from "@/app/services/ticket-service";

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
