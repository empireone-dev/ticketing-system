export function get_notes_by_id_service(id) {
    try {
        const res = axios.get("/api/note/"+id);
        return res;
    } catch (error) {
        return error;
    }
}

export function add_notes_service(data) {
    try {
        const res = axios.post("/api/note",data);
        return res;
    } catch (error) {
        return error;
    }
}