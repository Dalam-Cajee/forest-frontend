import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {
  useFetchDistrictWiseApplicationCount,
  useFetchDivisionWiseApplicationCount,
  useFetchRangeWiseApplicationCount,
  useFetchServicePlusStatus,
} from '../../hooks/queries/DashboardQueries'
import MyCardSP from '../../components/core/MyCardSP'
// Import Chart to be able to use React-ChartJs-2
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
import { Pie } from 'react-chartjs-2'

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
  const fetchDistrictWiseApplicationCount =
    useFetchDistrictWiseApplicationCount(onSuccess, onError)
  const fetchRangeWiseApplicationCount = useFetchRangeWiseApplicationCount(
    onSuccess,
    onError
  )
  const fetchDivisionWiseApplicationCount =
    useFetchDivisionWiseApplicationCount(onSuccess, onError)

  //  Range-wise Application Count - Pie Chart
  let DivisionData = {
    labels: fetchDivisionWiseApplicationCount?.data?.data?.map(
      (division) => division.name
    ),
    datasets: [
      {
        label: 'Number of Applications Division Wise',
        data: fetchDivisionWiseApplicationCount?.data?.data?.map(
          (division) => division.application_count
        ),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderWidth: 1,
      },
    ],
  }

  //  Range-wise Application Count - Bar Graph
  let RangeData = {
    labels: fetchRangeWiseApplicationCount?.data?.data?.map(
      (range) => range.range_name
    ),
    datasets: [
      {
        label: 'Number of Applications Range Wise',
        data: fetchRangeWiseApplicationCount?.data?.data?.map(
          (range) => range.application_count
        ),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderWidth: 1,
      },
    ],
  }

  // District-wise Application Count - Bar Graph
  let DistrictData = {
    labels: fetchDistrictWiseApplicationCount?.data?.data?.map(
      (district) => district.district_name
    ),
    datasets: [
      {
        label: 'Number of Applications District Wise',
        data: fetchDistrictWiseApplicationCount?.data?.data?.map(
          (district) => district.application_count
        ),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderWidth: 1,
      },
    ],
  }
  // Options for Pie Chart, Bar Graph
  var options = {
    maintainAspectRatio: false,
    responsive: true,
  }

  return (
    <Container>
      <h2 className='text-center fw-bold'>Application Status</h2>
      {/* Applications Status */}
      <Row className='text-center '>
        {/* Submitted */}
        <div className='col-lg-3 p-4'>
          <MyCardSP
            icons='Person'
            description='Total Application Submitted'
            count={fetchServicePlusStatus?.data?.data[0]?.Submitted}
          />
        </div>
        {/* Verified */}
        <div className='col-lg-3 p-4'>
          <MyCardSP
            icons='Verified'
            description='Total Application Verified'
            count={fetchServicePlusStatus?.data?.data[0]?.Delievered}
          />
        </div>
        {/* Pending */}
        <div className='col-lg-3 p-4'>
          <MyCardSP
            icons='Pending'
            description='Application Pending'
            count={fetchServicePlusStatus?.data?.data[0]?.Pending}
          />
        </div>
        {/* Rejected */}
        <div className='col-lg-3 p-4'>
          <MyCardSP
            icons='Reject'
            description='Application Rejected'
            count={fetchServicePlusStatus?.data?.data[0]?.Rejected}
          />
        </div>
      </Row>
      <hr />
      <Row className='my-4 text-center'>
        <h3 className='text-center '>Division-wise Application Count</h3>
        <Col md={6}>
          <Row>
            <Col md={6} className='p-3'>
              <MyCardSP
                description={
                  fetchDivisionWiseApplicationCount?.data?.data[0]?.name
                }
                count={
                  fetchDivisionWiseApplicationCount?.data?.data[0]
                    ?.application_count
                }
              />
            </Col>
            <Col md={6} className='p-3'>
              <MyCardSP
                description={
                  fetchDivisionWiseApplicationCount?.data?.data[1]?.name
                }
                count={
                  fetchDivisionWiseApplicationCount?.data?.data[1]
                    ?.application_count
                }
              />
            </Col>
          </Row>
          <Row>
            <Col md={6} className='p-3'>
              <MyCardSP
                description={
                  fetchDivisionWiseApplicationCount?.data?.data[2]?.name
                }
                count={
                  fetchDivisionWiseApplicationCount?.data?.data[2]
                    ?.application_count
                }
              />
            </Col>
            <Col md={6} className='p-3'>
              <MyCardSP
                description={
                  fetchDivisionWiseApplicationCount?.data?.data[3]?.name
                }
                count={
                  fetchDivisionWiseApplicationCount?.data?.data[3]
                    ?.application_count
                }
              />
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <div className='pie-height mt-3'>
            <Pie data={DivisionData} options={options} />
          </div>
        </Col>
      </Row>

      {/* Application Count Graphical Representation*/}
      <div className='row my-5 text-center'>
        {/* Range-wise Application Count - Bar Graph */}
        <div className='col-md-6 col-sm-10 h-100'>
          <h3 className='my-4'>Range-wise Application Count</h3>
          <div className='bar-height'>
            <Bar data={RangeData} options={options} />
          </div>
        </div>
        {/* District-wise Application Count - Bar Graph */}
        <div className='col-md-6 col-sm-10 h-100'>
          <h3 className='my-4'>District-wise Application Count</h3>
          <div className='bar-height'>
            <Bar data={DistrictData} options={options} />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default PublicDashboard
