import React from 'react'
import {
  Col,
  Container,
  FigureCaption,
  Image,
  Row,
  Table,
} from 'react-bootstrap'
import seedling1 from '../../assets/PublicInterface/pi_seedlings01.jpg'
import seedling2 from '../../assets/PublicInterface/pi_seedlings02.jpg'
import seedling3 from '../../assets/PublicInterface/pi_seedlings03.jpg'

const Seedlings = () => {
  return (
    <Container>
      <h2>Forest Nurseries</h2>
      <p>
        In order to facilitate raising of planting stock required under various
        schemes and for public distribution of seedlings , over the years most
        of Divisions, especially those in the Social Forestry & Territorial
        Circle have established permanent nurseries at various locations.
        Details of permanent nurseries available at various divisions are given
        below:-
      </p>
      <Table striped bordered>
        <thead className='table-dark text-center'>
          <tr>
            <th>Sl.No. </th>
            <th>Name of Division</th>
            <th>Location of Nursery</th>
          </tr>
          <tr className='text-center'>
            <th>1</th>
            <th>2</th>
            <th>3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              East Khasi Hills &amp; Ri-Bhoi District Territorial Division,
              Shillong
            </td>
            <td>Riat Laban Forest Nursery- Shillong, </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jaintia Hills Territorial Division. Jowai</td>
            <td>
              Forest Colony Jowai, Thadlaskein, Saitsama, Saphai, Saipung,
              Saiha, Wahkoh, Apha, Kynjlat &amp; Jaliakhola{' '}
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>East Khasi Hills Social Forestry Division, Shillong</td>
            <td>Forest Colony Polo - Shillong</td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              West Khasi Hills &amp; South West Khasi Hills Territorial &amp;
              Social Forestry Division, Nongstoin
            </td>
            <td>Mawaiban-Nongstoin.</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Ri-Bhoi District Social Forestry Division Nongpoh</td>
            <td>
              Lad Umroi- Umiam (1.00 ha.), Pahamsyiem (1.00 ha.), Ioosohksang
              (1.00 ha.) &amp; Umsiang (1.00 ha.)
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Jaintia Hills Social Forestry Division, Jowai</td>
            <td>
              Jowai (0.5574 ha.), Khliehriat (o.30 ha.), Namdong (0.40 ha.),
              Shangpung (0.75 ha.) &amp; Amlarem (0.20 ha.)
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>East Garo Hills Social Forestry Division, Williamnagar</td>
            <td>
              Williamnagar (2.00 ha.), Darugiri (100 sqm.), Bajengdoba (100 sqm)
              &amp; Kharkutta (100 sqm)
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>Khasi Hills Wildlife Division, Shillong</td>
            <td>Internal Nursery of Lady Hydari park</td>
          </tr>
        </tbody>
      </Table>
      <p>
        In the recent past significant progress has been made in the field of
        nursery technology. Improved nursery practices developed by various
        researchers and field functionaries over the years can play significant
        role in enhancing the quality of planting stock raised in nurseries,
        which in turn can greatly help in increasing productivity of various
        forestry interventions. However, such improved nursery practices are yet
        to fully percolate to the departmental nurseries having skeletal
        infrastructure. Root trainer and compost production techniques, both
        aerobic as vermi-compost, which are highly appropriate for the state
        having steep hilly terrain and abundant availability of green biomass
        are required in the departmental nurseries.
      </p>
      <h4>
        The Department has set up Hi-Tech nurseries at Umdiker and Williamnagar
      </h4>
      <h5>Umdiker Hi-Tech Nursery</h5>
      <p>
        The Umdiker Hi-Tech Nursery was established during the year 2011. It
        covers an area of 4.5 Hectare. The nursery consists of 3(Three) agro net
        houses which can accommodate about 50,000 numbers of seedlings each. It
        consists of one germination chamber, one mist chamber and a
        vermin-composting unit. It is located at Umdiker village, Ri- Bhoi
        district which is about 45Km from the district Headquarter and 15Km from
        Umsning. The Nursery is under the Jurisdiction of the Divisional Forest
        Officer, Social Forestry Division, Nongpoh and incharge by the Range
        Forest Officer of Umsning range. The seedlings raised are to meet the
        demands and cater to the needs of the people and the state as a whole.
        The List of species available and their rates is as follows:
      </p>
      <h5>List of Species available at Umdiker Hi-Tech Nursery</h5>
      <Table striped bordered responsive>
        <thead className='table-dark'>
          <tr>
            <th rowSpan={2}>Sl.No.</th>
            <th rowSpan={2}>Botanical Name</th>
            <th rowSpan={2}>Common/Local Name</th>
            <th rowSpan={2}>Quantity(nos)</th>
            <th colSpan={2}>Rate(Rs.)</th>
            <th rowSpan={2}>Remarks</th>
          </tr>
          <tr>
            <th>Public</th>
            <th>Organisatons/Departments</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>Grewellia robusta</td>
            <td>Silver oak</td>
            <td>3,00</td>
            <td>2/-</td>
            <td>10/-</td>
            <td rowSpan={14} className='align-middle'>
              All available in stock
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Thuja Compacta</td>
            <td>Thuja</td>
            <td>30</td>
            <td>2/-</td>
            <td>10/-</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Lagestromia speciosa</td>
            <td>-</td>
            <td>1,000</td>
            <td>2/-</td>
            <td>10/-</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Delonix regia</td>
            <td>Gulmohar</td>
            <td>4,00</td>
            <td>2/-</td>
            <td>10/-</td>
          </tr>
          <tr>
            <td>5</td>
            <td>P.pendula</td>
            <td>Ashok</td>
            <td>5,00</td>
            <td>2/-</td>
            <td>10/-</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Bamboo species</td>
            <td>Siej</td>
            <td>1,500</td>
            <td>2/-</td>
            <td>8/-</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Assam lemon</td>
            <td>-</td>
            <td>3,00</td>
            <td>2/-</td>
            <td>10/-</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Casia fistula</td>
            <td>Sonaru</td>
            <td>7,00</td>
            <td>2/-</td>
            <td>10/-</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Polyalthia longifolia</td>
            <td>Ashok</td>
            <td>5,00</td>
            <td>2/-</td>
            <td>10/-</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Aegle Marmelos</td>
            <td>Bael/Sohbel</td>
            <td>2,000</td>
            <td>2/-</td>
            <td>10/-</td>
          </tr>
          <tr>
            <td>11</td>
            <td>Michelia champaca</td>
            <td>Diengrai</td>
            <td>1,200</td>
            <td>2/-</td>
            <td>8/-</td>
          </tr>
          <tr>
            <td>12</td>
            <td>Chukrassia tabularis</td>
            <td>Sali</td>
            <td>5,000</td>
            <td>2/-</td>
            <td>8/-</td>
          </tr>
          <tr>
            <td>13.</td>
            <td>Cryptomeria Japonica</td>
            <td>Kseh Bilat</td>
            <td>3,000</td>
            <td>2/-</td>
            <td>8/-</td>
          </tr>
          <tr>
            <td>14.</td>
            <td>Callistemon lanceolata </td>
            <td>Bottle Brush</td>
            <td>8,00</td>
            <td>2/-</td>
            <td>10/-</td>
          </tr>
        </tbody>
      </Table>
      <Container>
        <Row>
          <Col className='text-center'>
            <Image src={seedling1} thumbnail className='img-fluid h-100 ' />
            <FigureCaption>Mist Chambers in Hi-Tech Nursery</FigureCaption>
          </Col>
          <Col className='text-center'>
            <Image src={seedling2} thumbnail className='img-fluid h-100 ' />
            <FigureCaption>Nursery at Sohra</FigureCaption>
          </Col>
          <Col className='text-center'>
            <Image src={seedling3} thumbnail className='img-fluid h-100 ' />
            <FigureCaption>Umdiker Net House</FigureCaption>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Seedlings
