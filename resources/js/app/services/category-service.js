import axios from "axios";

export function create_category_service(data) {
    try {
        const res = axios.post("/api/category", data);
        return res;
    } catch (error) {
        return error;
    }
}

export function get_category_service(data) {
    try {
        const res = axios.get("/api/category"+window.location.search);
        return res;
    } catch (error) {
        return error;
    }
}


export function get_categories_by_category_service() {
      const category = window.location.pathname.split('/')[3]
      const search = window.location.search
    try {
        const res = axios.get("/api/get_categories_by_category/"+category+search);
        return res;
    } catch (error) {
        return error;
    }
}
