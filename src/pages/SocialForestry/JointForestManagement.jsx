import React from 'react'
import {
  Container,
  Figure,
  FigureCaption,
  FigureImage,
  Stack,
  Table,
} from 'react-bootstrap'
import forestry1 from '../../assets/SocialForestry/sf_jfm01.jpg'
import forestry2 from '../../assets/SocialForestry/sf_jfm02.jpg'

const JointForestManagement = () => {
  return (
    <Container>
      <h2>Joint Forest Management</h2>
      <p>
        Meghalaya notified the constitution of Forest Development Agency and
        application of the Joint Forest Management principles on 9th Sept 2003.
        The Forest & Environment Department followed up the said notification
        and registered 9 FDAs constituted in the seven (7) Social Forestry
        Divisions, one (1) in Territorial Division (Jaintia Hills Territorial
        Division) and one (1) in Wildlife Division (Khasi Hills Wildlife
        Division). The concerned Conservator of Forests (Social Forestry)
        registered the JFMCs.
      </p>
      <p>
        These Forest Development Agencies have been constituted for the purpose
        of implementation of afforestation programme particularly the National
        Afforestation Programme (NAP). Funds under the NAP are channelized
        through the Forest Development Agencies. The actual implementation of
        NAP is done through the Joint Forest Management Committees at the
        Village level. The effective implementation of the JFM programme will go
        a long way in generating gainful employment opportunities for rural
        people, reducing the incidence of poverty, and subsequently leading to
        higher level of income and employment. Hence people's participation is a
        key to improvement of forest cover and sustainable management of natural
        resources which is one of the strongest means of development for masses.
      </p>
      <p>
        During the year 2014-15, proposal submitted was 5395 hectares for
        Advance works, 3000 ha for creation and 11648 hectares for maintenance
        in which the MoEF & CC sanctioned only for creation and maintenance. No
        fund was sanction for Advance works during the year.
      </p>
      <p>
        During the year 2015-16, no proposal under creation was submitted since
        fund under Advance works was not sanctioned during 2014-15. Only
        maintenance for 9910 hectares was proposed and the MoEF & CC (NAEB)
        provided sanction for maintenance of 8482 hectares only.
      </p>
      <p>
        During the year 2016-17, proposal was submitted for 3037 hectares for
        Advance work and 4552 hectares for maintenance of old plantations. The
        MoEF & CC (NAEB) did not sanction any work programme during 2016-17.
      </p>
      <p>
        During the year 2017-18, proposal was submitted for 2726 hectares for
        Advance woks and 1584 hectares for maintenance. The MoEF & CC (NAEB)
        approved for undertaking maintenance works only (for 1584 hectares) and
        committed liabilities for 2015-16 (balance amount for maintenance during
        2015-16 since 2nd instalment was not released during the year).
      </p>
      <p>
        The MoEF& CC vide letter No. MoEF & CC (NAEB):25-1-1/99-B-II-Part Dated
        01/04/2016 stated that the fund sharing pattern will be Central: State
        :: 90 : 10 for the North Eastern States. Further, the MoEF & CC vide
        letter No. MoEF & CC (NAEB):1-2/2017-B-1 Dated 30/01/2018 communicated
        for merger of NAP under NAEB and Desertification Cell (DC) with National
        Mission for a Green India (GIM). Annual Plan of Operation(APO) for
        2018-19 will be prepared and submitted to MoEF & CC accordingly.
      </p>
      <p>
        As on March 2018, there are 9 FDAs in the State; 7(seven) FDAs under
        Social Forestry Wing, 1(one) FDA under Jaintia Hills Territorial
        Division and 1(one) FDA under Khasi Hills Wildlife Division. Altogether,
        there are 366 JFMCs under 9 FDAs implementing the National Afforestation
        Programme (NAP), as shown below:-
      </p>
      <Table striped bordered>
        <thead className='table-dark'>
          <tr>
            <th>Sl. No.</th>
            <th>Name of the FDAs implementing NAP</th>
            <th>No. of JFMCs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>
              Jaintia Hills, Social Forestry Division, Forest Development
              Agency, Jowai.
            </td>
            <td>32 Nos.</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>
              East Khasi Hills, Social Forestry Division, Forest Development
              Agency, Shillong.
            </td>
            <td>48 Nos.</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>
              West Khasi Hills, Social Forestry Division, Forest Development
              Agency, Nongstoin.
            </td>
            <td>53 Nos.</td>
          </tr>
          <tr>
            <td>4.</td>
            <td>
              Ri-Bhoi District, Social Forestry Division, Forest Development
              Agency, Nongpoh.
            </td>
            <td>80 Nos.</td>
          </tr>
          <tr>
            <td>5.</td>
            <td>
              East Garo Hills, Social Forestry Division, Forest Development
              Agency, Williamnagar.
            </td>
            <td>45 Nos.</td>
          </tr>
          <tr>
            <td>6.</td>
            <td>
              West Garo Hills, Social Forestry Division, Forest Development
              Agency, Tura.
            </td>
            <td>44 Nos.</td>
          </tr>
          <tr>
            <td>7.</td>
            <td>
              South Garo Hills, Social Forestry Division, Forest Development
              Agency, Baghmara.
            </td>
            <td>29 Nos.</td>
          </tr>
          <tr>
            <td>8.</td>
            <td>
              Jaintia Hills Territorial Division, Forest Development Agency,
              Jowai.
            </td>
            <td>19 Nos.</td>
          </tr>
          <tr>
            <td>9.</td>
            <td>
              Khasi Hills Wildlife Division, Forest Development Agency,
              Shillong.
            </td>
            <td>16. Nos.</td>
          </tr>
          <tr className='fw-bold'>
            <td colSpan={2}>TOTAL</td>
            <td>366 Nos.</td>
          </tr>
        </tbody>
      </Table>
      <p>
        Till date, these 366 Joint Forest Management Committees have achieved a
        Physical feat of treating 30741 Hectares of area under NAP.
      </p>
      <Stack direction='horizontal' gap={3}>
        <div>
          <Figure>
            <FigureImage src={forestry1} />
            <FigureCaption>Umniangriang barren hill (Then) </FigureCaption>
          </Figure>
        </div>
        <div>
          <Figure>
            <FigureImage src={forestry2} />
            <FigureCaption>Umniangriang Plantation (Now) </FigureCaption>
          </Figure>
        </div>
      </Stack>
      <p>
        Till the end of 2014-15, these 366 numbers of Joint Forest Management
        Committees were implementing NAP and have cumulatively achieved a total
        physical target of 30,741 Hectares, as shown in the table below, FDA -
        wise:-
      </p>
      <Table striped bordered>
        <thead className='table-dark'>
          <tr>
            <th>Sl. No.</th>
            <th>FDAs</th>
            <th>2005-06</th>
            <th>2006-07</th>
            <th>2007-08</th>
            <th>2008-09</th>
            <th>2009-10</th>
            <th>2010-11</th>
            <th>2011-12</th>
            <th>2012-13</th>
            <th>2013-14</th>
            <th>2014-15</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>JH (SF)</td>
            <td>480</td>
            <td>420</td>
            <td>430</td>
            <td>420</td>
            <td>220</td>
            <td>-</td>
            <td>120</td>
            <td>150</td>
            <td>250</td>
            <td>137</td>
            <td>2627</td>
          </tr>
          <tr>
            <td>2</td>
            <td>EKH (SF)</td>
            <td>600</td>
            <td>400</td>
            <td>375</td>
            <td>450</td>
            <td>-</td>
            <td>100</td>
            <td>140</td>
            <td>380</td>
            <td>600</td>
            <td>320</td>
            <td>3365</td>
          </tr>
          <tr>
            <td>3</td>
            <td>WKH (SF)</td>
            <td>600</td>
            <td>500</td>
            <td>750</td>
            <td>300</td>
            <td>900</td>
            <td>150</td>
            <td>1200</td>
            <td>600</td>
            <td>522</td>
            <td>231</td>
            <td>5753</td>
          </tr>
          <tr>
            <td>4</td>
            <td>RBD (SF)</td>
            <td>650</td>
            <td>550</td>
            <td>650</td>
            <td>300</td>
            <td>250</td>
            <td>150</td>
            <td>250</td>
            <td>400</td>
            <td>280</td>
            <td>176</td>
            <td>3656</td>
          </tr>
          <tr>
            <td>5</td>
            <td>EGH (SF)</td>
            <td>570</td>
            <td>430</td>
            <td>500</td>
            <td>500</td>
            <td>-</td>
            <td>-</td>
            <td>750</td>
            <td>450</td>
            <td>365</td>
            <td>207</td>
            <td>3772</td>
          </tr>
          <tr>
            <td>6</td>
            <td>WGH (SF)</td>
            <td>600</td>
            <td>600</td>
            <td>550</td>
            <td>700</td>
            <td>200</td>
            <td>-</td>
            <td>700</td>
            <td>500</td>
            <td>365</td>
            <td>262</td>
            <td>4477</td>
          </tr>
          <tr>
            <td>7</td>
            <td>SGH (SF)</td>
            <td>500</td>
            <td>500</td>
            <td>500</td>
            <td>1000</td>
            <td>-</td>
            <td>-</td>
            <td>400</td>
            <td>250</td>
            <td>250</td>
            <td>52</td>
            <td>3452</td>
          </tr>
          <tr>
            <td>8</td>
            <td>JH(T)</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>650</td>
            <td>400</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>1050</td>
          </tr>
          <tr>
            <td>9</td>
            <td>KH (WL)</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>840</td>
            <td>1200</td>
            <td>350</td>
            <td>199</td>
            <td>2589</td>
          </tr>
          <tr className='fw-bold'>
            <td colSpan={2}>TOTAL</td>
            <td>4000</td>
            <td>3400</td>
            <td>3755</td>
            <td>3670</td>
            <td>1570</td>
            <td>1050</td>
            <td>4800</td>
            <td>3930</td>
            <td>2982</td>
            <td>1584</td>
            <td>30741</td>
          </tr>
        </tbody>
      </Table>
      <h5>Note:-</h5>
      <ol>
        <li>
          JH(SF)= Jaintia Hills, Social Forestry Division, Forest Development
          Agency, Jowai.
        </li>
        <li>
          EKH(SF)=East Khasi Hills, Social Forestry Division, Forest Development
          Agency, Shillong.
        </li>
        <li>
          WKH(SF)=West Khasi Hills, Social Forestry Division, Forest Development
          Agency, Nongstoin.
        </li>
        <li>
          .RBD(SF)=Ri-Bhoi District, Social Forestry Division, Forest
          Development Agency, Nongpoh.
        </li>
        <li>
          EGH(SF)=East Garo Hills, Social Forestry Division, Forest Development
          Agency, Williamnagar.
        </li>
        <li>
          WGH(SF)=West Garo Hills, Social Forestry Division, Forest Development
          Agency, Tura.
        </li>
        <li>
          SGH(SF)=South Garo Hills, Social Forestry Division, Forest Development
          Agency, Baghmara.
        </li>
        <li>
          JH(T) = Jaintia Hills Territorial Division, Forest Development Agency,
          Jowai.
        </li>
        <li>
          KH(WL)= Khasi Hills Wildlife Division, Forest Development Agency,
          Shillong.
        </li>
      </ol>
    </Container>
  )
}

export default JointForestManagement
