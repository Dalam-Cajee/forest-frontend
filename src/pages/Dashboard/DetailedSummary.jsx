import React from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { BsArrowLeft } from "react-icons/bs"
import { Navigate, useLocation, useNavigate } from "react-router-dom"
import {
  useFetchDistrictWiseApplicationCount,
  useFetchDivisionWiseApplicationCount,
  useFetchRangeWiseApplicationCount,
} from "../../hooks/queries/DashboardQueries"
import MyCard from "../../components/core/MyCard"

const DetailedSummary = () => {
  // Functions
  const onSuccess = (response) => {
    return response
  }
  const onError = (error) => {
    return error
  }

  // Hooks
  const location = useLocation()
  const navigate = useNavigate()
  // Dashboard Queries
  const divisonApplicationCount = useFetchDivisionWiseApplicationCount(
    onSuccess,
    onError
  )
  const districtApplicationCount = useFetchDistrictWiseApplicationCount(
    onSuccess,
    onError
  )
  const rangeApplicationCount = useFetchRangeWiseApplicationCount(
    onSuccess,
    onError
  )

  if (!location.state) return <Navigate to="/dashboard" />
  const type = location.state.type

  return (
    <Container fluid className="my-3">
      <Button variant="outline" onClick={() => navigate(-1)}>
        <BsArrowLeft fontSize={30} />
      </Button>
      <h2 className="text-center bg-light mb-3">Detailed Summary</h2>
      <Container fluid className="p-4">
        <Row>
          {/* Division Summary */}
          {type === "division"
            ? divisonApplicationCount?.data?.data?.map((division, key) => {
                return (
                  <Col key={key} sm={4} className="mb-3">
                    <MyCard
                      variant="outline-success"
                      title={division.name}
                      description="Total number of Verified Applications"
                      count={division.application_count}
                      name={division.name}
                      id={division.id}
                      type={type}
                    />
                  </Col>
                )
              })
            : // District Summary
            type === "district"
            ? districtApplicationCount?.data?.data?.map((district, key) => {
                return (
                  <Col key={key} sm={4} className="mb-3">
                    <MyCard
                      variant="outline-success"
                      title={district.district_name}
                      description="Total number of Verified Applications"
                      count={district.application_count}
                      name={district.district_name}
                      id={district.district_code}
                      type={type}
                    />
                  </Col>
                )
              })
            : // Range Summary
            type === "range"
            ? rangeApplicationCount?.data?.data?.map((range, key) => {
                return (
                  <Col key={key} sm={4} className="mb-3">
                    <MyCard
                      variant="outline-success"
                      title={range.range_name}
                      description="Total number of Verified Applications"
                      count={range.application_count}
                      name={range.range_name}
                      id={range.range_id}
                      type={type}
                    />
                  </Col>
                )
              })
            : null}
        </Row>
      </Container>
    </Container>
  )
}

export default DetailedSummary
