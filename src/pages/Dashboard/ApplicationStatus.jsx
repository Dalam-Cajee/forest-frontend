import React from "react"
import { Button, Container } from "react-bootstrap"
import { BsArrowLeft } from "react-icons/bs"
import { Navigate, useLocation, useNavigate } from "react-router-dom"
import { useFetchServicePlusDistrictWiseStatus } from "../../hooks/queries/DashboardQueries"

const ApplicationStatus = () => {
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
  const servicePlusStatus = useFetchServicePlusDistrictWiseStatus(
    740,
    onSuccess,
    onError
  )

  if (!location.state) return <Navigate to="/dashboard" />
  const name = location.state.name

  return (
    <Container fluid className="my-3">
      <Button variant="outline" onClick={() => navigate(-1)}>
        <BsArrowLeft fontSize={30} />
      </Button>
      <h2 className="text-center bg-light mb-3">Application Status </h2>
      <Container fluid className="p-4">
        <h4 className="text-center">
          Details For - <strong>{name}</strong>
        </h4>
      </Container>
    </Container>
  )
}

export default ApplicationStatus
