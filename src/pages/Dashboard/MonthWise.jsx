import React from "react"
import MonthWiseTable from "../../components/core/MonthWiseTable"
import { Button, CloseButton, Container, Tab, Tabs } from "react-bootstrap"
import { BsArrowLeft } from "react-icons/bs"
import { useNavigate } from "react-router-dom"

const MonthWise = () => {
  // Hooks
  const navigate = useNavigate()

  return (
    <Container fluid className="my-4">
      <Button variant="outline" onClick={() => navigate(-1)}>
        <BsArrowLeft fontSize={30} />
      </Button>
      <h3 className="text-center mb-4">Monthly Verified Applications</h3>
      {/* Tabs */}
      <Tabs fill defaultActiveKey="division" className="custom-nav mb-3">
        {/* Division */}
        <Tab eventKey="division" title="Division">
          <MonthWiseTable type="division" />
        </Tab>
        {/* Districts */}
        <Tab eventKey="district" title="District">
          <MonthWiseTable type="district" />
        </Tab>
        {/* Range */}
        <Tab eventKey="range" title="Range">
          <MonthWiseTable type="range" />
        </Tab>
      </Tabs>
    </Container>
  )
}

export default MonthWise
