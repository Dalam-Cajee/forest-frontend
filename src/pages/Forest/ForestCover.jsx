import React from "react"
import { Container, Figure, FigureCaption, FigureImage } from "react-bootstrap"
import forest1 from "../../assets/Forest/forest_cover01.gif"
import forest2 from "../../assets/Forest/forest_cover02.gif"
import forest3 from "../../assets/Forest/forest_cover03.gif"

const ForestCover = () => {
  return (
    <Container>
      <h2>Forest Cover</h2>
      <div className="text-center">
        <Figure>
          <div>
            <FigureImage src={forest1} thumbnail />
          </div>
          <div>
            <FigureImage src={forest2} thumbnail />
          </div>
          <FigureCaption>
            Source: State of Forest Report - 2017 by FSI
          </FigureCaption>
        </Figure>
      </div>
      <p>
        As per the State of Forest Report, 2017 published by Forest survey of
        India the Forest Cover of the State is <strong>17,146</strong> sq km (
        <strong>76.44 % of Geographical area</strong>) and Tree cover is
        <strong> 657 sq km (2.92% of Geographical area)</strong>. Against the
        National Goal to maintain two-third of the land area in hills and
        mountainous region of the country, the Forest and Tree cover in the
        State is <strong>79.37 % covering 17,803 Sq.km</strong>. contributing
        <strong> 2.26 % of India's Forest and Tree Cover</strong>. The State
        ranks in 4th position in terms of percentage of Forest Cover in the
        country. However due to prevailing land tenure system, only
        <strong> 1145.19 sq km</strong> of Forest areas (5.10 % of Geographical
        area ) comes directly under the control of the State Forest Department
        in the form of RF, PF, NP, WLS and Parks and Garden and rest of the
        forest areas belong to communities, clan and private people and District
        Councils.Three Autonomous District Councils have been set up under the
        provisions of the Sixth Schedule to the Constitution of India Viz.
        <ol numbered>
          <li>Khasi Hills Autonomous District Councils</li>
          <li>Jaintia Hills Autonomous District Councils</li>
          <li>Garo Hills Autonomous District Councils</li>
        </ol>
      </p>
      <p>
        Under Para 3 of Sixth Schedule, the District Councils have power to make
        laws with respect to, among others, the management of
        <strong> any forest not being a reserved forest</strong>. Hon'ble
        Supreme Court vide order dated 12.12.1996 in the case of T.N.
        GodavarmanThirumulkpad vs Union Of India &Ors clarified that provisions
        enacted in the Forest Conservation Act, 1980 for the conservation of
        forests and the matters connected therewith must apply to all forests
        irrespective of the ownership or classification thereof; the term
        "forest land", occurring in Section 2 includes "forest" as understood in
        the dictionary sense and also any area recorded as forest in the
        Government record irrespective of the ownership.As per Supreme Court
        Order dated 12.12.1996 and 15.01.1998 in the case of T. N. GODAVARMAN
        THIRUMALPAD Vs. UNION OF INIDA & OTHERS WRIT PETITION (CIVIL) 202/1995,
        the felling of trees in all forest areas irrespective of ownership shall
        be in accordance with approved Working Scheme and only those wood based
        industries which have been cleared by HPC on or before 15.01.1998
        without penalty shall be allowed to shift to industrial estates and
        others would be allowed to wind up as per law.
      </p>
      <div className="text-center">
        <Figure>
          <FigureImage src={forest3} thumbnail />
          <FigureCaption>
            Source: State of Forest Report - 2017 by FSI
          </FigureCaption>
        </Figure>
      </div>
    </Container>
  )
}

export default ForestCover
