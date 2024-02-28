import React from "react"
import { Container, Image } from "react-bootstrap"
import fire from "../../assets/Forest/forest_fire.jpg"

const ForestFire = () => {
  return (
    <Container>
      <h2>Forest Fire and Crisis Management in Meghalaya</h2>
      <p>
        Forest fire protection is part of conservation efforts of the State
        Forest Department in the entire forest area within the State. As most of
        the forest land in the State are owned by the Communities, this
        conservation efforts is being jointly taken up by the department and
        these communities.
      </p>
      <p>
        For forest fire protection purpose, the State Government has constituted
        the State Crisis Management Group (SCG), with the Chief Secretary as the
        Chairman and other members, as directed by the Ministry of Forests,
        Environment & Climate Change, Government of India.
      </p>
      <p>
        Similarly, the department has constituted the Crisis Management Cell for
        Forest Fire, headed by the Principal Chief Conservator of Forests & Head
        of Forest Force (PCCF & HoFF). A total number of 14 Divisions have been
        entrusted to look after the forest fire crisis within all the 11
        districts of the State. Of the 39 C&RD Blocks within the State, a
        minimum of 3 C&RD Blocks each division hasbeen allotted through their
        respective Ranges and Beat Offices, for the purpose of forest fire
        protection only, through the involvement of the community by creation of
        Village Forest Fire Control Committee (VFFCC).
      </p>
      <p>
        In line with the National Action Plan on Forest Fire (NAPFF) of the
        Ministry, the State Forest Department has completed mapping and zonation
        of fire risk zone in the entire state. The same has been provided to the
        FSI for real time dissemination of fire incidences information as
        detected by the Satellite.The detected incidences were regularly sent by
        the FSI to the Department on daily basis. Others effective measures as
        envisaged in the NAPFF are being carried out and executed by the
        Department from time to time as per the approved Crisis Management Plan.
      </p>
      <p>
        To mitigate and to give effective measures on forest fire protection,
        the Department has prepared the Crisis Management Plan, and the same has
        been approved by the Ministry. This documentation include the time
        schedule of work plan, digitization and documentationof the fire prone
        maps, role, strategies, mechanism and evaluationof forest fire within
        the state. Revision of the same subject to the direction of the
        Ministry.
      </p>
      <p>
        In order to bring more community participation to combat forest fire,the
        14 Nos. divisions have created a total of 343 number of Village Forest
        Fire Control Committees (VFFCCs) within the State, concerning to those
        highly fire prone areas. Moreover, there are about 366 Joint Forest
        Management Committees (JFMCs) created under N.A.P who helped the
        Department to combat forest fire, especially in their respective
        plantation areas. Awareness were being conducted regarding the effect of
        fire and the result of global warming, etc.
      </p>
      <p>
        The Department has setup a control room at Headquarter with
        well-equipped facilities. Control rooms for the divisions and ranges,
        where fire prone are high were also being set up, for quick
        communication on forest fire alert points. Prompt action on satellite
        forest fire alert points received from FSI were being forwarded through
        these control rooms daily to the concerned Division, Range, field staff
        and VFFCC/JFMC members, as soon as received from the FSI in order to
        combat, evaluate and report such incidences at the earliest.
      </p>
      <p>
        The group of VFFCC members who perform well in fire protection were
        given incentive annually as an honorarium to them. Most of the forest
        fire incidences reported during fire season are from jhum cultivation
        and broom grass burning.This is due to the forest dependent people,who
        intentionally clear and burn the particular forest area for their jhum
        and bun cultivation purposes. And due to difficult hilly
        terrain,therefore, these types of forest fire incidences were very
        difficultforimmediate evaluation/assessment, though the fire points
        detected by the FSI.
      </p>
      <p>
        The 5% of forest area under the direct control of the government are
        regularly manned by field staff. As such, any fire incidences in case
        occur under these areas are immediately doused within a very short
        time.However 95% of the other forest areas outside the government
        control are difficult to evaluate on real time basis due to shortage of
        man-power and hilly terrain.
      </p>
      <div className="text-center">
        <Image src={fire} />
      </div>
    </Container>
  )
}

export default ForestFire
