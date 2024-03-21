import React from "react"
import PublicDashboard from "./PublicDashboard"
import { Button, Card, CardBody, Col, Container, Row } from "react-bootstrap"
import { BsClipboard2DataFill } from "react-icons/bs"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
  // Hooks
  const navigate = useNavigate()

  // Handlers
  const handleViewDetails = (type) => {
    navigate("/dashboard/summary", {
      state: { type: type },
    })
  }

  return (
    <Container fluid className="mb-4">
      <PublicDashboard />
      <hr />
      <h2 className="text-center">Detailed Summary</h2>
      <div className="text-center bg-light p-3">
        <Row>
          <Col sm={6} className="mb-3">
            <h3 className="my-4">Monthly Verified Applications </h3>
            <BsClipboard2DataFill fontSize={150} />
            <br />
            <Button
              size="md"
              className="btn btn-primary mt-3"
              onClick={() => navigate("/dashboard/monthly")}
            >
              View Details
            </Button>
          </Col>
          <Col sm={6}>
            <Row>
              <Col sm={6} className="mb-2">
                <Card border="success">
                  <CardBody className="p-2">
                    <p className="m-0 fw-bold fs-4">Divisions</p>
                    <p className="m-0 fs-6">Total number of Divisions</p>
                    <p className="m-0 fw-bold fs-3">4</p>
                    <Button
                      variant="outline-success"
                      size="sm"
                      onClick={() => handleViewDetails("division")}
                    >
                      View Details
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col sm={6} className="mb-2">
                <Card border="warning">
                  <CardBody className="p-2">
                    <p className="m-0 fw-bold fs-4">Districts</p>
                    <p className="m-0 fs-6">Total number of Districts</p>
                    <p className="m-0 fw-bold fs-3">12</p>
                    <Button
                      variant="outline-warning"
                      size="sm"
                      onClick={() => handleViewDetails("district")}
                    >
                      View Details
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col sm={6} className="mb-2">
                <Card border="primary">
                  <CardBody className="p-2">
                    <p className="m-0 fw-bold fs-4">Ranges</p>
                    <p className="m-0 fs-6">Total number of Ranges</p>
                    <p className="m-0 fw-bold fs-3">18</p>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() => handleViewDetails("range")}
                    >
                      View Details
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default Dashboard
