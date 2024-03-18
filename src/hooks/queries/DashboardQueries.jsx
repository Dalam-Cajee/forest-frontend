import { useMutation, useQuery } from "react-query"
import { request } from "../../components/utils/request"

// GET Service Plus Status
const fetchServicePlusStatus = () => {
  return request({
    url: "/servicePlusStatus",
    method: "get",
  })
}

export const useFetchServicePlusStatus = (onSuccess, onError) => {
  return useQuery("get-servicePlus-status", () => fetchServicePlusStatus(), {
    onSuccess,
    onError,
  })
}

// GET Application Count Division-wise
const fetchDivisionWiseApplicationCount = () => {
  return request({
    url: "/public/getDivisionWiseApplicationCount",
    method: "get",
  })
}

export const useFetchDivisionWiseApplicationCount = (onSuccess, onError) => {
  return useQuery(
    "get-applicationCount-divisionWise",
    () => fetchDivisionWiseApplicationCount(),
    {
      onSuccess,
      onError,
    }
  )
}

// GET Application Count District-wise
const fetchDistrictWiseApplicationCount = () => {
  return request({
    url: "/public/getDistrictWiseApplicationCount",
    method: "get",
  })
}

export const useFetchDistrictWiseApplicationCount = (onSuccess, onError) => {
  return useQuery(
    "get-applicationCount-districtWise",
    () => fetchDistrictWiseApplicationCount(),
    {
      onSuccess,
      onError,
    }
  )
}

// GET Application Count Range-wise
const fetchRangeWiseApplicationCount = () => {
  return request({
    url: "/public/getRangeWiseApplicationCount",
    method: "get",
  })
}

export const useFetchRangeWiseApplicationCount = (onSuccess, onError) => {
  return useQuery(
    "get-applicationCount-rangeWise",
    () => fetchRangeWiseApplicationCount(),
    {
      onSuccess,
      onError,
    }
  )
}
