export function get_activity_by_id_service(id) {
    try {
        const res = axios.get("/api/activity/"+id);
        return res;
    } catch (error) {
        return error;
    }
}