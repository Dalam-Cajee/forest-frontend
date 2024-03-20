import { useMutation, useQuery } from "react-query"
import { request } from "../../components/utils/request"

// GET Notifications
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

// GET Notifications based on notification Type ID
const fetchNotificationByID = (id) => {
  return request({
    url: `/notification/getActiveNotification/${id}`,
    method: "get",
  })
}

export const useFetchNotificationByID = (id) => {
  return useQuery(["get-notification", id], () => fetchNotificationByID(id), {
    onSuccess: (response) => {
      return response
    },
    onError: (error) => {
      return error
    },
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

export const useAddNotification = (onSuccess, onError) => {
  return useMutation(addNotification, {
    onSuccess,
    onError,
  })
}

// DELETE Notification
const deleteNotification = (id) => {
  return request({
    url: `/notification/delete/${id}`,
    method: "delete",
  })
}

export const useDeleteNotification = (onSuccess, onError) => {
  return useMutation(deleteNotification, {
    onSuccess,
    onError,
  })
}

// GET Notification Types
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

// POST Add Notification Type
const addNotificationType = (data) => {
  return request({
    url: "/notification_type/add",
    method: "post",
    data,
  })
}

export const useAddNotificationType = (onSuccess, onError) => {
  return useMutation(addNotificationType, {
    onSuccess,
    onError,
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
    onSuccess: (response) => {
      return response
    },
    onError: (error) => {
      return error
    },
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
    onSuccess: (response) => {
      return response
    },
    onError: (error) => {
      return error
    },
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

export const useFetchPDF = (onSuccess, onError) => {
  return useMutation(fetchPDF, {
    onSuccess,
    onError,
  })
}

// PUT Notification Archive
const putNotificationArchive = (id) => {
  return request({
    url: `/notification/archive/${id}`,
    method: "put",
  })
}

export const usePutNotificationArchive = (onSuccess, onError) => {
  return useMutation(putNotificationArchive, {
    onSuccess,
    onError,
  })
}
