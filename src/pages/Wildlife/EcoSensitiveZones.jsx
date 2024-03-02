import React from 'react'
import { Container } from 'react-bootstrap'
import wildlifePDF1 from '../../assets/Wildlife/wildlife_ESZ_of_NWLS.pdf'
import wildlifePDF2 from '../../assets/Wildlife/wildlife_ESZ_of_NarpuhWLS.pdf'

const EcoSensitiveZones = () => {
  return (
    <Container>
      <h2>Eco-Sensitive Zones</h2>
      <p>
        Till date the Eco Sensitive Zone has been approved by the MoEF&CC,
        Government of India for the:
        <ol>
          <li>
            <a href={wildlifePDF1} target='_blank'>
              Nongkhyllem Wildlife Sanctuary Vide Govt. of India Gazette
              Notification S.O.1816(E) Dtd,07-05-2017
            </a>
          </li>
          <li>
            <a href={wildlifePDF2} target='_blank'>
              Narpuh Wildlife Sanctuary Vide Govt. of India Gazette Notification
              S.O.2942(E) Dtd,06-09-2017
            </a>
          </li>
        </ol>
      </p>
      <p>
        For the other Wildlife sanctuary and National Park the proposal is under
        process.
      </p>
      <h4>Nongkhyllem Wildlife Sanctuary Eco-sensitive Zone</h4>
      <p>
        The Eco-sensitive Zone for the Nongkhyllem Wildlife Sanctuary has been
        notified by the Ministry of Environment, Forest and Climate Change
        (MoEF& CC) in the year 2017. The extent of Eco-sensitive Zone varies
        from 335.07 metres to 8.43 kilometres from the boundary of the
        Nongkhyllem Wildlife Sanctuary and its total area is 202.87 square
        Kilometre.
      </p>
      <h4>Narpuh Wildlife Sanctuary Eco-sensitive Zone</h4>
      <p>
        The ESZ of the Narpuh Wildlife Sanctuary was notified on 6th September,
        2017 and the extent varying from 1.20 kms to 7.70 kms from the boundary
        of WLS. The area of ESZ is 194.23 Sq.km.
      </p>
    </Container>
  )
}

export default EcoSensitiveZones
