import React from "react"
import { Container, Table } from "react-bootstrap"
import order1 from "../../assets/NGT/NGT_Order_dated_22_08_2019.pdf"
import order2 from "../../assets/NGT/NGT_Order_dated_11_04_2019.pdf"
import order3 from "../../assets/NGT/NGT_Order_dated_04_01_2019.pdf"
import order4 from "../../assets/NGT/NGT_Order_dated_22_10_2018.pdf"
import order5 from "../../assets/NGT/NGT_Order_dated_19_09_2018.pdf"
import order6 from "../../assets/NGT/NGT_Order_dated_31_08_2018.pdf"
import { BsFilePdfFill } from "react-icons/bs"

const Orders = () => {
  return (
    <Container>
      <h2>NGT Judicial Committee Orders</h2>
      <Table striped bordered>
        <thead className="table-dark">
          <tr>
            <td>Judicial Committee Orders</td>
            <td className="text-center">Download</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>NGT Order, dated 22-08-2019 </td>
            <td className="text-center">
              <a
                href={order1}
                target="_blank"
                title="PDF opens in a New Tab"
                className="text-dark"
              >
                <BsFilePdfFill />
              </a>
            </td>
          </tr>
          <tr>
            <td>NGT Order, dated 11-04-2019 </td>
            <td className="text-center">
              <a
                href={order2}
                target="_blank"
                title="PDF opens in a New Tab"
                className="text-dark"
              >
                <BsFilePdfFill />
              </a>
            </td>
          </tr>
          <tr>
            <td>NGT Order, dated 04-01-2019 </td>
            <td className="text-center">
              <a
                href={order3}
                target="_blank"
                title="PDF opens in a New Tab"
                className="text-dark"
              >
                <BsFilePdfFill />
              </a>
            </td>
          </tr>
          <tr>
            <td>NGT Order, dated 22-10-2018 </td>
            <td className="text-center">
              <a
                href={order4}
                target="_blank"
                title="PDF opens in a New Tab"
                className="text-dark"
              >
                <BsFilePdfFill />
              </a>
            </td>
          </tr>
          <tr>
            <td>NGT Order, dated 19-09-2018 </td>
            <td className="text-center">
              <a
                href={order5}
                target="_blank"
                title="PDF opens in a New Tab"
                className="text-dark"
              >
                <BsFilePdfFill />
              </a>
            </td>
          </tr>
          <tr>
            <td>NGT Order, dated 31-08-2018 </td>
            <td className="text-center">
              <a
                href={order6}
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

export default Orders
