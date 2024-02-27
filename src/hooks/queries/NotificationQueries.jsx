import { useQuery } from "react-query"
import { request } from "../../components/utils/request"

// Get All Notifications
const fetchNotifications = () => {
  return request({
    url: "/notification/getAllNotification",
    method: "get",
  })
}

export const useFetchNotifications = (onSuccess, onError) => {
  return useQuery("get-notifications", () => fetchNotifications(), {
    onSuccess,
    onError,
  })
}
