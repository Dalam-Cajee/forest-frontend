import React from "react"
import { Container, Table } from "react-bootstrap"
import { BsFilePdfFill } from "react-icons/bs"
import report1 from "../../assets/NGT/Minutes_of_Proceedings_NGT_1st_Sitting_of_Oversight_Committee.pdf"
import report2 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_30thMeeting.pdf"
import report3 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_11th_Special_Sitting.pdf"
import report4 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_29thMeeting.pdf"
import report5 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_10th_Special_Sitting.pdf"
import report6 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_28thMeeting.pdf"
import report7 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_9th_Special_Sitting.pdf"
import report8 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_27thMeeting.pdf"
import report9 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_26thMeeting.pdf"
import report10 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_25thMeeting.pdf"
import report11 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_24thMeeting.pdf"
import report12 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_23rdMeeting.pdf"
import report13 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_22ndMeeting.pdf"
import report14 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_7th_Special_Sitting.pdf"
import report15 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_6th_Special_Sitting.pdf"
import report16 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_21stMeeting.pdf"
import report17 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_5th_Special_Sitting.pdf"
import report18 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_20thMeeting.pdf"
import report19 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_3rd_Special_Sitting.pdf"
import report20 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_19thMeeting.pdf"
import report21 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_18thMeeting.pdf"
import report22 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_2nd_Special_Sitting.pdf"
import report23 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_17thMeeting.pdf"
import report24 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_16thMeeting_2ndday.pdf"
import report25 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_16thMeeting_1stday.pdf"
import report26 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_1st_Special_Sitting.pdf"
import report27 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_15thMeeting.pdf"
import report28 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_Site_Visit_during_14thMeeting.pdf"
import report29 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_14thMeeting.pdf"
import report30 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_13thMeeting.pdf"
import report31 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_12thMeeting.pdf"
import report32 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_11thMeeting.pdf"
import report33 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_10thMeeting.pdf"
import report34 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_9thMeeting.pdf"
import report35 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_8thMeeting.pdf"
import report36 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_7thMeeting.pdf"
import report37 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_6thMeeting.pdf"
import report38 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_5thMeeting.pdf"
import report39 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_2ndMeeting.pdf"
import report40 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_1stMeeting.pdf"
import report41 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_3rdMeeting.pdf"
import report42 from "../../assets/NGT/Minutes_of_Proceedings_NGTCommittee_4thMeeting.pdf"

const MinutesNGT = () => {
  return (
    <Container>
      <h2>NGT Judicial Committee Minutes</h2>
      <Table striped bordered>
        <thead className="table-dark">
          <tr>
            <td>
              Minutes of Proceedings of NGT 1st Sitting of Oversight Committee
            </td>
            <td className="text-center">Download</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Minutes of Proceedings of NGT Committee - 30th Meeting </td>
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
            <td>11th Special Sitting - Minutes of Proceedings </td>
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
            <td>Minutes of Proceedings of NGT Committee - 29th Meeting </td>
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
            <td>10th Special Sitting - Minutes of Proceedings </td>
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
            <td>Minutes of Proceedings of NGT Committee - 28th Meeting </td>
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
            <td>9th Special Sitting - Minutes of Proceedings</td>
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
            <td>Minutes of Proceedings of NGT Committee - 27th Meeting </td>
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
            <td>Minutes of Proceedings of NGT Committee - 26th Meeting </td>
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
            <td>Minutes of Proceedings of NGT Committee - 25th Meeting </td>
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
            <td>Minutes of Proceedings of NGT Committee - 24th Meeting</td>
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
            <td>Minutes of Proceedings of NGT Committee - 23rd Meeting</td>
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
          <tr>
            <td>Minutes of Proceedings of NGT Committee - 23rd Meeting</td>
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
          <tr>
            <td>Minutes of Proceedings of NGT Committee - 23rd Meeting</td>
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
          <tr>
            <td>Minutes of Proceedings of NGT Committee - 23rd Meeting</td>
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
          <tr>
            <td>Minutes of Proceedings of NGT Committee - 23rd Meeting</td>
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
          <tr>
            <td>Minutes of Proceedings of NGT Committee - 23rd Meeting</td>
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
          <tr>
            <td>Minutes of Proceedings of NGT Committee - 23rd Meeting</td>
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

export default MinutesNGT
