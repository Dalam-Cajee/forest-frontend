import { useMutation, useQuery } from "react-query"
import { request } from "../../components/utils/request"

// GET Documents
const fetchDocuments = () => {
  return request({
    url: "/document/getAllDocument",
    method: "get",
  })
}

export const useFetchDocuments = (onSuccess, onError) => {
  return useQuery("get-documents", () => fetchDocuments(), {
    onSuccess,
    onError,
  })
}

// POST Add Documents
const addDocument = (data) => {
  return request({
    url: "/document/add",
    method: "post",
    data,
  })
}

export const useAddDocument = (onSuccess, onError) => {
  return useMutation(addDocument, {
    onSuccess,
    onError,
  })
}

// GET Document Types
const fetchDocumnentTypes = () => {
  return request({
    url: "/documentType/get",
    method: "get",
  })
}

export const useFetchDocumnentTypes = (onSuccess, onError) => {
  return useQuery("get-documnentTypes", () => fetchDocumnentTypes(), {
    onSuccess,
    onError,
  })
}

// POST Add Notification Type
const addDocumentType = (data) => {
  return request({
    url: "/documentType/add",
    method: "post",
    data,
  })
}

export const useAddDocumentType = (onSuccess, onError) => {
  return useMutation(addDocumentType, {
    onSuccess,
    onError,
  })
}
