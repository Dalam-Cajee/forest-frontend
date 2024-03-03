import React from 'react'
import { Container } from 'react-bootstrap'
import timberPDF from '../../assets/PublicInterface/pi_list_of_furniture_units.pdf'

const TimberDept = () => {
  return (
    <Container>
      <h2>District wise Furniture Units in Meghalaya</h2>
      <p>
        As per Section 3{' '}
        <strong>
          Meghalaya Forest (Removal of timber) (Regulation) Act 1981
        </strong>
        , no person shall transport timber outside the State and no Timber depot
        shall be set up without license from competent Authority (DFO
        Territorial). The license is granted for a period of one year which is
        subject to renewal.
      </p>
      <p>
        No person shall set up Furniture unit without obtaining NOC from Forest
        Department. An application shall be submitted to DFO (Territorial) along
        with land documents and undertaking to supply sawn timber from licensed
        saw mills
      </p>
      <a href={timberPDF} target='_blank' title='PDF opens to a New Window'>
        List of Furniture Units
      </a>
    </Container>
  )
}

export default TimberDept
