import React from "react"
import { Container, Table } from "react-bootstrap"
import listPAPIOs from "../../assets/RTI/RTI_megforest_rti_list_PAs_PIOs.pdf"
import disposalOfInformation from "../../assets/RTI/RTI_disposal_of_information_requests_by_PIOs.pdf"
import contacts from "../../assets/RTI/RTI_Contacts.pdf"
import { BsFilePdfFill } from "react-icons/bs"

const Rti = () => {
  return (
    <Container>
      <h2>Right To Information</h2>
      <Table striped bordered>
        <thead className="table-dark">
          <tr>
            <td>Documents</td>
            <td className="text-center">Download</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              List of Public Authorities, Public Information Officers, Assistant
              Public Information Officers and Appellate Authority in the Forest
              and Environment Department, Meghalaya
            </td>
            <td className="text-center">
              <a
                href={listPAPIOs}
                target="_blank"
                title="PDF opens in a New Tab"
                className="text-dark"
              >
                <BsFilePdfFill />
              </a>
            </td>
          </tr>
          <tr>
            <td>
              Disposal of Information Requests by Public Information Officers
            </td>
            <td className="text-center">
              <a
                href={disposalOfInformation}
                target="_blank"
                title="PDF opens in a New Tab"
                className="text-dark"
              >
                <BsFilePdfFill />
              </a>
            </td>
          </tr>
          <tr>
            <td>RTI Contacts</td>
            <td className="text-center">
              <a
                href={contacts}
                target="_blank"
                title="PDF opens in a New Tab"
                className="text-dark"
              >
                <BsFilePdfFill />
              </a>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}

export default Rti
