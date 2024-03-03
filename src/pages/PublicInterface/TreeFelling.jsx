import React from 'react'
import { Container } from 'react-bootstrap'
import treeFellingPDF from '../../assets/PublicInterface/forms_application_form_for_permission_for_felling_of_trees_outside_shillong.pdf'

const TreeFelling = () => {
  return (
    <Container>
      <h2>Tree Felling Permission outside Shillong</h2>
      <p>
        Permission for felling of trees from non-forest areas or in homesteads
        and farms may be sought under the provisions of the Meghalaya tree
        Preservation act, 1976 wherever applicable, and in areas outside purview
        of the said act, the permission shall be obtained as per Rule 6 of the
        Meghalaya Tree Felling (Non-Forest areas) Rules, 2006. The application
        along with the required documents shall be submitted to Divisional
        Forest Officer (Territorial Division) or Chief Forest Officer of the
        respective Autonomous District Council.
      </p>
      <a
        href={treeFellingPDF}
        target='_blank'
        title='PDF that opens in a New Window'
      >
        Application form for permission for felling of trees outside Shillong
      </a>
    </Container>
  )
}

export default TreeFelling
