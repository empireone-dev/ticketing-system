import axios from "axios";

export function create_it_service(data) {
    try {
        const res = axios.post("/api/user", data);
        return res;
    } catch (error) {
        return error;
    }
}
export function get_it_service(params) {}
