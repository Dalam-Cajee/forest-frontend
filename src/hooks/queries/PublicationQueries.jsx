import { useMutation, useQuery } from "react-query"
import { request } from "../../components/utils/request"

// Get All Documents
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

// Add Documents
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

// Get Document Types
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

// Add Notification Type
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
