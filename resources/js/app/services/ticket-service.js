import axios from "axios";

export function create_ticket_service(data) {
    try {
        const res = axios.post("/api/user", data);
        return res;
    } catch (error) {
        return error;
    }
}

export function get_ticket_service(data) {
    try {
        const res = axios.get("/api/user");
        return res;
    } catch (error) {
        return error;
    }
}
