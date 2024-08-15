export function get_dashboard_user_by_id_service(data) {
  try {
      const res = axios.get("/api/dashboard/"+data);
      return res;
  } catch (error) {
      return error;
  }
}

export function get_admin_dashboard_service() {
  try {
      const res = axios.get("/api/dashboard");
      return res;
  } catch (error) {
      return error;
  }
}
