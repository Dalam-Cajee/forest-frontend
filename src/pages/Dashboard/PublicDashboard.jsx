import React from 'react'
import { Container } from 'react-bootstrap'
import { BsPersonFill } from 'react-icons/bs'
import { BsCheck2Circle } from 'react-icons/bs'
import { BsClockHistory } from 'react-icons/bs'
import { BsX } from 'react-icons/bs'
import { useFetchServicePlusStatus } from '../../hooks/queries/DashboardQueries'

const PublicDashboard = () => {
  // Functions
  const onSuccess = (response) => {
    return response
  }
  const onError = (error) => {
    return error
  }

  // Hooks
  // Dashboard Queries
  const fetchServicePlusStatus = useFetchServicePlusStatus(onSuccess, onError)

  return (
    <Container>
      <h1 className='display-4 text-center fw-bold'>Dashboard</h1>
    </Container>
  )
}

export default PublicDashboard
