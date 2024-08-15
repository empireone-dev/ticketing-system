export function send_push_notification_service() {
  try {
      const res = axios.get("/api/open_ticket_notification");
      return res;
  } catch (error) {
      return error;
  }
}