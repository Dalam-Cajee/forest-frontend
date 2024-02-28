import React from "react"
import { Container, Table } from "react-bootstrap"

const ReservedForest = () => {
  return (
    <Container>
      <h2>Forest Administration</h2>
      <p>
        The Forest Department has been compartmented into four Circles/Wings
        based on jurisdiction and nature of activities. They are the Territorial
        Circle, the Wildlife Circle, the Social Forestry and Environment Circle
        and the Climate Change, Research and Training Circle.
      </p>
      <h4>Territorial Wing</h4>
      <p>
        Its primary activities are enforcement of various Forest Regulations and
        Rules, protection of the Reserved/Protected Forests, granting mining
        leases/quarry permits for minor minerals under Meghalaya Minor Mineral
        Concession Rules, 2016 collection of Forest Revenue and regulation of
        Wood Based Industries.
      </p>
      <p>
        The Territorial Wing is headed by the Principal Chief Conservator of
        Forests (Territorial). He is assisted by the Additional Principal Chief
        Conservator of Forests (T), Chief Conservator of Forests (T) and two
        supervisory level officers viz., Conservator of Forests (T), Shillong
        and Conservator of Forests (T), Tura, who supervises and control
        officers in the rank of Divisional Forest Officers in-charge of
        Territorial Divisions. There are 6 (Six) Territorial Divisions viz.,
      </p>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Division</th>
            <th>Jurisdiction</th>
            <th>Contact Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>East Khasi Hills & Ri-Bhoi Territorial Division, Shillong</td>
            <td>East Khasi Hills District and Ri-Bhoi District</td>
            <td>0364-2226375</td>
          </tr>
          <tr>
            <td>Jaintia Hills Territorial Division, Jowai</td>
            <td>East Jaintia Hills and West Jaintia Hills Districts</td>
            <td>03652-223709</td>
          </tr>
          <tr>
            <td>West and South West Garo Hills Territorial Division, Tura</td>
            <td>West and South West Garo Hills Districts</td>
            <td>03651-223850</td>
          </tr>
          <tr>
            <td>East & North Garo Hills Territorial Division, Williamnagar</td>
            <td>East Garo Hills District and North Garo Hills Districts</td>
            <td></td>
          </tr>
          <tr>
            <td>
              South Garo Hills Territorial and Social Forestry Division,
              Baghmara
            </td>
            <td>South Garo hills District</td>
            <td></td>
          </tr>
          <tr>
            <td>
              West and South West Khasi Hills Territorial and Social Forestry
              Division, Nongstoin
            </td>
            <td>
              West Khasi hills District and South West Khasi Hills District
            </td>
            <td>9436998562</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}

export default ReservedForest
