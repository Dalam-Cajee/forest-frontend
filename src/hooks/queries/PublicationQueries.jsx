import { useMutation, useQuery, useQueryClient } from "react-query"
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

// GET Documents based on document Type ID
const fetchDocumentByID = (id) => {
  return request({
    url: `/document/getDocument/${id}`,
    method: "get",
  })
}

export const useFetchDocumentByID = (id) => {
  return useQuery(["get-document", id], () => fetchDocumentByID(id), {
    onSuccess: (response) => {
      return response
    },
    onError: (error) => {
      return error
    },
  })
}

// GET Published Document (Download)
const fetchPublishPDF = (id) => {
  return request({
    url: `/document/download/${id}`,
    method: "get",
    responseType: "blob",
  })
}

export const useFetchPublishPDF = (onSuccess, onError) => {
  return useMutation(fetchPublishPDF, {
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
  const queryClient = useQueryClient()
  return useMutation(addDocument, {
    onSuccess: () => {
      queryClient.invalidateQueries("get-documents")
    },
    onError,
  })
}

// DELETE Document
const deleteDocument = (id) => {
  return request({
    url: `/document/delete/${id}`,
    method: "delete",
  })
}

export const useDeleteDocument = (onSuccess, onError) => {
  return useMutation(deleteDocument, {
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
