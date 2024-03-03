import React from 'react'
import { Container } from 'react-bootstrap'
import stoneCrushersPDF from '../../assets/PublicInterface/pi_list_of_stone_crusher_issued.pdf'

const StoneCrushers = () => {
  return (
    <Container>
      <h2>NOC for setting up of Stone Crushers in Meghalaya</h2>
      <p>
        The applicant shall be required to obtain NOC (Non-Forest land
        certificate) from the Forest and Environment Department for setting up
        of Stone Crushers in the State. The application along with land
        documents and source of raw material shall be submitted to concern DFO
        Territorial Division.
      </p>
      <p>
        The applicant shall also required to obtain consent to operate from
        State Pollution Control Board. The applicant shall also required to
        obtain consent to operate from State Pollution Control Board.
      </p>
      <p>
        The stone crusher unit shall require to obtained stone/boulders from
        mining leases/quarry permits granted under the provisions of the
        Meghalaya Minor Mineral Concession Rules, 2016.
      </p>
      <a
        href={stoneCrushersPDF}
        target='_blank'
        title='PDF opens to a New Window'
      >
        List of NOCs issued for Stone Crushers
      </a>
    </Container>
  )
}

export default StoneCrushers
