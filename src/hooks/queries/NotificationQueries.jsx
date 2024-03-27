import { useMutation, useQuery, useQueryClient } from "react-query"
import { request } from "../../components/utils/request"

// GET Notifications
const fetchNotifications = () => {
  return request({
    url: "/notification/getAllNotification",
    method: "get",
  })
}

export const useFetchNotifications = () => {
  return useQuery("get-notifications", () => fetchNotifications(), {
    onSuccess: (response) => response,
    onError: (error) => error,
  })
}

// GET Notifications based on notification Type ID
const fetchNotificationByID = (id) => {
  return request({
    url: `/notification/getActiveNotification/${id}`,
    method: "get",
  })
}

export const useFetchNotificationByID = (id) => {
  return useQuery(["get-notification", id], () => fetchNotificationByID(id), {
    onSuccess: (response) => response,
    onError: (error) => error,
  })
}

// POST Add Notification
const addNotification = (data) => {
  return request({
    url: "/notification/add",
    method: "post",
    data,
  })
}

export const useAddNotification = () => {
  const queryClient = useQueryClient()
  return useMutation(addNotification, {
    onSuccess: () => {
      queryClient.invalidateQueries("get-notifications")
    },
    onError: (error) => error,
  })
}

// DELETE Notification
const deleteNotification = (id) => {
  return request({
    url: `/notification/delete/${id}`,
    method: "delete",
  })
}

export const useDeleteNotification = () => {
  const queryClient = useQueryClient()
  return useMutation(deleteNotification, {
    onSuccess: () => {
      queryClient.invalidateQueries("get-notifications")
    },
    onError: (error) => error,
  })
}

// GET Notification Types
const fetchNotificationTypes = () => {
  return request({
    url: "/notification_type/get",
    method: "get",
  })
}

export const useFetchNotificationTypes = () => {
  return useQuery("get-notification-types", () => fetchNotificationTypes(), {
    onSuccess: (response) => response,
    onError: (error) => error,
  })
}

// POST Add Notification Type
const addNotificationType = (data) => {
  return request({
    url: "/notification_type/add",
    method: "post",
    data,
  })
}

export const useAddNotificationType = () => {
  return useMutation(addNotificationType, {
    onSuccess: (response) => response,
    onError: (error) => error,
  })
}

// GET Archive
const fetchNotificationArchive = () => {
  return request({
    url: "/notification/getAllArchive",
    method: "get",
  })
}

export const useFetchNotificationArchive = () => {
  return useQuery("get-archive", () => fetchNotificationArchive(), {
    onSuccess: (response) => response,
    onError: (error) => error,
  })
}

// GET Archive based on notification Type ID
const fetchArchiveByID = (id) => {
  return request({
    url: `/notification/getArchiveNotification/${id}`,
    method: "get",
  })
}

export const useFetchArchiveByID = (id) => {
  return useQuery(["get-archive", id], () => fetchArchiveByID(id), {
    onSuccess: (response) => response,
    onError: (error) => error,
  })
}

// GET Archived Notification Document (Download)
const fetchPDF = (id) => {
  return request({
    url: `/notification/download/${id}`,
    method: "get",
    responseType: "blob",
  })
}

export const useFetchPDF = () => {
  return useMutation(fetchPDF, {
    onSuccess: (response) => {
      const fileUrl = window.URL.createObjectURL(response.data)
      window.open(fileUrl, "_blank")
      return response
    },
    onError: (error) => error,
  })
}

// PUT Notification Archive
const putNotificationArchive = (id) => {
  return request({
    url: `/notification/archive/${id}`,
    method: "put",
  })
}

export const usePutNotificationArchive = () => {
  const queryClient = useQueryClient()
  return useMutation(putNotificationArchive, {
    onSuccess: () => {
      queryClient.invalidateQueries("get-notifications")
    },
    onError: (error) => error,
  })
}
