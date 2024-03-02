import React from 'react'
import { Container, Table } from 'react-bootstrap'

const GreenIndiaMission = () => {
  return (
    <Container>
      <h2>Green India Mission</h2>
      <p>
        Apart from the NAP, Green India Mission is the other flagship scheme of
        the Social Forestry Wing. The Green India Mission in Meghalaya was
        constituted vide Govt. Notification No. ENV.I/2012/155 Dated 19th March,
        2012 with the Principal Chief Conservator of Forests & HoFF as the
        Chairman, Chief Conservator of Forest Social Forestry & Environment as
        Member Secretary and the others include the Director of Soil & Water
        Conservation, Director of Horticulture and the Chief Engineer Water
        Resources as members. The Government of Meghalaya, Forest and
        Environment Department created a GIM cell in the office of the PCCF &
        HoFF Meghalaya, chaired by the PCCF & HoFF and supported by the State
        FDA functioning in the Social Forestry and Environment Wing. The GIM
        Cell and the SFDA have completed identification of L1, L2 and L3 level
        landscapes for treatment under the mission based on parameters like the
        projected vulnerability of forests to climate change, status of forest
        cover and significant biodiversity/ecosystem value, etc.. The whole
        State has been identified as the Broad Landscape of Importance (L1
        landscape) while 3 (three) Blocks (Betasing, Mawshynrut and Khliehriat)
        have been identified as the Operational Units (L2 landscapes). A
        perspective plan was prepared for 5 years (2017-18 to 2021-22) which
        included sub-mission on quality enhancement, ecosystem restoration and
        increase in forest cover, urban and peri-urban tree cover,
        agro-forestry, wetland restoration, and alternative to fuel-wood but no
        fund was sanctioned by MoEF & CC during the year. Five (5)Joint Forest
        Management Committees (JFMC) under Betasing Block, 7 JFMCs under
        Mawshynrut Block and 6 JFMCs under Khliehriat Block are implementing the
        GIM activities at present. The MoEF & CC sanctioned and released an
        amount of Rs 89.70 lakhs as a bridge plan for preparatory works during
        the year 2013-14. All the 18 JFMCs mentioned above have prepared Micro
        Plans at the L3 level. Compared to NAP, implementation of GIM in
        Meghalaya is still in its initial stage.
      </p>
      <h4>
        Approved Work Programme of MEGHALAYA State under Green India Mission
        (GIM) for 2013-14
      </h4>
      <Table striped bordered>
        <thead className='table-dark'>
          <tr>
            <th rowSpan={2}>Sl. No. </th>
            <th rowSpan={2}>Name of Landscape L2</th>
            <th colSpan={4}>Forest Area (ha)</th>
            <th rowSpan={2}>Other area in (ha)</th>
            <th rowSpan={2}>Area of landscape in ha. </th>
            <th rowSpan={2}>No. of landscape L2 level</th>
            <th rowSpan={2}>Total JFMCs/ Villages</th>
            <th rowSpan={2}>JFMC outreach Activities @ 0.2 lakh per JFMC</th>
            <th rowSpan={2}>Micro planning @ 0.25 per JFMC</th>
            <th rowSpan={2}>Landscape survey @ Rs. 6 lakh per landscapes</th>
            <th rowSpan={2}>EPA @ 2.70 lakh per JFMCs</th>
            <th rowSpan={2}>Total</th>
          </tr>
          <tr>
            <th>Scrub Forest</th>
            <th>Open Forest</th>
            <th>Mod. Dense Forest</th>
            <th>Dense Forest</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Betasing </td>
            <td>230</td>
            <td>2040</td>
            <td>710</td>
            <td>110</td>
            <td>430</td>
            <td>3520</td>
            <td>1</td>
            <td>5</td>
            <td>1.00</td>
            <td>1.25</td>
            <td>6.00</td>
            <td>13.50</td>
            <td>21.75</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>Mawshynrut</td>
            <td>830</td>
            <td>1030</td>
            <td>2200</td>
            <td>810</td>
            <td>540</td>
            <td>5410</td>
            <td>1</td>
            <td>7</td>
            <td>1.40</td>
            <td>1.75</td>
            <td>6.00</td>
            <td>18.90</td>
            <td>28.05</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>Khliehriat</td>
            <td>645</td>
            <td>3250</td>
            <td>1740</td>
            <td>0</td>
            <td>2260</td>
            <td>7895</td>
            <td>1</td>
            <td>6</td>
            <td>1.20</td>
            <td>1.50</td>
            <td>6.00</td>
            <td>16.20</td>
            <td>24.90</td>
          </tr>
          <tr>
            <td>4.</td>
            <td colSpan={12}>State GIM Cell and support at landscape</td>
            <td>-</td>
            <td>11.00</td>
          </tr>
          <tr>
            <td>5.</td>
            <td colSpan={12}>Workshops at State level</td>
            <td>-</td>
            <td>4.00</td>
          </tr>
          <tr className='fw-bold'>
            <td colSpan={2}>Grand Total</td>
            <td>1705</td>
            <td>6320</td>
            <td>4650</td>
            <td>920</td>
            <td>3230</td>
            <td>16825</td>
            <td>3</td>
            <td>18</td>
            <td>3.60</td>
            <td>4.50</td>
            <td>18.00</td>
            <td>48.60</td>
            <td>89.70</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}

export default GreenIndiaMission
