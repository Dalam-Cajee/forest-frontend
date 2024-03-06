import { useMutation, useQuery } from "react-query"
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

// Get Notification Types
const fetchNotificationTypes = () => {
  return request({
    url: "/notification_type/get",
    method: "get",
  })
}

export const useFetchNotificationTypes = (onSuccess, onError) => {
  return useQuery("get-notification-types", () => fetchNotificationTypes(), {
    onSuccess,
    onError,
  })
}

const addNotification = (data) => {
  return request({
    url: "/notification/add",
    method: "post",
    data,
  })
}

export const useAddNotification = (onSuccess, onError) => {
  return useMutation(addNotification, {
    onSuccess,
    onError,
  })
}
