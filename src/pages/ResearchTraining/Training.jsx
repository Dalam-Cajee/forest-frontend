import React from 'react'
import { Col, Container, FigureCaption, Image, Row } from 'react-bootstrap'
import training1 from '../../assets/ResearchTraining/rt_training01.jpg'
import training2 from '../../assets/ResearchTraining/rt_training02.jpg'

const Training = () => {
  return (
    <Container>
      <h2>Training Division</h2>
      <h4>Activities</h4>
      <p>
        <li>
          Supervising the Meghalaya Forests Training School Baiza in imparting
          Professional Training in Forestry and allied subjects to the Forester
          and Forest Guards in the State.
        </li>
        <li>
          Conducting Short term Training courses for Ministerial staff on
          Forests accounts, establishment matter, Office procedure etc.
        </li>
        <li>
          Conducting Short term Training courses for Frontline staff on GPS,
          Enforcement of Acts and Rules, Forests Fire control, Nursery
          techniques etc.
        </li>
        <li>Conducting Refresher Training courses for Forest Officers.</li>
        <li>
          Coordinating the visit of batches of IFS (Probationers), MCT Batches,
          Trainees of State Forests Academy and Central Forests Academy to the
          State.
        </li>
        <li>
          Coordinating the attachment of B.Sc. Forestry students from various
          Universities in State Forests Department.
        </li>
      </p>
      <h4>The Meghalaya Forest Training School (MFTS), Baiza</h4>
      <p>
        Foresters and Forest Guards are at the cutting edge of the forestry
        hierarchy, they are main catalyst for implementation of forest and wild
        life related Acts Rules regulation and conservation development and
        plantation activities. The efficiency and effectiveness of the State
        Forest department depends much on performance of forester and forest
        guards. Hence these frontline staff requires quality training keeping in
        view of the emerging needs of the forestry sectors to perform various
        duties. The Meghalaya Forests Training School (MFTS) at Baiza imparts
        Professional Training in Forestry and allied subjects to the Foresters
        and Forest Guards recruited by District Selection Committee. The
        professional training also imparted to in-service foresters and forest
        guards who have not undergone any formal training. Every year the
        training school imparts training 20-25 numbers (approx) of foresters and
        forest guards.
      </p>
      <h5>Achievement</h5>
      <ol>
        <li>
          A total number of 298 of trainees were trained and were declared
          passed with effect from 1994-95 to 2017-18.
        </li>
        <li>
          The Training Division conducted short-term training courses for
          Ministerial and Frontline staff to equip them with latest
          developments/knowledge on subjects like Forest Accounts, Establishment
          matters, Enforcement of Acts & Rules, Forest Fire Control, GPS/GIS and
          Map Creation. The total number of in-service trainees trained w.e.f.
          2017 is 287.
        </li>
      </ol>
      <Container>
        <Row className='mb-5'>
          <Col className='text-center '>
            <Image src={training1} thumbnail className='img-fluid h-100 ' />
            <FigureCaption>
              Passing Out Parade 23rd Batch of Forester and Forest Guard
              Trainees
            </FigureCaption>
          </Col>
          <Col className='text-center '>
            <Image src={training2} thumbnail className='img-fluid h-100 ' />
            <FigureCaption>
              Meghalaya Forest Training School, Baiza
            </FigureCaption>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Training
