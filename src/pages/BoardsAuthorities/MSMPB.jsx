import React from 'react'
import {
  Col,
  Container,
  Figure,
  FigureCaption,
  FigureImage,
  Image,
  Row,
  Stack,
} from 'react-bootstrap'
import board1 from '../../assets/BoardsAuthorities/boardsauth_msmpb01.jpg'
import board2 from '../../assets/BoardsAuthorities/boardsauth_msmpb02.jpg'
import board3 from '../../assets/BoardsAuthorities/boardsauth_msmpb03.jpg'
import board4 from '../../assets/BoardsAuthorities/boardsauth_msmpb04.jpg'
import board5 from '../../assets/BoardsAuthorities/boardsauth_msmpb05.jpg'
import board6 from '../../assets/BoardsAuthorities/boardsauth_msmpb06.jpg'
import board7 from '../../assets/BoardsAuthorities/boardsauth_msmpb07.jpg'
import board8 from '../../assets/BoardsAuthorities/boardsauth_msmpb08.jpg'
import board9 from '../../assets/BoardsAuthorities/boardsauth_msmpb09.jpg'
import board10 from '../../assets/BoardsAuthorities/boardsauth_msmpb10.jpg'
import board11 from '../../assets/BoardsAuthorities/boardsauth_msmpb11.jpg'
import board12 from '../../assets/BoardsAuthorities/boardsauth_msmpb12.jpg'
import board13 from '../../assets/BoardsAuthorities/boardsauth_msmpb13.jpg'
import board14 from '../../assets/BoardsAuthorities/boardsauth_msmpb14.jpg'
import board15 from '../../assets/BoardsAuthorities/boardsauth_msmpb15.jpg'
import board16 from '../../assets/BoardsAuthorities/boardsauth_msmpb16.gif'
import boardPDF from '../../assets/BoardsAuthorities/boardsauth_msmpb_medicinal_plants_Meghalaya_uses.pdf'

