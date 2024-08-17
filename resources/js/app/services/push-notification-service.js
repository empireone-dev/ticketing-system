import axios from "axios";

export function send_push_notification_service(data) {
  try {
      const res = axios.post("/api/open_ticket_notification",data);
      return res;
  } catch (error) {
      return error;
  }
}