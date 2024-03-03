import React from 'react'
import { Container, Table } from 'react-bootstrap'

const ConflictCompensation = () => {
  return (
    <Container>
      <h2>Human Animal Conflict and Compensation</h2>
      <p>
        Ex-gratia payment to victims of wildlife depredation for{' '}
        <strong>
          loss of life, loss of limbs or injuries causing permanent disability
          and damage/loss of crops and property including livestockis
        </strong>{' '}
        being provided by the Department. The revised rates of ex-gratia grants
        as approved by the Government vide their Office Memorandum No.
        FOR.68/2007/Vol-II/176 dated 25th June 2018 are shown below:-
      </p>
      <Table striped bordered>
        <thead className='table-dark'>
          <tr>
            <th>Sl.No.</th>
            <th>Type of Depredation</th>
            <th>Revised Rates</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Loss of Lives</td>
            <td>₹ 5,00,000/-</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Permanent incapacitation</td>
            <td>₹ 5,00,000/-</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Grievous injury</td>
            <td>₹ 2,00,000/-</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Minor injury</td>
            <td>cost of treatment up to ₹ 25,000/- per person</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Damage to households</td>
            <td>
              To be assessed by Forest Officials in consultation with Revenue
              Official not below the rank of Inspector
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Damage to Agricultural crops</td>
            <td>
              To be assessed by Forest Officials along with Revenue Official and
              to be accompanied by an Agricultural Officer not below the rank of
              Agricultural Inspector
            </td>
          </tr>
          <tr>
            <td rowSpan={8} className='align-middle'>
              7
            </td>
            <td>Loss of Cattle</td>
            <td></td>
          </tr>
          <tr>
            <td>a. Buffalo (full grown)</td>
            <td rowSpan={7} className='align-middle'>
              To be assessed by Forest Officials along with Revenue Official and
              to be accompanied by an officer from the AH &amp;Vety Department
              not below the rank of V.A. Surgeon.
            </td>
          </tr>
          <tr>
            <td>b. Bullock/ Cow (full grown)</td>
          </tr>
          <tr>
            <td>c. Calf</td>
          </tr>
          <tr>
            <td>d. Horse (full grown)</td>
          </tr>
          <tr>
            <td>e. Colt/Filly</td>
          </tr>
          <tr>
            <td>f. Goat (full grown)</td>
          </tr>
          <tr>
            <td>g. Kid</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Damage to plantation</td>
            <td>
              To be assessed by Forest Officials along with Revenue Official and
              to be accompanied by an Agricultural Officer not below the rank of
              Agricultural Inspector
            </td>
          </tr>
        </tbody>
      </Table>
      <h4>
        Complaint/Report of Depredation may be sent to the nearest Wildlife
        Range Office / Beat Office
      </h4>
      <p>
        A compensation case indicating the type of depredation and the extent of
        damage/loss is prepared by the authorized officers on receipt of reports
        of depredation. All such cases are then forwarded to the concerned
        Deputy Commissioner for his/her recommendation. Only those cases having
        recommendation from the Deputy Commissioner is considered for providing
        Ex-gratia Payment to the victims/affected families. However no payment
        is made to the person who is killed or injured at a time when he was
        engaged in any illegal activity, punishable under the Wild Life
        (Protection) Act, 1972 or Meghalaya Forest Regulation or any other
        relevant Act and in case of human deaths the Department provides ex
        gratia payment to next of kin of the deceased at the above mentioned
        rates.The funds for making Ex-gratia payment are met from the Central
        Sector Schemes namely{' '}
        <strong>
          CSS-IDWH (Integrated Development of Wildlife Habitat), CSS-PE
          (Project-Elephant) including that from the CAMPA Funds and State
          Schemes
        </strong>
        .
      </p>
    </Container>
  )
}

export default ConflictCompensation
