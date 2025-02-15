import axios from "axios";

export function create_it_service(data) {
    try {
        const res = axios.post("/api/user", data);
        return res;
    } catch (error) {
        return error;
    }
}

export function get_it_service(data) {
    try {
        const res = axios.get("/api/user");
        return res;
    } catch (error) {
        return error;
    }
}

export function get_user_by_position_service(position) {
    try {
        const res = axios.get("/api/get_user_by_position/"+position);
        return res;
    } catch (error) {
        return error;
    }
}



export function get_it_by_id_service(data) {
    try {
        const res = axios.get(`/api/user/${data.id}`,data);
        return res;
    } catch (error) {
        return error;
    }
}

export function update_it_by_id_service(data) {
    try {
        const res = axios.put(`/api/user/${data.id}`,data);
        return res;
    } catch (error) {
        return error;
    }
}