import React from 'react'
import { Container, Image, Table } from 'react-bootstrap'
import redd1 from '../../assets/ResearchTraining/rt_redd01.jpg'
import redd2 from '../../assets/ResearchTraining/rt_redd02.jpg'
import redd3 from '../../assets/ResearchTraining/rt_redd03.jpg'
import redd4 from '../../assets/ResearchTraining/rt_redd04.jpg'

const REDD = () => {
  return (
    <Container>
      <h2>REDD+</h2>
      <h4>
        Implementation of REDD+ Pilot Project at Raid Umket, Ri-bhoi district
      </h4>
      <p>
        Reduction of Emission due to Deforestation and Degradation (REDD+) PILOT
        PROJECT was also implemented in Raid Umket in Ri Bhoi, District from
        2015-2017. Redd+ Pilot project was implemented at Raid Umket, Ribhoi
        District as forests under this Raid are facing degradation mainly due to
        felling of trees for timber, fuel wood and forest fires. Following are
        the activities carried out in implementation of this Pilot project:
      </p>
      <ul>
        <li>Creating Awareness in the community</li>
        <li>Socioeconomic Survey</li>
        <li>Forest Cover Mapping</li>
        <li>Forest Inventory</li>
        <li>Baseline of Forest Cover</li>
        <li>Reference Level</li>
        <li>Forest Carbon Calculation & Projection</li>
        <li>Tree plantation activity</li>
        <li>Forest Fire Management</li>
        <li>Introduction of Improved Chulhas</li>
        <li>Bamboo based Enterprise</li>
        <li>Installation of Solar Lights within the Umket Raid.</li>
      </ul>
      <ol>
        <li>
          <strong>Creating awareness in the community:</strong> After finalising
          the site, the next step was to create awareness among the community
          people about the concept of REDD+. Meetings were conducted with the
          villagers of the Raid wherein information on climate change, impacts
          of climate change on natural resources including forest and also the
          role of forests in mitigating climate change was given with the help
          of lectures and audio visual media. Interaction with the villagers was
          done in their own dialect. Creating awareness sets the stage where we
          gather feedback and ideas, get to ask questions and importantly seek
          the understanding as to why we are doing it. Flyers were distributed
          to every household, giving them insight about REDD+ and its
          activities.
        </li>
        <Image src={redd1} thumbnail />
        <li>
          <strong>Socioeconomic Survey:</strong> In order to understand
          socio-economic conditions of the people, their dependence on forests,
          income levels, literacy, livestock, occupational pattern etc. a
          complete survey of all the households in the Raid was conducted. A
          predesigned questionnaire was used for the socio-economic survey.
          Summary of information from the questionnaire to provide an overview
          profile of the villages is presented in the following sub sections.
        </li>
        <li>
          <strong>Forest Cover Mapping:</strong> Forest cover mapping of the
          Raid has been done using IRS P6 LISS IV data of the period October
          2015. Forest cover has been mapped in two classes - Dense Forest
          (canopy density &gt; 0.4) and Open Forest (canopy density between 0.1
          to 0.4). Scrub areas in the map show canopy density &lt; 0.1. Table.10
          gives the Forest cover area figures of the entire land under the Raid
          including forests owned by individuals.
        </li>
        <h5>Forest cover area of Raid Umket</h5>
        <Table striped bordered>
          <thead className='table-dark'>
            <tr>
              <th>DESCRIPTION</th>
              <th>Area(ha)</th>
              <th>Area %</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dense forest 40-70% above </td>
              <td>160.71 </td>
              <td>12.98 </td>
            </tr>
            <tr>
              <td>Open forest 10-40% </td>
              <td>466.64 </td>
              <td>37.70 </td>
            </tr>
            <tr>
              <td>Scrub &gt;10% </td>
              <td>188.40 </td>
              <td>15.22 </td>
            </tr>
            <tr>
              <td>Non-forest </td>
              <td>422.16 </td>
              <td>34.10 </td>
            </tr>
            <tr className='fw-bold'>
              <td>Total</td>
              <td>1237.91</td>
              <td>100</td>
            </tr>
          </tbody>
        </Table>
        <li>
          <strong>Forest Inventory:</strong> Forest Inventory in the Umket Raid
          and village forests has been done following Stratified Random Sampling
          approach. For this, forest cover map has been used as strata map with
          dense forest and open forest as two strata. Forest inventory was done
          on these strata based on random sampling method with 18 sampling plots
          in open forest and 26 sampling plots in dense forest in area
          proportion to size.
        </li>
        <li>
          <strong>Baseline of Forest Cover:</strong>
          <Table striped bordered>
            <thead className='table-dark'>
              <tr>
                <th>Year</th>
                <th>Dense(ha)</th>
                <th>Open(ha)</th>
                <th>Total Forest Cover(ha)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2001</td>
                <td>22.06</td>
                <td>25.16</td>
                <td>47.22</td>
              </tr>
              <tr>
                <td>2006</td>
                <td>6.73</td>
                <td>28.35</td>
                <td>35.08</td>
              </tr>
              <tr>
                <td>2011</td>
                <td>18.04</td>
                <td>13.52</td>
                <td>31.56</td>
              </tr>
              <tr>
                <td>2016</td>
                <td>17.09</td>
                <td>11.77</td>
                <td>28.86</td>
              </tr>
            </tbody>
          </Table>
          REDD+ activities involves performance based payments for enhanced
          carbon sequestration from forests. These are essentially connected
          with the measurement and quantification of such activities. The
          reference level serves as a reference point from which reductions of
          emissions from deforestation or forest degradation, or increase in
          sequestration through improved forest management plan or enhancement
          of carbon stocks are measured against. The current and actual efforts
          of the mitigation activities can be compared using the reference level
          throughout a pre-determined time frame.
          <br />
          <br />
          Reference level as business-as-usual takes into account the historic
          data and deductions are then made using these data. BAU baselines
          refer to the quantity of Carbon emission without any mitigation
          action. Following REDD+ interventions, such as improved forest
          management plan and other mitigating activities, projections are made.
          <br />
          <br />
          <strong>Reference Level</strong>
          <Table striped bordered>
            <thead className='table-dark'>
              <tr>
                <th>Sl. No.</th>
                <th>Year</th>
                <th>Forest Carbon (tC)</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2010</td>
                <td>5601.92</td>
                <td>Measured</td>
              </tr>
              <tr>
                <td>2</td>
                <td>2015</td>
                <td>4421.66</td>
                <td>Measured</td>
              </tr>
              <tr>
                <td>3</td>
                <td>2020</td>
                <td>4802.62</td>
                <td>Projected</td>
              </tr>
              <tr>
                <td>4</td>
                <td>2025</td>
                <td>5216.40</td>
                <td>Projected</td>
              </tr>
              <tr>
                <td>5</td>
                <td>2030</td>
                <td>5665.83</td>
                <td>Projected</td>
              </tr>
            </tbody>
          </Table>
        </li>
        <li>
          <strong>Tree plantation activity:</strong> An innovative participative
          approach was followed in the plantation activity. Since vacant lands
          where plantations can be raised are not much available in the Raid.
          Vacant lands in the open forests (of the community forests) were
          identified in the form of small plots using Google Earth image. Each
          plot was then assigned to a family for raising plantations on these,
          after their expression of willingness. Plantations on the plots of
          lands were raised by the families for which they were paid financial
          incentives as per the norm and based on the measured and verified
          performance. Using Google Earth and ArcGIS, 8.8 ha of suitable land
          were identified for plantation activities in both the Community and
          Village Forest. A total of 200 sampling plots were generated for
          laying down the models for tree plantation with an area of
          approximately 324 sq. m each. 50 tree saplings were planted in each
          plot with a spacing distance of 2-3mx2-3m from one another and 3m or
          more distance away from matured or well established trees in order to
          avoid competition for water, light and nutrients.
          <br />
          <br />A total of 10,000 saplings were planted in the identified
          plantation sites which included indigenous and fast growing species
          along with fruit tree saplings and bamboos. In accordance to the
          plantation sites species were planted by the villagers in order to
          meet the conditions of the area.
        </li>
        <li>
          <strong>Forest Fire Management:</strong> Fire is the most destructive
          factor threatening the forest of the region. These fires occur during
          the months when the forest floor is covered with a thick layer of
          leaves. Once started, such fires become almost unmanageable and
          destroy large tracks of forest everywhere, suppressing natural
          regeneration. In order to prevent and control forest fires, early
          protection and control of such fires is essential. The following
          activities will be used to control this driver of deforestation:
          <br />
          (i)Creation of network of fire lines along the periphery of the
          forests.
          <br />
          (ii)Appointment of fire watchers during the fire season so that forest
          fires can be detected and extinguish promptly. Community awareness
          raising programs regarding the danger fire poses to their forest and
          how community can control fires once detected.
          <br />
        </li>
        <li>
          <strong>Introduction of Improved Chulhas:</strong> Traditional
          three-stone open fire and mud chulhas consumed high quantity of
          firewood for any cooking purpose. At the same time, they produce a lot
          of smoke, soot and other suspended organic matter within the house.
          This can cause an increase in health related problems mainly affecting
          the lungs and eyes of those family members who are constantly engage
          in cooking activities.
          <br />
          The benefits of smokeless chulhas include:-
          <br />
          (i)less fuel wood consumption which in turn helps in conservation of
          the natural forest
          <br />
          (ii)high efficiency of heating potential
          <br />
          (iii)reduced emissions of smoke, soot and other suspended matter
          <br />
          (iv)prevention from health hazard
          <br />
          <br />
          Improved Smokeless Chulhas have been incorporated in the six villages
          falling under the project area. These villages include Umket, Umtung,
          Palwi, Mawdwar, Nongtarian and Bangla Nongtraw. From each of the six
          villages, five family households have been identified by the village
          headman in installing the aforementioned smokeless chulhas. Among
          these identified families, one master trainer from each village was
          selected to undergo training regarding the construction of improved
          smokeless chulha. An Awareness and Training programme in collaboration
          with the State council of Science Technology and Environment, Shillong
          was organised at Umtung village where the six master-trainers from
          each village were given a brief practical training for construction of
          an improved smokeless chulha.
          <br />
          <br />
          <Image src={redd2} thumbnail />
          <br />
          <br />
          The average usage prior to the introduction of the improved smokeless
          chulhas was{' '}
          <strong>10.87 kg per Household (4-5 individuals) per day</strong>.
          Since the introduction of the smokeless chulhas, however, the firewood
          consumption has decreased considerably. The average usage went down to
          <strong>5.5 kg per household per day</strong> i.e. almost by 50%.
        </li>
        <li>
          <strong>Workshop cum Training Programme on Bamboo:</strong> A workshop
          cum training programme on Bamboo was organized at Cane and Bamboos
          Technology Centre (CBTC) at Byrnihat. Around 22 interested people from
          the six villages under Raid Umket were selected to attend the
          Workshop-cum-Training programme.
        </li>
        <li>
          <strong>Installation of Solar Lights within the Umket Raid:</strong>{' '}
          In the Socio-economic survey, it was found that 20% of the households
          within the Raid Umket lack in electricity connection. Another concern
          is the erratic distribution of electricity where the Raid experiences
          hours or even days without electricity. Poor availability of
          electricity causes hardship to the students who are unable to study.
          Students are not the only ones affected by a lack of proper lighting.
          Farmers and artisans are also affected by this since they are unable
          to work in the evening. One way of overcoming this adversity is the
          installation of solar lights. It is a renewable form of energy and it
          does not cause any air pollution. The Solar light system consist of a
          solar panel, LED bulbs, battery and a charge controller.These solar
          light systems have been installed in all the six villages in the Raid
          Umket viz. Bangla Nongtraw, Mawdwar, Nongtarian, Palwi, Umtung and
          Umket. They were installed in the Community halls/Schools in the
          villages. Installation of solar light systems is one of the entry
          point activities done in the six villages who actively participated in
          the REDD+ pilot project.
        </li>
        <Image src={redd3} thumbnail />
        <li>
          <strong>
            Released of a Project Design Document of REDD+ Pilot Project in Raid
            Umket:
          </strong>{' '}
          A Project Design Document was prepared and released which can be a
          useful guiding document in future capacity building programmes on
          REDD+ and also in implementation of community REDD+ projects in the
          State and elsewhere.
        </li>
        <Image src={redd4} thumbnail />
      </ol>
    </Container>
  )
}

export default REDD
