import { useMutation, useQuery } from 'react-query'
import { request } from '../../components/utils/request'

// GET Notifications
const fetchNotifications = () => {
  return request({
    url: '/notification/getAllNotification',
    method: 'get',
  })
}

export const useFetchNotifications = (onSuccess, onError) => {
  return useQuery('get-notifications', () => fetchNotifications(), {
    onSuccess,
    onError,
  })
}

// POST Add Notification
const addNotification = (data) => {
  return request({
    url: '/notification/add',
    method: 'post',
    data,
  })
}

export const useAddNotification = (onSuccess, onError) => {
  return useMutation(addNotification, {
    onSuccess,
    onError,
  })
}

// GET Notification Types
const fetchNotificationTypes = () => {
  return request({
    url: '/notification_type/get',
    method: 'get',
  })
}

export const useFetchNotificationTypes = (onSuccess, onError) => {
  return useQuery('get-notification-types', () => fetchNotificationTypes(), {
    onSuccess,
    onError,
  })
}

// POST Add Notification Type
const addNotificationType = (data) => {
  return request({
    url: '/notification_type/add',
    method: 'post',
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
    url: '/notification/getAllArchive',
    method: 'get',
  })
}

export const useFetchNotificationArchive = (onSuccess, onError) => {
  return useQuery('get-archive', () => fetchNotificationArchive(), {
    onSuccess,
    onError,
  })
}

// GET Archived Notification
const fetchPDF = (id) => {
  return request({
    url: `/notification/download/${id}`,
    method: 'get',
    responseType: 'blob',
  })
}

export const useFetchPDF = (id) => {
  return useQuery(['get-PDF', id], () => fetchPDF(id), {
    onSuccess: (response) => {
      const fileURL = window.URL.createObjectURL(response.data)
      const link = document.createElement('a')
      link.href = fileURL
      link.target = '_blank'
      link.click()
    },
    onError: (error) => {
      return error
    },
  })
}

// PUT Notification Archive
const putNotificationArchive = (id) => {
  return request({
    url: `/notification/archive/${id}`,
    method: 'put',
  })
}

export const usePutNotificationArchive = (onSuccess, onError) => {
  return useMutation(putNotificationArchive, {
    onSuccess,
    onError,
  })
}
