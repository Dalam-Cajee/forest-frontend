import React from 'react'
import { Container } from 'react-bootstrap'
import listPAPIOs from '../../assets/RTI/RTI_megforest_rti_list_PAs_PIOs.pdf'
import disposalOfInformation from '../../assets/RTI/RTI_disposal_of_information_requests_by_PIOs.pdf'
import contacts from '../../assets/RTI/RTI_Contacts.pdf'

const Rti = () => {
  return (
    <Container>
      <h2>Right To Information</h2>
      <ul>
        <li>
          <a href={listPAPIOs} target='_blank'>
            List of Public Authorities, Public Information Officers, Assistant
            Public Information Officers and Appellate Authority in the Forest
            and Environment Department, Meghalaya
          </a>
        </li>
        <li>
          <a href={disposalOfInformation} target='_blank'>
            Disposal of Information Requests by Public Information Officers
          </a>
        </li>
        <li>
          <a href={contacts} target='_blank'>
            RTI Contacts
          </a>
        </li>
      </ul>
    </Container>
  )
}

export default Rti
