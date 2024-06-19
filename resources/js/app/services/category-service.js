import axios from "axios";

export function create_category_service(data) {
    try {
        const res = axios.post("/api/user", data);
        return res;
    } catch (error) {
        return error;
    }
}

export function get_category_service(data) {
    try {
        const res = axios.get("/api/user");
        return res;
    } catch (error) {
        return error;
    }
}
