import React from 'react'
import { Container, Figure, FigureCaption, FigureImage } from 'react-bootstrap'
import forest1 from '../../assets/ResearchTraining/rt_frs01.jpg'

const FRS = () => {
  return (
    <Container>
      <h2>Forest Resources Survey Division</h2>
      <h4>Objectives</h4>
      <p>
        The main objective of the Division are Mapping and Inventorisation of
        the natural resources of State for utilization in planning and focusing
        towards scientific management and exploitation for the ultimate object
        of sustain yield. The data generated can be used to analyze the economic
        growth and development, the state of environment and for planning as
        well for formulation of policies that are conducive for conversation and
        management of forest and land resources.
      </p>
      <p>
        The Division also actively engaged in implementing the schemes/works
        under the Intensification of Forest Management, and also collection of
        field data like location of plantations, nurseries, beats, ranges,
        boundary of Reserve Forests, Protected Forests, National Parks and
        sanctuaries, macro level mapping and preparation of management plan,
        macro level survey and inventory of Sacred Groves in the different
        Districts with the main objectives to protect and conserve the Sacred
        Groves of the State.
      </p>
      <h4>Activities</h4>
      <p>
        The Division has undertaken GPS mapping of 125 Nos Sacred Groves located
        in the in the East Khasi Hills District, Jaintia Hills District, Ri Bhoi
        District South West Khasi Hills District and West Khasi Hills District
        of the State of Meghalaya.
      </p>
      <h4>Achievement</h4>
      <ol>
        <li>
          Out of 125 Sacred Groves, a detailed study and Estimation of Growing
          Stock on 20 nos. of Sacred Groves was completed and accordingly a book
          entitled as “Forest Inventory of Sacred Groves of Meghalaya” Vol -I
          was published.
        </li>
        <li>
          A study on Medicinal Plants of Meghalaya was also carried out on the
          basis of which a book entitled as 'Documentation of Medicinal and
          Aromatic Plants' was published in the year 2002.
        </li>
      </ol>
      <p>
        During the year 2017-18, 15 nos. of the Sacred Groves have been taken up
        for estimation of growing stock and field work and data collection is
        completed. Presently, data analysis is going on and soon book will be
        published based on that as “Forest Inventory of Sacred Groves of
        Meghalaya” Vol-II.
      </p>
      <Figure>
        <FigureImage src={forest1} thumbnail />
        <FigureCaption className='text-center'>
          Reimession Sacred Grove
        </FigureCaption>
      </Figure>
    </Container>
  )
}

export default FRS
