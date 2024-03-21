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

// GET Service Plus District-wise Status
const fetchServicePlusDistrictWiseStatus = (id) => {
  return request({
    url: `/servicePlus/district/data/${id}`,
    method: "get",
  })
}

export const useFetchServicePlusDistrictWiseStatus = (
  id,
  onSuccess,
  onError
) => {
  return useQuery(
    ["get-servicePlusDistrictWise-status", id],
    () => fetchServicePlusDistrictWiseStatus(id),
    {
      onSuccess,
      onError,
    }
  )
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

// GET District Month-wise Application
const fetchDistrictMonthWise = () => {
  return request({
    url: "/public/getApplicationsCountForAllMonthForAllTheDistricts",
    method: "get",
  })
}

export const useFetchDistrictMonthWise = (onSuccess, onError) => {
  return useQuery("get-district-monthWise", () => fetchDistrictMonthWise(), {
    onSuccess,
    onError,
  })
}

// GET Division Month-wise Application
const fetchDivisionMonthWise = () => {
  return request({
    url: "/public/getApplicationsCountForAllMonthForAllTheDivisions",
    method: "get",
  })
}

export const useFetchDivisionMonthWise = (onSuccess, onError) => {
  return useQuery("get-division-monthWise", () => fetchDivisionMonthWise(), {
    onSuccess,
    onError,
  })
}

// GET Range Month-wise Application
const fetchRangeMonthWise = () => {
  return request({
    url: "/public/getApplicationsCountForAllMonthForAllTheRanges",
    method: "get",
  })
}

export const useFetchRangeMonthWise = (onSuccess, onError) => {
  return useQuery("get-range-monthWise", () => fetchRangeMonthWise(), {
    onSuccess,
    onError,
  })
}
