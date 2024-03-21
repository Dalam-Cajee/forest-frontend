import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { BsArrowLeft } from 'react-icons/bs'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import {
  useFetchApplicationsByDistrict,
  useFetchApplicationsByDivision,
  useFetchApplicationsByRange,
  useFetchServicePlusDistrictWiseStatus,
} from '../../hooks/queries/DashboardQueries'
import MyCardSP from '../../components/core/MyCardSP'
import MyDataTable from '../../components/core/MyDataTable'

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

  if (!location.state) return <Navigate to='/dashboard' />
  const id = location.state.id
  const name = location.state.name
  const type = location.state.type
  // Dashboard Queries
  // const servicePlusStatus = useFetchServicePlusDistrictWiseStatus(
  //   id,
  //   onSuccess,
  //   onError
  // )
  const divisionApplications = useFetchApplicationsByDivision(
    2,
    onSuccess,
    onError
  )
  const districtApplications = useFetchApplicationsByDistrict(
    740,
    onSuccess,
    onError
  )
  const rangeApplications = useFetchApplicationsByRange(
    2360261,
    onSuccess,
    onError
  )

  // Constants
  const divisionData = divisionApplications?.data?.data
  const districtData = districtApplications?.data?.data
  const rangeData = rangeApplications?.data?.data

  return (
    <Container fluid className='my-3'>
      <Button variant='outline' onClick={() => navigate(-1)}>
        <BsArrowLeft fontSize={30} />
      </Button>
      <h2 className='text-center fw-bold'>Application Status </h2>
      <Container fluid>
        {/* Applications Status */}
        <Row className='text-center'>
          {/* Submitted */}
          <div className='col-lg-3 p-4'>
            <MyCardSP
              icons='Person'
              description='Total Application Submitted'
              // count={servicePlusStatus?.data?.data[0]?.Submitted}
              count={60}
            />
          </div>
          {/* Verified */}
          <div className='col-lg-3 p-4'>
            <MyCardSP
              icons='Verified'
              description='Total Application Delivered'
              // count={servicePlusStatus?.data?.data[0]?.Delievered}
              count={49}
            />
          </div>
          {/* Pending */}
          <div className='col-lg-3 p-4'>
            <MyCardSP
              icons='Pending'
              description='Application Pending'
              // count={servicePlusStatus?.data?.data[0]?.Pending}
              count={9}
            />
          </div>
          {/* Rejected */}
          <div className='col-lg-3 p-4'>
            <MyCardSP
              icons='Reject'
              description='Application Rejected'
              // count={servicePlusStatus?.data?.data[0]?.Rejected}
              count={2}
            />
          </div>
        </Row>
        <hr />
        <h3 className='text-center mb-3'>Application Details - {name}</h3>
        {type === 'division' ? (
          <MyDataTable data={divisionData} />
        ) : type === 'district' ? (
          <MyDataTable data={districtData} />
        ) : type === 'range' ? (
          <MyDataTable data={rangeData} />
        ) : null}
      </Container>
    </Container>
  )
}

export default ApplicationStatus
