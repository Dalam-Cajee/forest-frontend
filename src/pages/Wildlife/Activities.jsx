import React from "react"
import { Container, Table } from "react-bootstrap"

const Activities = () => {
  return (
    <Container>
      <h2>Activities of Wildlife Wing</h2>
      <p>
        The Wildlife Wing of the Forest Department of the State of Meghalaya is
        headed by the Additional Principal Chief Conservator of Forests,
        Wildlife who also functions as the Chief Wildlife Warden (CWW) of the
        State, for the purpose of implementation of the Wild Life (Protection)
        Act,1972. In compliance to the Wild Life (Protection) Act, 1972 certain
        non-governmental organisation working for the conservation of wildlife
        and who are interested have also been appointed and empowered as
        Honorary Wildlife Wardens (HWW) of respective Districts to assist the
        Chief Wildlife Warden in implementation of the Wild Life (Protection)
        Act, 1972.
      </p>
      <p>
        Wild life management and implementation of the Wild Life (Protection)
        Act 1972 in the State is entrusted to 4 (four) Divisional Forest
        Officers, namely:-
      </p>
      <Table bordered>
        <thead className="table-dark">
          <tr>
            <th width="29%">
              <strong>Division</strong>
            </th>
            <th width="35%">
              <strong>Jurisdiction</strong>
            </th>
            <th width="36%">
              <strong>Contact</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Divisional Forest Officer, Khasi Hills Wildlife Division,Shillong
            </td>
            <td>Ri-Bhoi, East, West &amp; South West Khasi Hills District</td>
            <td>
              Office Phone No : 2226181 <br /> Mobile No : 9436999120 <br />
              Email:dfowildlifedivisionshillong@gmail.com
            </td>
          </tr>
          <tr>
            <td>
              Divisional Forest Officer, Jaintia Hills Wildlife Division, Jowai
            </td>
            <td>East &amp; West Jaintia Hills District</td>
            <td>
              Office Phone No : 224003 <br /> Mobile No : 9436998340 <br />
              Email:dfowljh@gmail.com
            </td>
          </tr>
          <tr>
            <td>
              Divisional Forest Officer, East &amp; West Hills Wildlife
              Division,Tura
            </td>
            <td>East, West, North &amp; South West Garo Hills District</td>
            <td>
              Office Phone No : 232225
              <br /> Mobile No : 9436998680 <br /> Email:dfo.tura@rediffmail.com
            </td>
          </tr>
          <tr>
            <td>Director, Balpakram National Park, Baghmara</td>
            <td>South Garo Hills District</td>
            <td>
              Office Phone No : 234220 <br /> Mobile No : 9436998841 <br />
              Email:bnpwildlife@gmail.com
            </td>
          </tr>
        </tbody>
      </Table>
      <p>
        The State Board for Wildlife is constituted as per Section 6 of the Wild
        Life Protection Act, 1972 as amended in 2013. The State Board for
        Wildlife chaired by the Chief Minister, is the highest body in the State
        for making policy decisions on Wildlife conservation, which gives
        direction to the functioning of the Wildlife wing. The Minister
        in-charge of Forests is the Vice-Chairperson while the Chief Wildlife
        Warden is the Member-Secretary of the Board.
      </p>
    </Container>
  )
}

export default Activities