const MSMPB = () => {
  return (
    <Container>
      <Row className='align-items-center mb-5'>
        <Col className='col-sm-auto d-none d-sm-block'>
          <Image src={board1} className='img-fluid' />
        </Col>
        <Col className='col-md-auto fs-3 fw-bold'>
          Meghalaya State Medicinal Plants Board
        </Col>
      </Row>
      <h4>Introduction </h4>
      <p>
        Meghalaya is very rich in floral diversity, a significant part of which
        comprises medicinal and aromatic plants and there is a long- standing
        tradition of use of medicinal plants in the State. The development of
        medicinal plants sector in Meghalaya has a great scope for providing
        employment to the people as there is a huge and ever increasing market
        for medicinal and aromatic plants and their preparations in the country
        and abroad.
      </p>
      <p>
        The Government of Meghalaya constituted the Meghalaya State Medicinal
        Plants Board to handle all matters related to policy formulation, co-
        ordination of various agencies dealing with medicinal plants, local
        health traditions, sustained availability of medicinal plants,validation
        and certification issues and conservation and preservation of medicinal
        plants in the State.
      </p>
      <h4>Diversity of Medicinal and aromatic plants in Meghalaya</h4>
      <p>
        Meghalaya with its wide ranging altitudes, forest types and resultant
        agroclimatic conditions offers habitats for a very large number of
        medicinal plants. The richness is also the result of the people's
        traditional knowledge on them. Though the flora is well known and many
        ethnobotanical publications have been brought out, a consolidated
        account of the medicinal plant diversity is still lacking. This is all
        the more essential when we consider different tribes inhabiting
        different districts with their diverse traditional practices. Altogether
        834 medicinal plant species have so far been reported (Fig.1) Rubiaceae
        is the dominant family with maximum number of medicinal plants in
        Meghalaya.
      </p>
      <h5>Habitat wise distribution of 834 medicinal plants of Meghalaya:-</h5>
      <div className='text-center'>
        <Image src={board2} />
        <FigureCaption>
          H-Herb T-Tree, Shrub L&C-Leafy and Climbers US-Under Story
        </FigureCaption>
      </div>
      <h4>Endemic and Threatened Medicinal Plant Species</h4>
      <p>
        There are many medicinal plants, which have been classified as endemic
        and/or threatened in the state depending on their distribution pattern
        and population size. Eight medicinal plant species such as{' '}
        <em>
          Camellia caduca Cl ex Brandis, Citrus latipes Tanaka, Nepenthes
          khasiana Hk. f, Osbeckia capitata Benth are reported to be endemic to
          Meghalaya only. Thirty-seven medicinal plants, like Schima khasiana
          Dyer, Boehmeria macrophylla D.Don, Citrus medica L, Ilex khasiana
          Purk, Piper griffithii C.DC, Acanthus leucostachys Roxb.
        </em>{' '}
        etc. which has been classified as endemic to Eastern Himalayas, Western
        Ghats, Indo-Burma region and Peninsular India, are also found in
        Meghalaya. Seventeen medicinal plant species found in Meghalaya have
        been classified under threatened category some of these are{' '}
        <em>
          Taxus wallichiana var. baccata, Dendrobium nobile, Panax
          pseudo-ginseng, Nepenthes khasiana
        </em>{' '}
        etc
      </p>
      <Container className=''>
        <Row className='mb-5'>
          <Col className='text-center'>
            <Image src={board3} thumbnail className='img-fluid h-100 ' />
            <FigureCaption>Curcuma longa</FigureCaption>
          </Col>
          <Col className='text-center'>
            <Image src={board4} thumbnail className='img-fluid h-100 ' />
            <FigureCaption>Acorus calamus</FigureCaption>
          </Col>
          <Col className='text-center'>
            <Image src={board5} thumbnail className='img-fluid h-100 ' />
            <FigureCaption>Cinnamomum tamala</FigureCaption>
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col className='text-center'>
            <Image src={board6} thumbnail className='img-fluid h-100 ' />
            <FigureCaption>kaempferia galanga</FigureCaption>
          </Col>
          <Col className='text-center'>
            <Image src={board7} thumbnail className='img-fluid h-100 ' />
            <FigureCaption>paris polyphylla</FigureCaption>
          </Col>
          <Col className='text-center'>
            <Image src={board8} thumbnail className='img-fluid h-100 ' />
            <FigureCaption>Gaultheria fragrantissima</FigureCaption>
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col className='text-center'>
            <Image src={board9} thumbnail className='img-fluid h-100 ' />
            <FigureCaption>Centella asiatica</FigureCaption>
          </Col>
          <Col className='text-center'>
            <Image src={board10} thumbnail className='img-fluid h-100 ' />
            <FigureCaption>Piper longum</FigureCaption>
          </Col>
          <Col className='text-center'>
            <Image src={board11} thumbnail className='img-fluid h-100 ' />
            <FigureCaption>Rauvolfia serpentina</FigureCaption>
          </Col>
        </Row>
      </Container>
      <a href={boardPDF} target='_blank'>
        Medicinal plants found in Meghalaya and uses
      </a>
      <h4>Functions of MSMPB</h4>
      <p>
        The Meghalaya State Medicinal Plants Board (MSMPB) headed by CEO of the
        rank of APCCF supports various efforts to identify, protect and
        proliferate the species of medicinal and aromatic plants and to address
        issues of health care by traditional practitioners and of plant based
        modern medicine. The Meghalaya State Medicinal Plants Board has the
        following mandate:
        <li>
          Extend financial assistance to farmers cultivating medicinal plants
        </li>
        <li>Identify, document, inventorise and quantify medicinal plants</li>
        <li>Promote in-situ conservation and ex-situ cultivation</li>
        <li>Facilitate co-operative efforts and cluster activities </li>
        <li>Deal with matters related to import and export</li>
        <li>
          Develop protocols for cultivation, standardization and quality control
        </li>
        <li>Empower farmers/growers through capacity building.</li>
      </p>
      <h4>Activities and Programmes</h4>
      <p>
        The National Medicinal Plants Board has become a part of the National
        AYUSH Mission under the Ministry of AYUSH Govt. of India, New Delhi. The
        main objective is to promote AYUSH medical system through cost effective
        AYUSH sevices, strengthening of educational system, facilitate
        enforcement of quality control of Ayurveda, Siddha and Unani &
        Homoepathy (ASU & H) drugs and sustainable availabilty of ASU & H raw
        materials. Under the National AYUSH Mission Scheme, the Board has been
        entrusted with the implementation of the component 'Medicinal Plants' to
        be taken up in the State. Through this scheme the Board has been taking
        up activities like nurseries development, cultivation of medicinal
        plants, training/ awareness programs, etc.
      </p>
      <h4>1. Nursery Development:</h4>
      <h5>a. Model nursery:</h5>
      <p>
        To meet the requirement of quality planting material for cultivation
        assistance would be provided for new nurseries under the public sector.
        Infrastructure for model nurseries would include the following:
        <li>
          Mother stocks block maintenance to protect from adverse weather
          conditions.
        </li>
        <li>Raising root stock seedlings under net house conditions.</li>
        <li>
          Propagation house with ventilation having insect proof netting in the
          sides and fogging and sprinkler irrigation systems.
        </li>
        <li>
          Hardening /maintenance in insect proof net house with light screening
          properties and sprinkler irrigation systems.
        </li>
        <li>Pump house to provide sufficient irrigation and water storage.</li>
      </p>
      <p>
        A model nursery should on average have an area of about 4 hectares and
        would cost Rs. 25 lacs per unit. The model nurseries would produce 2 – 3
        lakh plants depending upon the input costs and time required for the
        plant to be fit for planting. It would be the responsibility of the
        nurseries to ensure quality of the planting material. This scheme will
        be implementing through the DFO Social Forestry Division.
      </p>
      <Figure>
        <Stack direction='horizontal' gap={2}>
          <div>
            <FigureImage src={board12} thumbnail />
          </div>
          <div>
            <FigureImage src={board13} thumbnail />
          </div>
        </Stack>
        <FigureCaption className='text-center'>
          Model Nursery at Danakgre, West Garo Hills, Tura
        </FigureCaption>
      </Figure>
      <h5>b. Small Nursery:</h5>
      <p>
        Small nurseries, covering area of about one hectare, will have
        infrastructure facilities to hold 60,000 to 70,000 plants. These plants
        will be maintained for a period of approximately 9-12 months.
        Infrastructure for the small nurseries will consist of a net house.
        Micro sprinkler irrigation system will be provided in the net house. The
        nurseries will also have provision for solar sterilization of soil media
        to meet the contingency requirement of containers/transfer from small to
        big containers.
      </p>
      <p>
        Small nurseries would cost Rs. 6.25 lakhs per unit. It would be the
        responsibility of the nurseries to ensure quality of the planting
        material. The nurseries could be multi-crop or crop specific depending
        upon the requirements of planting material in the Locality/project area.
        Hence, the type of nursery proposed to be established should be clearly
        indicated in the Action Plan. The Action Plan should also contain an
        assessment of the existing nurseries, the number of planting material
        being produced, crop wise and the additional requirement of nurseries.
        This scheme will be implementing through the DFO Social Forestry
        Division.
      </p>
      <h4>2. Cultivation:</h4>
      <p>
        Cultivation will be assisted only in case of clusters. Each cultivation
        cluster will have minimum 2 hectare of the land. This scheme will be
        implementing through the DFO Social Forestry Division. Assistance will
        be available to willing farmers desirous of cultivating medicinal plants
        on the same land in successive years. The Species will be provided with
        a subsidy at @ 30%, 50% and %75.
      </p>
      <p>
        The species proposed for cultivation should be according to the
        prioritized list of NMPB. For details visit
        https://www.nmpb.nic.in/content/prioritised-list-medicinal-plants-cultivation.
      </p>
      <h4>3. Assistance to Local Herbal Practitioners:</h4>
      <p>
        The Board is also providing assistance to Local Herbal Practitioners for
        setting up of a small home herbal garden in an area of not less than
        5000 sq. This scheme will be implementing through the DFO Social
        Forestry Division.
      </p>
      <h4>4. Conducting Workshop and Seminar Programs:</h4>
      <p>
        The Board has been conducting workshops and seminar programs both at the
        State and District level. The aim of the programs is to impart knowledge
        to the participants regarding the importance of medicinal plants sector,
        to provide information regarding the schemes related to medicinal
        plants, to inform those in the business various aspects so that they may
        make a difference in production and marketing of their products and to
        encourage the farmers and local herbal practitioners to cultivate
        medicinal plants so as to reduce the collection from the wild
      </p>
      <Figure>
        <Stack direction='horizontal' gap={2}>
          <div>
            <FigureImage src={board14} thumbnail />
          </div>
          <div>
            <FigureImage src={board15} thumbnail />
          </div>
        </Stack>
        <FigureCaption className='text-center'>
          Seminar and Workshop Program on Medicinal Plants at Tura
        </FigureCaption>
      </Figure>
      <h4>5. Participation in Exhibition/ Fairs:</h4>
      <p>
        The Board used to participate in various exhibition and fairs related to
        medicinal plants both within and outside the State. The department of
        AYUSH used to organize Arogya fairs from time to time in different
        States of the country. The Arogya fair is organized every year to
        showcase the strengths, potential and latest achievement in India in
        Traditional Medicine and Homoeopathy. One of the main aims of the Board
        is to participate in such programs to give an opportunity to farmers and
        local herbal practitioners to-
        <li>
          showcase the endemic medicinal and aromatic plants found within State
        </li>
        <li>
          give a unique opportunity to the Herbal Practitioners of the State to
          showcase and expose their unique talents
        </li>
        <li>
          promote trade and marketing of raw medicinal plants and medicinal
          plant products cultivated and processed by the farmers and traditional
          healers of the State
        </li>
      </p>
      <p>
        Give a good opportunity for the traditional healer to share their
        experiences and successful stories in healing with the scientist ,
        research scholars, students and public.
        <Image src={board16} />
      </p>
      <h4>
        6. Central Sector Scheme on Conservation, Development and Sustainable
        Management of Medicinal plants:
      </h4>
      <p>
        The Board is also implementating the Centrally Sector Scheme on
        Conservation, Development and Management of Medicinal Plants which
        includes Home Herbal Gradens, School Herbal Gardens, Institution/Public
        Herbal Gardens etc….. the details about information of Centrally
        Sponsored Scheme may be obtained from the NMPB website: www.nmpb.nic.in.
      </p>
      <h4>7. Areas of Concern :</h4>
      <p>
        <li>Survey and Inventorisation of medicinal plants.</li>
        <li>
          In-situ conservation and ex-situ cultivation of medicinal plants.
        </li>
        <li>Production of quality planting material.</li>
        <li>
          Extension activities - Information, education and communication like
          seminar/workshops, training, etc.
        </li>
        <li>Marketing of medicinal plants for domestic and global market.</li>
        <li>Research & development of medicinal plants sector.</li>
        <li>
          Promote co-operative efforts amongs growers and collectors of
          medicinal plants.
        </li>
      </p>
      <h4>Achievement during the Year 2015-16 and 2016-17</h4>
      <p>
        During the Year 2015-16 and 2016-17 the Board has created two model
        nurseries i.e one at West khasi Hills District under the supervision of
        the DFO Social Forestry Division, Nongstoin and another at West Garo
        Hills under the supervision of the DFO Social Forestry Division,Tura.
        The Board has also created two small nurseries at East Khasi Hills
        Division under the supervision of DFO Social Forestry Division, Shillong
        and at East Garo Hills District under the supervision of DFO Social
        Forestry Division, Williamnagar. During the same year the Board has also
        provided finiancial assistance to the clusters for cultivation of
        medicinal plants for an area of about 62 ha. (i.e 20 ha under the
        supervision of the DFO Social Forestry Division, West Khasi Hills
        District and 42 ha under the supervision of the DFO Social Forestry
        Division, Ri Bhoi District.)
      </p>
      <p className='fw-bold'>
        <span>Contact:-</span> <br />
        Chief Executive Officer
        <br /> Meghalaya State Medicinal Plants Board
        <br /> Meghalaya Forest Headquarter, Sylvan House, <br />
        Lower Lachumiere, Shillong- 793001 <br />
        INDIA <br />
        <br />
        Phone: +91 364 2227332 <br />
        Fax: +91 364 2228468 <br />
        E-mail: smpbmegh@gmail.com
      </p>
    </Container>
  )
}

export default MSMPB
