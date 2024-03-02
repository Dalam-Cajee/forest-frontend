import React from 'react'
import {
  Col,
  Container,
  Figure,
  FigureCaption,
  Image,
  Row,
  Table,
} from 'react-bootstrap'
import eco1 from '../../assets/SocialForestry/sf_crematorium01.jpg'
import eco2 from '../../assets/SocialForestry/sf_crematorium02.jpg'
import eco3 from '../../assets/SocialForestry/sf_crematorium03.jpg'

const EcoFriendlyCrematorium = () => {
  return (
    <Container>
      <h2>Eco-Friendly Crematorium</h2>
      <p>
        The Social Forestry & Environment Wing of the Forest & Environment
        Department is financing and promoting construction of Eco-friendly
        Crematoria in different parts of the state. Eco-friendly Crematorium or
        Fuel efficient Crematorium is a structure designed by the enterprising,
        Late Ma Kambel Shullai. The traditional methods of cremation required
        lot of fuel wood, thereby putting pressure on forests. The newly
        designed Eco-Friendly Crematorium however, consumes less fire wood and
        takes less time to burn. Consequently, fuel wood requirement gets
        reduced which ultimately reduces pressure on forests. People have
        appreciated the new technology and many applications from various
        organisations located in different districts were received. The Forest
        Department continues to facilitate construction of such structures
        throughout the State with funds from the Finance Commission Grant.
        However, no fund was received for this purpose since the year 2014-15. A
        proposal was moved seeking funds under the Finance Commission Award for
        the year 2015-16, 2016-17 and 2017-18 but no fund was provided during
        the last three years.
      </p>
      <p>
        The concept for construction of eco-friendly crematorium dates back to
        the year 2003 when (Late) Shri. KambelShullai had a keen concern for
        protecting and conserving the forests and environment. His main concern
        regarding the environment was the amount of wood consumed. The amount of
        smoke emitted, unhygienic smell and duration of cremation in the open
        and traditional method are the other factors that finally led him to
        invent the Eco-friendly Crematorium. The first one came to light in the
        year 2003 when the construction took place at Khimusniang Jowai by
        Seinraij Jowai under the supervision of the inventor himself.
      </p>
      <p>
        Seeing the result, thedesign and concept was accepted by the Sein Raj
        and other community members. Subsequently, more number of these
        structures had been constructed in villages like Raliang, Shangpung etc.
        where people are still following the traditional faith.
      </p>
      <h4>Table 1: A comparison</h4>
      <Table striped bordered>
        <thead className='table-dark'>
          <tr>
            <th>Particulars</th>
            <th>Traditional Way of Crematorium</th>
            <th>Eco-friendly Crematorium</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Amount of wood consumed</td>
            <td>Nearly 3 cubic metres of woods required</td>
            <td>Only about 0.80 cubic metres of woods required</td>
          </tr>
          <tr>
            <td>Time taken for Cremation</td>
            <td>About 4 to 5 hours</td>
            <td>Takes about 1.5 to 2 hours</td>
          </tr>
          <tr>
            <td>Sanitation/Hygiene</td>
            <td>
              Huge amount of smoke released; not hygienic and smoke uncontrolled
            </td>
            <td>
              Less amount of smoke emitted in a controlled manner through a
              chimney
            </td>
          </tr>
        </tbody>
      </Table>
      <p>
        The Social Forestry Division, Jowai had so far constructed 12 (twelve)
        numbers of Eco-friendly Crematorium at Mihmyntdu Village, Thad Muthlong
        Village, Pasyih Village, Sabahmuswang Village, Mukhla, Ialong Village,
        Mynktung Village, Mynkrem Village, Khliehriat Village, Padu Village,
        Laskein-Nongkynrih Village and Khonchnong Village.
      </p>
      <h4>Nos. of Crematorium Constructed till date</h4>
      <Table bordered>
        <thead className='table-dark'>
          <tr className='text-center'>
            <th>
              Divisional Forest Officer, Social Forestry Division, East Khasi
              Hills, Shillong.
            </th>
            <th>
              Divisional Forest Officer, Social Forestry Division, West Khasi
              Hills, Nongstoin.
            </th>
            <th>
              Divisional Forest Officer, Social Forestry Division, Jaintia
              Hills, Jowai.
            </th>
            <th>
              Divisional Forest Officer, Social Forestry Division, Ri- Bhoi
              District, Nongpoh.
            </th>
            <th>
              Divisional Forest Officer, Social Forestry Division, West Garo
              Hills, Tura.
            </th>
            <th width='80px'>Total</th>
          </tr>
          <tr className='text-center'>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>7 Nos.</td>
            <td>3 Nos.</td>
            <td>12 Nos.</td>
            <td>2 Nos.</td>
            <td>2 Nos.</td>
            <td>26 Nos.</td>
          </tr>
        </tbody>
      </Table>
      <Figure>
        <div>
          <Row>
            <Col>
              <Image src={eco1} className='img-fluid h-100 w-auto' />
            </Col>
            <Col>
              <Image src={eco2} className='img-fluid h-100 w-auto' />
            </Col>
            <Col>
              <Image src={eco3} className='img-fluid h-100 w-auto' />
            </Col>
          </Row>
        </div>
        <FigureCaption className='text-center'>
          Eco-friendly crematorium at Ialong, Mukhla and Laskein Rangthylliang
          Village
        </FigureCaption>
      </Figure>
    </Container>
  )
}

export default EcoFriendlyCrematorium
