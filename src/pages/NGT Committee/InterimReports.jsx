import React from "react"
import { Container, Table } from "react-bootstrap"
import { BsFilePdfFill } from "react-icons/bs"
import report1 from "../../assets/NGT/Eighth_Report_of_NGT_Committee.pdf"
import report2 from "../../assets/NGT/Seventh_Report_of_NGT_Committee.pdf"
import report3 from "../../assets/NGT/Sixth_Report_of_NGT_Committee.pdf"
import report4 from "../../assets/NGT/Fifth_Interim_Report_of_NGT_Committee.pdf"
import report5 from "../../assets/NGT/Fourth_Interim_Report_of_NGT_Committee_part1.pdf"
import report6 from "../../assets/NGT/Fourth_Interim_Report_of_NGT_Committee_part2.pdf"
import report7 from "../../assets/NGT/Third_Interim_Report_of_NGT_Committee.pdf"
import report8 from "../../assets/NGT/cities_villages_compliant_environmental_laws.pdf"
import report9 from "../../assets/NGT/Second_Interim_Report_of_NGT_Committee.pdf"
import report10 from "../../assets/NGT/ActionPlan_for_RestorationofEnvironment_in_Areasaffected_by_CoalMining_in_Meghalaya.pdf"
import report11 from "../../assets/NGT/First_Interim_Report_of_Justice_Katakey_Committee_dated_31122018.pdf"

const InterimReports = () => {
  return (
    <Container>
      <h2>NGT Judicial Committee Reports</h2>
      <Table striped bordered>
        <thead className="table-dark">
          <tr>
            <td>Judicial Committee Reports</td>
            <td className="text-center">Download</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Eighth Report of NGT Committee </td>
            <td className="text-center">
              <a
                href={report1}
                target="_blank"
                title="PDF opens in a New Tab"
                className="text-dark"
              >
                <BsFilePdfFill />
              </a>
            </td>
          </tr>
          <tr>
            <td>Seventh Report of NGT Committee </td>
            <td className="text-center">
              <a
                href={report2}
                target="_blank"
                title="PDF opens in a New Tab"
                className="text-dark"
              >
                <BsFilePdfFill />
              </a>
            </td>
          </tr>
          <tr>
            <td>Sixth Report of NGT Committee </td>
            <td className="text-center">
              <a
                href={report3}
                target="_blank"
                title="PDF opens in a New Tab"
                className="text-dark"
              >
                <BsFilePdfFill />
              </a>
            </td>
          </tr>
          <tr>
            <td>Fifth Interim Report of NGT Committee </td>
            <td className="text-center">
              <a
                href={report4}
                target="_blank"
                title="PDF opens in a New Tab"
                className="text-dark"
              >
                <BsFilePdfFill />
              </a>
            </td>
          </tr>
          <tr>
            <td>Fourth Interim Report of NGT Committee-Part 1 </td>
            <td className="text-center">
              <a
                href={report5}
                target="_blank"
                title="PDF opens in a New Tab"
                className="text-dark"
              >
                <BsFilePdfFill />
              </a>
            </td>
          </tr>
          <tr>
            <td>Fourth Interim Report of NGT Committee-Part 2 </td>
            <td className="text-center">
              <a
                href={report6}
                target="_blank"
                title="PDF opens in a New Tab"
                className="text-dark"
              >
                <BsFilePdfFill />
              </a>
            </td>
          </tr>
          <tr>
            <td>Third Interim Report of NGT Committee </td>
            <td className="text-center">
              <a
                href={report7}
                target="_blank"
                title="PDF opens in a New Tab"
                className="text-dark"
              >
                <BsFilePdfFill />
              </a>
            </td>
          </tr>
          <tr>
            <td>Cities / Villages compliant to Environmental Laws </td>
            <td className="text-center">
              <a
                href={report8}
                target="_blank"
                title="PDF opens in a New Tab"
                className="text-dark"
              >
                <BsFilePdfFill />
              </a>
            </td>
          </tr>
          <tr>
            <td>Second Interim Report of NGT Committee </td>
            <td className="text-center">
              <a
                href={report9}
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
              Action Plan for Restoration of Environment in Areas affected by
              Coal Mining in Meghalaya
            </td>
            <td className="text-center">
              <a
                href={report10}
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
              First Interim Report of Justice Katakey Committee, dated
              31/12/2018
            </td>
            <td className="text-center">
              <a
                href={report11}
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

export default InterimReports
