import React from 'react'
import { Container, Table } from 'react-bootstrap'

const ManAnimalConflict = () => {
  return (
    <Container>
      <h2>Man-Animal Conflict</h2>
      <h4>Wildlife Depredation</h4>
      <p>
        The major cause of depredation in the State is attributed to higher
        population of elephants and inadequate and fragmented habitats. Their
        food and water requirement being very high, elephants have to traverse
        extensively through fragmented forests often through human habitations
        and cultivations to fulfil their needs. This invariably results in
        man-animal conflict. The Department carries out protection measures and
        promotes eco-friendly activities to reduce such conflict and ameliorate
        the suffering of people living in and around elephant habitat through
        various measures.
      </p>
      <p>
        Anti-depredation measures include elephant scaring operation, setting up
        of voluntary protection squads, construction of physical barriers such
        as sausage barriers and provides ex-gratia relief to wildlife
        depredation victims. In addition to these measures, people are being
        encouraged to adopt such agricultural practices that will not attract
        wildlife constantly.
      </p>
      <h4>Details on Depredation Cases:-</h4>
      <Table striped bordered>
        <thead className='table-dark'>
          <tr>
            <th rowSpan={2}>Year</th>
            <th colSpan={2}>Crop Damages</th>
            <th rowSpan={2}>No. of human death</th>
            <th rowSpan={2}>No. of human injury</th>
            <th rowSpan={2}>Livestock killed</th>
          </tr>
          <tr>
            <th>No. of cases</th>
            <th>Area involved (in Ha)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2013</td>
            <td>2019</td>
            <td>853.53</td>
            <td>5</td>
            <td>3</td>
            <td>17</td>
          </tr>
          <tr>
            <td>2014</td>
            <td>1921</td>
            <td>596.08</td>
            <td>8</td>
            <td>4</td>
            <td>1</td>
          </tr>
          <tr>
            <td>2015</td>
            <td>2559</td>
            <td>1495.624</td>
            <td>5</td>
            <td>6</td>
            <td>-</td>
          </tr>
          <tr>
            <td>2016</td>
            <td>1554</td>
            <td>512.48</td>
            <td>6</td>
            <td>5</td>
            <td>-</td>
          </tr>
          <tr>
            <td>2017</td>
            <td>1328</td>
            <td>450.506</td>
            <td>6</td>
            <td>3</td>
            <td>-</td>
          </tr>
        </tbody>
      </Table>
      <h4>Ex-gratia paid under CSS and State Funds:-</h4>
      <Table striped bordered>
        <thead className='table-dark'>
          <tr>
            <th>Source of Fund</th>
            <th>2014-15</th>
            <th>2015-16</th>
            <th>2016-17</th>
            <th>2017-18</th>
            <th>2018-19</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CSS-Project Elephant</td>
            <td>53,05,000</td>
            <td>15,00,000</td>
            <td>30,52,000</td>
            <td>30,00,000</td>
            <td>41,00,000</td>
          </tr>
          <tr>
            <td>CSS-Integrated Development of Wildlife Habitat</td>
            <td>2,00,000</td>
            <td>5,50,000</td>
            <td>10,00,000</td>
            <td>10,00,000</td>
            <td>9,00,000</td>
          </tr>
          <tr>
            <td>Establishment Expenditure</td>
            <td>15,00,000</td>
            <td>12,56,000</td>
            <td>12,61,600</td>
            <td>11,85,000</td>
            <td>14,95,000</td>
          </tr>
          <tr>
            <td>CAMPA</td>
            <td>-</td>
            <td>2,20,00,000</td>
            <td>-</td>
            <td>-</td>
            <td>15,00,000</td>
          </tr>
          <tr className='fw-bold'>
            <td>Total</td>
            <td>70,05,000</td>
            <td>2,53,06,000</td>
            <td>53,13,600</td>
            <td>51,85,000</td>
            <td>79,95,000</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}

export default ManAnimalConflict
