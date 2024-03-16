import React from 'react'
import { Container, Image, Table } from 'react-bootstrap'
import forestReserve from '../../assets/Forest/forest_reserved.jpg'

const ReservedForest = () => {
  return (
    <Container>
      <h2>Forest Administration</h2>
      <p>
        The Forest Department has been compartmented into four Circles/Wings
        based on jurisdiction and nature of activities. They are the Territorial
        Circle, the Wildlife Circle, the Social Forestry and Environment Circle
        and the Climate Change, Research and Training Circle.
      </p>
      <h4>Territorial Wing</h4>
      <p>
        Its primary activities are enforcement of various Forest Regulations and
        Rules, protection of the Reserved/Protected Forests, granting mining
        leases/quarry permits for minor minerals under Meghalaya Minor Mineral
        Concession Rules, 2016 collection of Forest Revenue and regulation of
        Wood Based Industries.
      </p>
      <p>
        The Territorial Wing is headed by the Principal Chief Conservator of
        Forests (Territorial). He is assisted by the Additional Principal Chief
        Conservator of Forests (T), Chief Conservator of Forests (T) and two
        supervisory level officers viz., Conservator of Forests (T), Shillong
        and Conservator of Forests (T), Tura, who supervises and control
        officers in the rank of Divisional Forest Officers in-charge of
        Territorial Divisions. There are 6 (Six) Territorial Divisions viz.,
      </p>
      <Table striped bordered>
        <thead className='table-dark'>
          <tr>
            <th>Division</th>
            <th>Jurisdiction</th>
            <th>Contact Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>East Khasi Hills & Ri-Bhoi Territorial Division, Shillong</td>
            <td>East Khasi Hills District and Ri-Bhoi District</td>
            <td>0364-2226375</td>
          </tr>
          <tr>
            <td>Jaintia Hills Territorial Division, Jowai</td>
            <td>East Jaintia Hills and West Jaintia Hills Districts</td>
            <td>03652-223709</td>
          </tr>
          <tr>
            <td>West and South West Garo Hills Territorial Division, Tura</td>
            <td>West and South West Garo Hills Districts</td>
            <td>03651-223850</td>
          </tr>
          <tr>
            <td>East & North Garo Hills Territorial Division, Williamnagar</td>
            <td>East Garo Hills District and North Garo Hills Districts</td>
            <td></td>
          </tr>
          <tr>
            <td>
              South Garo Hills Territorial and Social Forestry Division,
              Baghmara
            </td>
            <td>South Garo hills District</td>
            <td></td>
          </tr>
          <tr>
            <td>
              West and South West Khasi Hills Territorial and Social Forestry
              Division, Nongstoin
            </td>
            <td>
              West Khasi hills District and South West Khasi Hills District
            </td>
            <td>9436998562</td>
          </tr>
        </tbody>
      </Table>
      <h4>Activities</h4>
      <p>
        The major activities being undertaken by the Territorial Circle are as
        follows:-
      </p>
      <ul>
        <li>
          Protection of Reserved and Protected Forests from biotic and abiotic
          pressure.
        </li>
        <li>Management of RF/PFs as per approved Working Plans.</li>
        <li>Creation of Plantations within RFs and PFs.</li>
        <li>
          Maintenance of forest nurseries to meet demand of seedlings from
          public.
        </li>
        <li>
          Implementation of Acts and Rules Viz. Meghalaya Forest Regulation Act,
          1973;Meghalaya Tree Preservation Act, 1976; Meghalaya Forest (Removal
          of Timber) Regulation Act, 1981; Forest Conservation
          Act,1980;Meghalaya Tree Felling (Non ForestArea) Rules,2006; Meghalaya
          Minor Mineral Concession Rules, 2016 etc.
        </li>
        <li>
          Implementation of the Orders of the Hon'ble Supreme Court of India and
          National Green Tribunal in matters related with the conservation of
          forests and environment.
        </li>
        <li>
          Regulation of felling of trees in private and community forests as per
          approved working schemes.
        </li>
        <li>
          Granting mining leases/quarry permits under Meghalaya Minor Mineral
          Concession Rules, 2016 in respect of minor mineral specified in
          Schedule III.
        </li>
        <li>
          Regulation of establishment and working of wood based industries Viz.
          Saw mills, Furniture units and Timber Depot.
        </li>
        <li>
          Issuing NOC/Non-forest certificate for projects, mining, Roads,
          constructions, stone crusher, furniture units, extraction of minor
          minerals and various projects.
        </li>
        <li>
          Processing project proposals for diversion of forest land under FC
          Act, 1980.
        </li>
        <li>
          Regulation and control of transit of forest produces within and
          outsidethe State.
        </li>
        <li>
          Regulation of functioning of Ferro-alloy industriesas per Meghalaya
          Charcoal Rules, 2006.
        </li>
        <li>
          Collection of Forest Royalty and Transit Fee from forest produce/
          minor minerals.
        </li>
        <li>
          Co-ordinating with District Administration/Police for smooth
          administration of Forest Laws especially illicit felling of trees and
          closure of illegal saw-mills.
        </li>
        <li>
          Processing of Forest Offence Reports to Judiciary for issue of
          process.
        </li>
        <li>
          Dealingwith court cases on matters related to forest protection e.g.
          cases against illegal felling, cases against illegal saw mills, cases
          against encroachment etc.
        </li>
        <li>
          Facilitating clearing wind fallen trees on road to ease the traffic
          jam and facilitating cutting of dangerous trees in Government offices
          and Government land.
        </li>
      </ul>
      <h4>Reserved & Protected Forest</h4>
      <div className='text-center'>
        <Image src={forestReserve} thumbnail />
      </div>
      <h4>List of Reserved Forest in Meghalaya</h4>
      <Table bordered>
        <thead className='table-dark'>
          <tr>
            <th>Jurisdiction</th>
            <th>District</th>
            <th>Name of RF</th>
            <th>Area(sq.km)</th>
            <th>Gazette Notifications</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={5}>
              DFO (T) East Khasi Hills & Ri-Bhoi District, Shillong
            </td>
            <td rowSpan={2}>Ri-Bhoi</td>
            <td>Nongkhyllem R.F.</td>
            <td>125.91</td>
            <td>
              No. 4692 F of 23.7.1909 & 864 G. J of 4.2.1939. A part of
              Nongkhyllem R.F. comprising an area of 29.00 Sq. Km has been
              notified as Nongkhyllem WLS vide No.FOR.25/81/5,Dt.25-3-1981
            </td>
          </tr>
          <tr>
            <td>Umsaw R.F.</td>
            <td>0.44</td>
            <td>No. G.F.R. 234/46/3 of 16.12.1946</td>
          </tr>
          <tr>
            <td rowSpan={3}>East Khasi Hills</td>
            <td>Riatkhwan R.F.</td>
            <td>3.91</td>
            <td>No. 806 R of 5.3.1892 & 4287 R of 1.9.1892</td>
          </tr>
          <tr>
            <td>Shyrwat R.F</td>
            <td> 0.44</td>
            <td>No. FOR.179/80/187 of 28.3.1988</td>
          </tr>
          <tr>
            <td>Riat Laban R.F.</td>
            <td>2.05</td>
            <td>No. FOR 179/80/183 of 28.3.1988</td>
          </tr>
          <tr>
            <td rowSpan={3}>DFO (T) Jaintia Hills, Jowai</td>
            <td rowSpan={3}>East Jaintia Hills</td>
            <td>Saipung R.F.</td>
            <td>150.35</td>
            <td>No. 26/7/1876 and 5 of 17.10.187</td>
          </tr>
          <tr>
            <td>Narpuh R.F Block I</td>
            <td>62.42</td>
            <td>No. 3978 F of 17.6.1909</td>
          </tr>
          <tr>
            <td>NarpuhR.F Block II</td>
            <td>98.68</td>
            <td>
              No. 1106 R of 9.3.1918. A part of Narpuh R.F Bl. II comprising an
              area of 59.90 Sq.km. has been notified as Narpuh WLS vide
              No.FOR.128/2012/20,Dt.10-06-2014
            </td>
          </tr>
          <tr>
            <td>
              DFO West Khasi Hills Social Forestry & Territorial Division,
              Nongstoin
            </td>
            <td>West Khasi Hills</td>
            <td>Nongumiang RF.</td>
            <td>0.31</td>
            <td>FOR.118/92/124 dated 08.09.2003.</td>
          </tr>
          <tr>
            <td rowSpan={2}>
              DFO West & South West Garo Hills Territorial Division, Tura
            </td>
            <td rowSpan={2}>West Garo Hills</td>
            <td>Dibru Hills R.F.</td>
            <td>15.02</td>
            <td>No. 28 dt.19.6.1883 & 3526 R of 10.12.1930</td>
          </tr>
          <tr>
            <td>Tura peak R.F</td>
            <td>4.19</td>
            <td>No. FOR.10/75/32 dt 23.6.1982</td>
          </tr>
          <tr>
            <td rowSpan={9}>
              DFO East and North Garo Hills (T) Division, Williamnagar
            </td>
            <td rowSpan={3}>East Garo Hills</td>
            <td>Songsak R.F.</td>
            <td>23.31</td>
            <td>No. 29 of 1.10.1885 & 3583 R of 5.9.1902</td>
          </tr>
          <tr>
            <td>Rongrenggiri R.F.</td>
            <td>36.26</td>
            <td>No. 28 of 19.6.1883 & 375 R of 29.1.1932</td>
          </tr>
          <tr>
            <td>Darugiri R.F.</td>
            <td>10.36</td>
            <td>Number 28 of 19.6.1883 & 373 R of 29.1.1932</td>
          </tr>
          <tr>
            <td rowSpan={6}>North Garo Hills</td>
            <td>Dambu R.F.</td>
            <td>18.13</td>
            <td>No. 22 of 12.3.1880 & 4276 R of 14.10.1962</td>
          </tr>
          <tr>
            <td>Chimabangshi R.F.</td>
            <td>23.28</td>
            <td>No. 28, dt 19.6.1883 & FOR/Sectt/492/63/4 dt 22.12.1965</td>
          </tr>
          <tr>
            <td>Rajasimla R.F.</td>
            <td>18.13</td>
            <td>No. 28 of 19.6.1883 & 665 R of 15.2.1899</td>
          </tr>
          <tr>
            <td>Ildek R.F.</td>
            <td>2.59</td>
            <td>No. 28 of 19.6.1883</td>
          </tr>
          <tr>
            <td>Dhima R.F.</td>
            <td>20.72</td>
            <td> No. 28 of 19.6.1883 & 3715 R of 11.8.1904</td>
          </tr>
          <tr>
            <td>Dilma R.F.</td>
            <td>2.59</td>
            <td>No. 28 of 19.6.1883</td>
          </tr>
          <tr>
            <td rowSpan={5}>
              DFO South Garo Hills Social Forestry and Territorial Division,
              Baghmara
            </td>
            <td rowSpan={5}>South Garo Hills</td>
            <td>Baghmara R.F.</td>
            <td>43.91</td>
            <td>No. 12 dt 24.2.1887</td>
          </tr>
          <tr>
            <td>Angratoli R.F.</td>
            <td>30.11</td>
            <td>No. 3 dt 7.11.1883 & 2478 R of 15.6.1915</td>
          </tr>
          <tr>
            <td>Rewak R.F.</td>
            <td>6.47</td>
            <td>No. 44 dt. 7.11.1883 & 1699 R of 26.7.1932</td>
          </tr>
          <tr>
            <td>Emangiri R.F. </td>
            <td>8.29</td>
            <td>No. 44 dt. 7.11.1883 & 1699 R of 26.7.1932</td>
          </tr>
          <tr>
            <td>Siju R.F.</td>
            <td>5.18</td>
            <td>No. 44 dt. 7.11.1883 & 1699 R of 26.7.1932</td>
          </tr>
          <tr className='fw-bold '>
            <td colSpan={3}>Total</td>
            <td>626.55</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <h4>Protected Forests in Meghalaya</h4>
      <Table bordered>
        <thead className='table-dark'>
          <tr>
            <th>Jurisdiction</th>
            <th>District</th>
            <th>Name of P.F</th>
            <th>Area (Sq.km)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={5}>
              DFO (T) East Khasi Hills &amp; Ri-Bhoi District, Shillong
              <strong></strong>
            </td>
            <td rowSpan={5}>East Khasi hills </td>
            <td>Upper Shillong P.F</td>
            <td>7.66</td>
          </tr>
          <tr>
            <td>Short Round P.F</td>
            <td>1.13</td>
          </tr>
          <tr>
            <td>LaitkorP.F</td>
            <td>3.25</td>
          </tr>
          <tr>
            <td>Green Block No.2</td>
            <td>0.21</td>
          </tr>
          <tr>
            <td>UmkhutiP.F</td>
            <td>0.14</td>
          </tr>
          <tr className='fw-bold'>
            <td colSpan={3}>Total</td>
            <td>12.39</td>
          </tr>
        </tbody>
      </Table>
      <h4>
        Non Forest Land transferred to the Forest Department for raising
        Compensatory Afforestation and exchanged lands
      </h4>
      <Table bordered>
        <thead className='table-dark'>
          <tr>
            <th>Name of User Agency </th>
            <th>Name of project</th>
            <th>Area (ha)</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Meghalaya State Electricity Board/MeECL</td>
            <td>
              Diversion of 99.00 ha forest land for Myntdu (Leshka) Hydro
              Project in Jaintia Hills
            </td>
            <td>106.28</td>
            <td>Umdiker, Ri Bhoi District </td>
          </tr>
          <tr>
            <td rowSpan={2}>MeCL</td>
            <td rowSpan={2}>
              Exchange land against 24.28 ha of land handed over for stage IV
              Hydel project
            </td>
            <td>23.48</td>
            <td>Nongmahir  Road Ri Bhoi District</td>
          </tr>
          <tr>
            <td>15.78</td>
            <td>Island </td>
          </tr>
          <tr>
            <td>MeCL</td>
            <td>
              Exchange against proposal for 132 KV transmission line from stage
              IV power station to Sarusajai
            </td>
            <td>3.5</td>
            <td>Fisheries site, NongmahirRi Bhoi District</td>
          </tr>
          <tr>
            <td>M/s Star Cement</td>
            <td>
              Non-Forest land transferred to the Department for compensatory
              afforestation under FC Act 1980
            </td>
            <td>4.82</td>
            <td>Moulhoi, East Jaintia Hills </td>
          </tr>
          <tr>
            <td>M/s AdhunikCement Ltd.</td>
            <td>-Do-</td>
            <td>154.888 </td>
            <td>Moulhoi, East Jaintia Hills</td>
          </tr>
          <tr className='fw-bold'>
            <td colSpan={2}>Total</td>
            <td>308</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <h4>Parks & Gardens under The Control of Forest Department</h4>
      <Table bordered>
        <thead className='table-dark'>
          <tr>
            <th>District </th>
            <th>Name &amp; Location</th>
            <th>Area (Ha)</th>
            <th>Jurisdiction</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={9}>East Khasi hills </td>
            <td>Children Park, Fire Brigade,Shillong</td>
            <td>0.14</td>
            <td rowSpan={5}>
              DFO (T) East Khasi Hills &amp; Ri-Bhoi District, Shillong
            </td>
          </tr>
          <tr>
            <td>Polo park, Polo,Shillong</td>
            <td>0.26</td>
          </tr>
          <tr>
            <td>Rose Garden near Lady Hydari Park, Shillong</td>
            <td>0.18</td>
          </tr>
          <tr>
            <td>Botanical Garden Shillong </td>
            <td>1.4</td>
          </tr>
          <tr>
            <td>Nongpoh Park </td>
            <td>0.11</td>
          </tr>
          <tr>
            <td>Lady Hydari Park, Shillong</td>
            <td>3.53</td>
            <td rowSpan={2}>DFO, Khasi Hills Wildlife Division, Shillong </td>
          </tr>
          <tr>
            <td>Lum Nehru Park, Umiam lake</td>
            <td>9.10</td>
          </tr>
          <tr>
            <td>Ward's Lake, Shillong </td>
            <td>6.28</td>
            <td rowSpan={2}>DFO, Social Forestry Division, EKH, Shillong</td>
          </tr>
          <tr>
            <td>Thangkharang Park </td>
            <td>5.5</td>
          </tr>
          <tr>
            <td rowSpan={2}>Ri-Bhoi</td>
            <td>Proposed State Zoo, Ri-bhoi </td>
            <td>72.5 </td>
            <td>DFO, Khasi Hills Wildlife Division, Shillong</td>
          </tr>
          <tr>
            <td>Botanical Garden, Lumsopetbneng</td>
            <td>144.48</td>
            <td>DFO, Silviculture Division Shillong</td>
          </tr>
          <tr>
            <td rowSpan={3}>West Garo hills </td>
            <td>Nehru Park cum Mini Zoo, Tura </td>
            <td>13.4</td>
            <td>DFO, Garo Hills Wildlife Division, Tura </td>
          </tr>
          <tr>
            <td>Botanical Garden, Tura</td>
            <td>3.71</td>
            <td>DFO (T), Tura </td>
          </tr>
          <tr>
            <td>Memorial Park </td>
            <td>17</td>
            <td>West Garo Hills Social Forestry Division, Tura </td>
          </tr>
          <tr>
            <td rowSpan={2}>East Garo Hills </td>
            <td>Williamnagar Children's park</td>
            <td>4.80 </td>
            <td rowSpan={2}>
              East Garo Hills Social Forestry Division, Williamnagar
            </td>
          </tr>
          <tr>
            <td>Botanical Garden</td>
            <td>13 </td>
          </tr>
          <tr className='fw-bold'>
            <td colSpan={2}>Total</td>
            <td>295.39</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <h4>
        Forest area under direct control of Forests & Environment Department
      </h4>
      <Table bordered>
        <thead className='table-dark'>
          <tr>
            <td>Particular </td>
            <td>Area (Sq.km.)</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Reserved Forests </td>
            <td>626.55</td>
          </tr>
          <tr>
            <td>Protected Forests </td>
            <td>12.39</td>
          </tr>
          <tr>
            <td>National Parks (including proposed)</td>
            <td>399.48</td>
          </tr>
          <tr>
            <td>Wildlife Sanctuary (including proposed)</td>
            <td>100.74</td>
          </tr>
          <tr>
            <td>
              Non-Forest Land transferred to the Department and Exchanged lands
            </td>
            <td>3.08</td>
          </tr>
          <tr>
            <td>Parks and Gardens </td>
            <td>2.95</td>
          </tr>
          <tr className='fw-bold'>
            <td>Total</td>
            <td>1145.19</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}

export default ReservedForest
