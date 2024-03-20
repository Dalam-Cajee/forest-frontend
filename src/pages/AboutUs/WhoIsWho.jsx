import React from 'react'
import { Container, Tab, Table, Tabs } from 'react-bootstrap'

const WhoIsWho = () => {
  return (
    <Container className='my-3'>
      <h2 className='mb-3'>Who's Who</h2>
      {/* Tabs */}
      <Tabs fill defaultActiveKey='head-quarter' className='custom-nav mb-2'>
        {/* Head Quarter Level */}
        <Tab eventKey='head-quarter' title='Head Quarter Level'>
          <Table striped bordered>
            <thead className='custom-header'>
              <tr>
                <th>Names</th>
                <th>Designation</th>
                <th>Phone (O)</th>
                <th>Phone (R)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Shri. R. S. Gill, IFS</td>
                <td>
                  PCCF & HoFF, Meghalaya, Shillong. Addl. Charge as PCCF (T)
                  Meghalaya, Shillong
                </td>
                <td>220414</td>
                <td>2212313</td>
              </tr>
              <tr>
                <td>Shri. S. M. Sahai, IFS</td>
                <td>
                  PCCF PCCF (Wildlife &amp; Biodiversity), Meghalaya, Shillong
                </td>
                <td>2227271</td>
                <td className='text-center'>-</td>
              </tr>
              <tr>
                <td>Shr. H. C. Choudhary, IFS</td>
                <td>
                  PCCF (Working Plan, Research &amp; Training and District
                  Council Affairs) Addl. Charge as APCCF (CC, R &amp; T) etc.,
                  Shillong
                </td>
                <td>2227311</td>
                <td className='text-center'>-</td>
              </tr>
              <tr>
                <td>Shri. M. B. K. Reddy, IFS</td>
                <td>
                  Addl. PCCF (Schemes, Budget, Forest Laws & Court Matters),
                  Meghalaya, Shillong. Addl. Charge as: i) Managing Director,
                  FDCM Ltd., Meghalaya, Shillong. ii) Addl. PCCF (SF & Envt,.),
                  Shillong.
                </td>
                <td>2227762</td>
                <td className='text-center'>-</td>
              </tr>
              <tr>
                <td>Shri. R. L. Thiek, IFS</td>
                <td>Planning Officer (Forest)</td>
                <td>2225631</td>
                <td className='text-center'>-</td>
              </tr>
              <tr>
                <td>Shri. W. S. Manner, IFS</td>
                <td>CCF (Social Forestry & Environment)</td>
                <td>2502217</td>
                <td className='text-center'>-</td>
              </tr>
              <tr>
                <td>Shri. B. Shangdiar, IFS</td>
                <td>CCF(Administration) : additional charge CF(HQ)&nbsp; </td>
                <td>2501014</td>
                <td className='text-center'>-</td>
              </tr>
              <tr>
                <td>Shri. N. Luikham, IFS</td>
                <td>
                  CCF (T), Meghalaya, Shillong. Addl. Charge as CF (Development
                  &amp; Biodiversity), Shillong. Member Secretary, Meghalaya
                  State Biodiversity Board. Addl. Charge as CEO, MMMRF.&nbsp;
                </td>
                <td>2225580</td>
                <td className='text-center'>-</td>
              </tr>
              <tr>
                <td>Shri. B. Wahlang, IFS</td>
                <td>CCF (FC Act & CAMPA) & Nodal Officer (Forest Fire)</td>
                <td>2227332</td>
                <td className='text-center'>-</td>
              </tr>
              <tr>
                <td>Shri. P. Agrahari, IFS</td>
                <td>
                  CCF (Wildlife), Shillong Addl. Charge as CF (M&E), Shillong.
                </td>
                <td>2505365</td>
                <td className='text-center'>-</td>
              </tr>
              <tr>
                <td>Shri. T. Wanniang, IFS</td>
                <td>
                  CF(T&WL) : additional charge CF(SF &amp; E) Khasi &amp;
                  Jaintia Hills Region
                </td>
                <td>2505362</td>
                <td className='text-center'>-</td>
              </tr>
              <tr>
                <td>Shri. R Nainamalai, IFS</td>
                <td>
                  CF (CC, R&T) Shillong Addl. Charge as CF (P&GIS). Addl. Charge
                  as Member Secretary, Meghalaya State Pollution Control Board.
                </td>
                <td>2228334</td>
                <td className='text-center'>-</td>
              </tr>
              <tr>
                <td>Smti. M.J. Sangma, IFS</td>
                <td>IFS DCF(FC Act)</td>
                <td className='text-center'>-</td>
                <td className='text-center'>-</td>
              </tr>
              <tr>
                <td>Shri. K. L. Nonglait,&nbsp; MFS</td>
                <td>DCF(R&amp;T)</td>
                <td>2505344</td>
                <td className='text-center'>-</td>
              </tr>
              <tr>
                <td>Shri. J. Dkhar, MFS</td>
                <td>
                  DCF(HQ) Additional Charge as Secretary, Eco Development
                  Society of Meghalaya
                </td>
                <td>2505352</td>
                <td className='text-center'>-</td>
              </tr>
              <tr>
                <td>Shri. E. Shullai, MFS</td>
                <td>
                  DCF (M&E) additional Charge as DCF(SF) and Dy, CEO MMMRF
                </td>
                <td>2505350</td>
                <td className='text-center'>-</td>
              </tr>
              <tr>
                <td>Shri. F.S. Wann</td>
                <td>
                  DFO, Forest Resources Survey Division, Shillong. Addl. Charge
                  as DCF (WL) O/o the Addl. PCCF, Wildlife &amp; Chief Wildlife
                  Warden, Shillong.
                </td>
                <td>2505332</td>
                <td className='text-center'>-</td>
              </tr>
              <tr>
                <td>Smti. M. Marbaniang</td>
                <td>Registrar</td>
                <td>2502184</td>
                <td className='text-center'>-</td>
              </tr>
            </tbody>
          </Table>
        </Tab>

        {/* Division Level */}
        <Tab eventKey='division-level' title='Division Level'>
          <Table striped bordered>
            <thead className='custom-header'>
              <tr>
                <th>Names</th>
                <th>Designation</th>
                <th>Phone (O)</th>
                <th>Phone (R)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Shri. I. A. Mathuram, IFS</td>
                <td>
                  Divisional Forest Officer, East Khasi Hills & Ri-Bhoi (T)
                  Division, Shillong. Additional charge as Manager Corporate
                  Planning, FDCM Ltd., Meghalaya, Shillong
                </td>
                <td>2226375</td>
                <td className='text-center'>-</td>
              </tr>
              <tr>
                <td>Shri. N. Alemo Michael, IFS</td>
                <td>
                  Divisional Forest Officer, Jaintia Hills (T) Division, Jowai.
                </td>
                <td>223709</td>
                <td>223809</td>
              </tr>
              <tr>
                <td>Smti. H. Lato, IFS</td>
                <td>
                  Divisional Forest Officer, Social Forestry Division, Shillong.
                  Additional Charge as Divisional Forest Officer, KHADC.
                </td>
                <td>2500039</td>
                <td className='text-center'>-</td>
              </tr>
              <tr>
                <td>Shri. Simeon Kharbudnah, IFS</td>
                <td>Divisional Forest Officer, Training Division</td>
                <td className='text-center'>-</td>
                <td className='text-center'>-</td>
              </tr>
              <tr>
                <td>Smti. T. K. Marak IFS</td>
                <td> Working Plan Officer, Meghalaya, Shillong</td>
                <td>2591758</td>
                <td className='text-center'>-</td>
              </tr>
              <tr>
                <td>Shri. Sachin Gavade, IFS</td>
                <td>
                  Divisional Forest Officer, Khasi Hills (WL) Division, Shillong
                </td>
                <td>2226181</td>
                <td className='text-center'>-</td>
              </tr>
              <tr>
                <td>Smti. Anu P. James, IFS</td>
                <td>Divisional Forest Officer, (FU) Division, Shillong</td>
                <td>2222736</td>
                <td>2591524</td>
              </tr>
              <tr>
                <td>Shri. Sathish K. S, IFS</td>
                <td>
                  Divisional Forest Officer, East &amp; North Garo Hills (T)
                  Division, Williamnagar
                </td>
                <td className='text-center'>-</td>
                <td className='text-center'>-</td>
              </tr>
              <tr>
                <td>Shri. Sanwar M. Swami, IFS</td>
                <td>
                  Divisional Forest Officer, Silviculture Division, Meghalaya,
                  Shillong
                </td>
                <td>2502789</td>
                <td className='text-center'>-</td>
              </tr>
              <tr>
                <td>Shri. Ganesan P, IFS</td>
                <td>
                  Divisional Forest Officer, West & South-West Garo Hills (T)
                  Division, Tura
                </td>
                <td>223850 224710(F)</td>
                <td>222219</td>
              </tr>
              <tr>
                <td>Smti. Rimse K. Sangma, MFS</td>
                <td>Director, BNP Division, Baghmara</td>
                <td>234220</td>
                <td>222219</td>
              </tr>
              <tr>
                <td>Smti. N. Laloo, MFS</td>
                <td>
                  DFO, Jaintia Hills Wildlife Division, Jowai. Addl. Charge as
                  DFO, SF Divn., Jowai Addl. Charge as DFO, JHADC, Jowai
                </td>
                <td>224003</td>
                <td>223947</td>
              </tr>
              <tr>
                <td>Shri. Rupankar K. Marak, MFS</td>
                <td>
                  DFO East &amp; West Garo Hills (WL) Division, Tura Addl.
                  Charge as DFO, Social Forestry Division, West Garo Hills,
                  Tura.
                </td>
                <td>232776</td>
                <td>220631</td>
              </tr>
              <tr>
                <td>Shri. Maxborn. M. Sangma, MFS</td>
                <td>
                  Divisional Forest Officer, (South Garo Hills SF &amp; T)
                  Division, Baghmara
                </td>
                <td className='text-center'>-</td>
                <td className='text-center'>-</td>
              </tr>
              <tr>
                <td>Smti. Nazia R.D. Marak, MFS</td>
                <td>Divisional Forest Officer, GHADC, Tura</td>
                <td className='text-center'>-</td>
                <td className='text-center'>-</td>
              </tr>
              <tr>
                <td>Dr. George H. Chyrmang, MFS</td>
                <td>
                  Divisional Forest Officer, West & South West Khasi Hills SF &
                  T Division, Nongstoin
                </td>
                <td>280279</td>
                <td className='text-center'>-</td>
              </tr>
              <tr>
                <td>Shri. H. G. Momin, MFS</td>
                <td>
                  Divisional Forest Officer, East &amp; North Garo Hills SF
                  Division, Williamnagar
                </td>
                <td>220397</td>
                <td className='text-center'>-</td>
              </tr>
              <tr>
                <td>Shri. Bijoy Lyngdoh, MFS</td>
                <td>
                  Divisional Forest Officer, North Khasi Hills (SF) Division,
                  Nongpoh
                </td>
                <td className='text-center'>-</td>
                <td className='text-center'>-</td>
              </tr>
              <tr>
                <td>Shri. F. S. Wann, MFS</td>
                <td>
                  Divisional Forest Officer, (Forest Resources Survey) Division,
                  Shillong
                </td>
                <td>232317</td>
                <td className='text-center'>-</td>
              </tr>
              <tr>
                <td>Shri. M. B. K. Reddy, IFS</td>
                <td>
                  Managing Director, Forest Development Corporation of Meghalaya
                </td>
                <td>2226331</td>
                <td>2220566</td>
              </tr>
              <tr>
                <td>Shri A. Razi, IRS</td>
                <td>
                  Managing Director, Eco-Tourism Development Society, Tura
                </td>
                <td className='text-center'>-</td>
                <td className='text-center'>-</td>
              </tr>
            </tbody>
          </Table>
        </Tab>
      </Tabs>
    </Container>
  )
}

export default WhoIsWho
