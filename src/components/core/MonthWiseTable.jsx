import React from "react"
import { Container, Table } from "react-bootstrap"
import {
  useFetchDistrictMonthWise,
  useFetchDivisionMonthWise,
  useFetchRangeMonthWise,
} from "../../hooks/queries/DashboardQueries"

const MonthWiseTable = ({ type }) => {
  // Functions
  const onSuccess = (response) => {
    return response
  }
  const onError = (error) => {
    return error
  }

  // Hooks
  // Dashboard Queries
  const fetchDistrictMonthWise = useFetchDistrictMonthWise(onSuccess, onError)
  const fetchDivisionMonthWise = useFetchDivisionMonthWise(onSuccess, onError)
  const fetchRangeMonthWise = useFetchRangeMonthWise(onSuccess, onError)

  // Constants
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Sepetember",
    "October",
    "November",
    "December",
  ]

  return (
    <Table striped bordered responsive>
      <thead>
        <tr>
          <th>District/Month</th>
          {months?.map((month, key) => {
            return <th key={key}>{month}</th>
          })}
        </tr>
      </thead>
      <tbody>
        {type === "district" ? (
          fetchDistrictMonthWise?.data?.data ? (
            fetchDistrictMonthWise?.data?.data?.map((district, key) => {
              return (
                <tr key={key}>
                  <td className="text-center">{district.districtname}</td>
                  <td>{district.january}</td>
                  <td>{district.february}</td>
                  <td>{district.march}</td>
                  <td>{district.april}</td>
                  <td>{district.may}</td>
                  <td>{district.june}</td>
                  <td>{district.july}</td>
                  <td>{district.august}</td>
                  <td>{district.september}</td>
                  <td>{district.october}</td>
                  <td>{district.november}</td>
                  <td>{district.december}</td>
                </tr>
              )
            })
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                --- No Data Available ---
              </td>
            </tr>
          )
        ) : type === "division" ? (
          fetchDivisionMonthWise?.data?.data ? (
            fetchDivisionMonthWise?.data?.data?.map((division, key) => {
              return (
                <tr key={key}>
                  <td className="text-center">{division.divisionname}</td>
                  <td>{division.january}</td>
                  <td>{division.february}</td>
                  <td>{division.march}</td>
                  <td>{division.april}</td>
                  <td>{division.may}</td>
                  <td>{division.june}</td>
                  <td>{division.july}</td>
                  <td>{division.august}</td>
                  <td>{division.september}</td>
                  <td>{division.october}</td>
                  <td>{division.november}</td>
                  <td>{division.december}</td>
                </tr>
              )
            })
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                --- No Data Available ---
              </td>
            </tr>
          )
        ) : fetchRangeMonthWise?.data?.data ? (
          fetchRangeMonthWise?.data?.data?.map((range, key) => {
            return (
              <tr key={key}>
                <td className="text-center">{range.rangename}</td>
                <td>{range.january}</td>
                <td>{range.february}</td>
                <td>{range.march}</td>
                <td>{range.april}</td>
                <td>{range.may}</td>
                <td>{range.june}</td>
                <td>{range.july}</td>
                <td>{range.august}</td>
                <td>{range.september}</td>
                <td>{range.october}</td>
                <td>{range.november}</td>
                <td>{range.december}</td>
              </tr>
            )
          })
        ) : (
          <tr>
            <td colSpan="6" className="text-center">
              --- No Data Available ---
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  )
}

export default MonthWiseTable
