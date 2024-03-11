import { useMutation, useQuery } from "react-query"
import { request } from "../../components/utils/request"

// Get All Gallery Photos
const fetchGallery = () => {
  return request({
    url: "/gallery/getAllGallery",
    method: "get",
  })
}

export const useFetchGallery = (onSuccess, onError) => {
  return useQuery("get-gallery", () => fetchGallery(), {
    onSuccess,
    onError,
  })
}

// Add Gallery Photos
const addGalleryPhotos = (data) => {
  return request({
    url: "/gallery/add",
    method: "post",
    data,
  })
}

export const useAddGalleryPhotos = (onSuccess, onError) => {
  return useMutation(addGalleryPhotos, {
    onSuccess,
    onError,
  })
}

// Get Gallery Category
const fetchGalleryCategory = () => {
  return request({
    url: "/galleryType/get",
    method: "get",
  })
}

export const useFetchGalleryCategory = (onSuccess, onError) => {
  return useQuery("get-galleryCategory", () => fetchGalleryCategory(), {
    onSuccess,
    onError,
  })
}

// Add Gallery Category
const addGalleryCategory = (data) => {
  return request({
    url: "/galleryType/add",
    method: "post",
    data,
  })
}

export const useAddGalleryCategory = (onSuccess, onError) => {
  return useMutation(addGalleryCategory, {
    onSuccess,
    onError,
  })
}
