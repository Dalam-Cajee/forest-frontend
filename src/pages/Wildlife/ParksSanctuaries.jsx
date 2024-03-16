import React from 'react'
import { Container, Image, Stack, Table } from 'react-bootstrap'
import parks from '../../assets/Wildlife/wildlife_parks.jpg'
import parks1 from '../../assets/Wildlife/wildlife_parks01.jpg'
import parks2 from '../../assets/Wildlife/wildlife_parks02.jpg'
import parks3 from '../../assets/Wildlife/wildlife_parks03.jpg'
import parks4 from '../../assets/Wildlife/wildlife_parks04.jpg'
import parks5 from '../../assets/Wildlife/wildlife_parks05.jpg'

const ParksSanctuaries = () => {
  return (
    <Container>
      <h2>National Parks and Sanctuaries</h2>
      <div className='text-center'>
        <Image src={parks} thumbnail />
      </div>
      <h5>National Parks</h5>
      <ol>
        <li>Balpakram (Phase I)</li>
        <li>Nokrek</li>
      </ol>
      <h5>Sanctuaries</h5>
      <ol>
        <li>Nongkhyllem</li>
        <li>Narpuh</li>
        <li>Siju</li>
        <li>Baghmara Pitcher Plant</li>
      </ol>
      <p>
        Certain wildlife bearing areas of significance, comprising of the
        buffers of PAs, viable wildlife habitats and important corridors which
        are not under direct government control, have been identified for
        management as biosphere reserves and elephant reserves as shown below.
        In these areas public co-operation and participation in conservation
        programmes are imperative for achievement of management objectives.
      </p>
      <Table bordered>
        <thead className='table-dark'>
          <tr>
            <th>Sl.No.</th>
            <th>Name and location of Area</th>
            <th>Area(Sq.Kms)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Nokrek Biosphere Reserve around Nokrek NP</td>
            <td>820</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Garo Hills Elephant Reserve</td>
            <td>3500</td>
          </tr>
          <tr className='fw-bold'>
            <td colSpan={2}>TOTAL</td>
            <td>4320</td>
          </tr>
        </tbody>
      </Table>
      <h4>Nokrek National Park</h4>
      <a href='https://www.youtube.com/watch?v=kdusVmt70qo'>
        Short video on Nokrek Biosphere
      </a>
      <p>
        <strong>Area: </strong>47.48 Sq.Kms
        <br />
        <strong>Location: </strong>Spread in East Garo Hills and West Garo
        Hills, about 15 km distance from Williamnagar and about 45 km distance
        from Tura <br />
        <strong>Gazette Notification and Date: </strong>
        No.FOR.23/86/204,Dt.29-11-1986
        <br />
        <strong>Conservation value: </strong>
        <br />
        UNESCO added Nokrek National park to its list of Biosphere Reserves in
        May 2009. Nokrek Biosphere Reserve covers an area of 820 Sq.Kms. The
        Reserve is one of the least disturbed forest tract of Sub-Himalayan
        range. The park is home to a variety of animals, birds and pheasants,
        beside some rare and endemic flora. Important animals found here are
        Indian Elephant, Hoolock Gibbons, Capped Langur, Stump Tailed Macaque,
        Clouded Leopard, Leopard, Gaur, Sambar, Barking Deer, Himalayan Black
        Bear, Sloth Bear. Many species of birds can also be spotted here and the
        national park is considered to be an important bird area and an ideal
        spot for bird watchers.
        <em> Citrus indica</em> which is mother of all citrus fruit in the world
        is endemic to this place and the locals call it by name
        <em> memangnarang</em>
        ('orange of the spirits'). Nokrek is also believed to be the home of
        <em> Mande Burung</em> (jungle man or ape man) and reported cases of
        sightings found in and around the villages of Nokrek.
      </p>
      <Stack direction='horizontal' gap={2}>
        <div>
          <Image src={parks1} thumbnail />
        </div>
        <div>
          <Image src={parks2} thumbnail />
        </div>
      </Stack>
      <h4>Balpakram National Park - Resting place of Spirits of dead</h4>
      <p>
        <strong>Area: </strong>220 Sq.km.
        <br />
        <strong>Location: </strong> Located in South Garo Hills, 293 km from
        Guwahati, about 166 km from Tura and 62 km from Baghmara <br />
        <strong>Gazette Notification and Date: </strong>
        No.FOR.103/34/354,Dt.15-2-1986
        <br />
        <strong>Best time to visit: </strong> November to March
        <br />
        UNESCO added Nokrek National park to its list of Biosphere Reserves in
        May 2009. Nokrek Biosphere Reserve covers an area of 820 Sq.Kms. The
        Reserve is one of the least disturbed forest tract of Sub-Himalayan
        range. The park is home to a variety of animals, birds and pheasants,
        beside some rare and endemic flora. Important animals found here are
        Indian Elephant, Hoolock Gibbons, Capped Langur, Stump Tailed Macaque,
        Clouded Leopard, Leopard, Gaur, Sambar, Barking Deer, Himalayan Black
        Bear, Sloth Bear. Many species of birds can also be spotted here and the
        national park is considered to be an important bird area and an ideal
        spot for bird watchers.
        <em> Citrus indica</em> which is mother of all citrus fruit in the world
        is endemic to this place and the locals call it by name
        <em> memangnarang</em>
        ('orange of the spirits'). Nokrek is also believed to be the home of
        <em> Mande Burung</em> (jungle man or ape man) and reported cases of
        sightings found in and around the villages of Nokrek.
        <Image src={parks3} thumbnail />
        <br />
        <strong>Mystery of Balpakram</strong>
        <br />
        Balpakram has many mysterious and unnatural phenomena that cannot be
        satisfactory explained by modern science and logic. Some of the
        mysterious sites are Boldakmatchukaram, Chitmang peak, Matchru,
        Arengpatal, Goncho Dare, Dikkini ring, RongsaljongAgal,
        RongsobokRongkol. Indeed, Balpakram is so steeped in myths that even the
        Hindus believe that it is a sacred place. They believe that when Laxman
        was seriously injured in the war, a very rare lifesaving herb was
        required, Lord Hanuman found it here but not knowing which to take,
        broke the top of the hill and carried it away. The missing portion of
        that hill became a deep awning canyon.
        <br />
        <strong>Conservation value:</strong>
        <br />
        Stretching between an altitudinal zonation of 100 meters to well over
        1027 meters, Balpakram National Park harbours a rich and diverse gene
        pool. It is home to many rare and endemic animals. The National Park is
        home to Elephants, Tigers, Sambar, Barking deer, Gaur, Clouded leopard,
        Red panda, Black bear.
        <strong>Tour Time:</strong>
        <br />
        The Park is open to visitor from 1st of November to 31st of May every
        year. The Park is open to visitors from 5 A.M. to 4 P.M. from the month
        of November-February and 5 A.M. to 6 P.M. from March-May.
      </p>
      <strong>Accomodation</strong>
      <br />
      Inspection Bungalows(I.B.s) are located at following places to accommodate
      visitors and research students:-
      <ol>
        <li>Baghmara - 1 No with 6 beds</li>
        <li>Siju Range - 1 No with 6 beds</li>
        <li>Rompa VIP Room - 1 No with 5 beds</li>
        <li>Hatisia IB - 1 No with 7 beds</li>
        <li>Hatisia Student Dormitory - 5 Rooms</li>
      </ol>
      <Stack direction='horizontal' gap={2}>
        <div>
          <Image src={parks4} thumbnail />
        </div>
        <div>
          <Image src={parks5} thumbnail />
        </div>
      </Stack>
      <h4>Nongkhyllem Wildlife Sanctuary</h4>
      <p>
        <strong>Area: </strong>29.00 Sq.Kms
        <br />
        <strong>Location: </strong>Ri-Bhoi District, about 53 km distance from
        Shillong and about 51 km distance from Dispur. <br />
        <strong>Gazette Notification and Date: </strong>
        No.FOR.25/81/5,Dt.25-03-1981
        <br />
        <strong>Conservation value: </strong>
        <br />
        The Sanctuary falls in the Eastern Himalayan Global bio-diversity hot
        spot. This area is rich in Floral and Faunal wealth. It has attracted
        the the attention of wildlife enthusiasts and research scholars from all
        over the country. J.Joseph, who compiled the flora of Nongpoh and its
        vicinity in 1982, noted about 1036 taxa of vegetation belonging to 639
        genera of 159 families in a study area of about 200 Sq.Kms. He stated
        that a unit of the South Indian Forests of the Western Ghats, another
        bio-diversity hot spot, harbors less number of species as compared to
        these forests.
        <br /> The first ever bird survey carried out by Shri Anwarruddin
        Choudhury of the Rhino Foundation of India in this Sanctuary from April,
        1996 to October,1998, recorded over 400+ species of bird. The survey
        revealed the presence of endangered species such as the Rufous Necked
        Hornbill. <br />
        The area harbors over 50 species of mammals and 25 species of reptiles.
        Out of 140 species of mammals listed in Schedule I of the Wild Life
        (Protection) Act,1972, about 30 species are found in this Sanctuary.
      </p>
      <h4>Narpuh Wildlife Sanctuary</h4>
      <a href='https://www.youtube.com/watch?v=j-HRs64W41o'>
        Short video on Narpuh WL Sanctuary
      </a>
      <p>
        <strong>Area: </strong>59.9 Sq.Kms
        <br />
        <strong>Location: </strong>East Jaintia Hills District, about 78 kms
        distance from Jowai and about 155 kms distance from Shillong. <br />
        <strong>Gazette Notification and Date: </strong>
        No.FOR.128/2013/20,Dt.10-06-2014
        <br />
        <strong>Conservation value: </strong>
        <br />
        The Narpuh Wildlife Sanctuary is the only large tract of pristine forest
        left in both the East & West Jaintia hills District as well as the
        eastern part of Meghalaya. This area has some of the tallest evergreen
        and semi-evergreen forest left in Meghalaya. The Sanctuary is also home
        to many Schedule I species such as Hoolock gibbon, Serow, Slow loris,
        Pied Horn bill, Leopard etc. <br /> The favorable climate with rich
        vegetation offers a good habitation of the area to support a wide
        variety of wild, endangered Flora and Fauna, the Sanctuary is endowed
        with a rich diversity and abundance of wildlife. Till recently only few
        studies has been conducted to explore the Fauna diversity in the
        Sanctuary, the studies conducted so far are as follows:-
        <li>
          In the year 1996-98, a study was conducted by the Zoological Survey of
          India, the first at such survey for the District, as per the report
          there are 25 species of birds, 61 species of mammals, 16 species of
          Reptiles, 74 species of fishes and 15 species of Amphibians.
        </li>
        <li>
          Dr.Anwarruddin Choudhury in the year 1999 has submitted the interim
          report of wildlife survey in Jaintia Hills, according to which there
          are more than 120 species of mammals.
        </li>
        <li>
          In 2016-2017, the Department with Dr.RajkamalGoswami from Ashoka Trust
          for Research in Ecology & the Environment had carried out fauna survey
          in the Sanctuary using camera trap, as per the study 92 species of
          birds, 35 species of mammals & 199 species of butterfly were recorded.
        </li>
        <strong>Birds:- </strong>About 92 species have been recorded so far.
        Among the noteworthy species recorded so far includes, Oriental Pied
        Hornbill, Giant or Great Pied Hornbill, Spangled Drongo, Rufous-throated
        Partridge etc. <br />
        <strong>Butterflies:- </strong>The Sanctuary has a number of small
        nullas, streams etc. which harbor a rich variety of Butterflies,
        Dr.RajkamalGoswami during his studies in the Sanctuary has recorded
        around 91 species of butterflies. Some of the butterflies are very
        rarewhich can be located only in the Sanctuary. It can be stated that
        the Sanctuary is exceptionally rich in butterfly diversity. <br />
        <strong>Reptiles:- </strong>The Asian Leaf Tule(
        <em>cyclemis dentate</em>), a poorly known testudine was recorded in
        Prang and Lukha rivers. the Copper headed Trinket Snake, Red-necked
        Keelback, monitor lizard and species of frog(<em>Kaloula spp.</em>) have
        been recorded from the region. The Common <em>Varanus bengalensis</em>,
        water monitors, Rock Python, King Cobra, Common Cobra, Banded krait,
        Common krait, Common vine snake, Green pit viper and reticulated python
        have also been recorded. <br />
      </p>
      <h4>Siju Wildlife Sanctuary</h4>
      <p>
        <strong>Area: </strong>5.18 Sq.Kms
        <br />
        <strong>Location: </strong>South Garo Hills District, about 45 kms
        distance from Baghmara, 160 kms from Tura and about 475 kms distance
        from Shillong. <br />
        <strong>Gazette Notification and Date: </strong>
        No.MFG.66/4,Dt.30-03-1979
        <br />
        <strong>Conservation value: </strong>
        <br />
        The oldest and the first Wildlife Sanctuary of Meghalaya located in the
        remote Garo Hills region of Meghalaya. Sharing its border on the Eastern
        part with the Balpakram National Park and blessed by the longest river
        of Meghalaya, the Simsang, as neighbor on the Western part, is home to
        many endemic rare flora and fauna. It also shares its border with the
        Balpakram-Baghmara and Siju-Rewak elephant Corridors within its Southern
        periphery. Siju Wildlife Sanctuary came into existence in 1979. Earlier
        the area was declared Reserved Forest by the Lieutenant-Governor of East
        Bengal and Assam in 1906.
        <br /> The origin of the name of Siju Wildlife Sanctuary (SWLS) could be
        tracked back from its location in the village named "Siju". Thus the
        name "Siju Wildlife Sanctuary". Siju is a fast growing village dominated
        by Garo subtribe known as "Attong". <br />
        Although, the Sanctuary is very small in size - covering only 5.18
        Sq.Kms, but its flora composition is of primary origin. many wild
        animals such as Elephants, Barking Deer, Sambar Deer, Wild Boar, Tiger,
        Clouded Leopard etc. are well represented in the Sanctuary. At least 5
        species of primates - Hoolock Gibbon, Stumped Tailed Macaque, Langurs,
        Slow Loris and Rhesus Macaque are recorded. Popularly regarded as the
        "Bird Sanctuary", the area offer many enchanting migratory birds
        encounters inside the Sanctuary such as Siberian Ducks, Spoonbill, etc.
      </p>
      <h4>Baghmara Pitcher Plant Sanctuary</h4>
      <p>
        <strong>Area: </strong>2.7 hectares
        <br />
        <strong>Location: </strong>South Garo Hills District, Baghmara about 112
        kms distance from Tura and about 332 kms distance from Guwahati railway
        station. <br />
        <strong>Gazette Notification and Date: </strong>
        No.FOR.79/84/5,Dt.24-05-1984
        <br />
        <strong>Conservation value: </strong>
        <br />
        The Baghmara Pitcher Plant Sanctuary is named after the location of the
        Sanctuary and Pitcher plant, <em>Nepenthes Khasiana</em> a rare
        insectivorous plant which is being protected and conserved in the
        Sanctuary. The Pitcher plant is locally known as "Me'mang-Koksi"
        (Me'mamg = Ghost; Koksi = Basket). The locals, Garos regard it as a
        sacred plant or the Ghost basket.
        <br /> <em>Nepenthes Khasiana</em> is the only endemic species of genus
        <em> Nepenthes</em> that occurs in India, and in Meghalaya State. Also,
        the species is the only Pitcher Plant found in India. The species and
        its habitat are unique, as it occurs with an isolated population in
        Meghalaya. It can be said that the species represents ancient endemic
        remnants of older floras which usually occur in landmasses of geological
        entiquity(Palaeoendemic)(Bramwell,1972). Hence, the species is of great
        biological interest. Its rare status gives it a very high ecological
        importance. <br />
        The Baghmara Pitcher Plant Sanctuary(BPPS) is the only Sanctuary in
        Meghalaya where in-situ conservation of Pitcher Plant is being carried
        out. Although the area is very limited, plenty of Pitcher plant grows
        luxuriantly. the very objective of the establishment of Baghmara Pitcher
        Plant Sanctuary is to protect and preserve this rare, endemic and
        threatened in nature for generations. The vegetations of the Sanctuary
        provides home to small animals such as squirrels, foxes, mongoose,
        lizards, snakes etc. in the heart of the town. The Sanctuary also
        protects soil erosion and provide water to section of the surrounding
        villages. <br />
        Besides, Pitcher Plant, many endemic flora and fauna are found in
        Baghmara-Balpakram Landscape. Infact the area has high level of
        endemism. The Pitcher Plant(<em>Nepenthes Khasiana</em>) and Drosera
        etc. are endemic species. These have the best chance of survival in
        Baghmara-Balpakram landscape.
      </p>
      <h4>Nokrek Biosphere Reserve</h4>
      <p>
        <strong>Area: </strong>820 Sq.Kms
        <strong>Core Zone: </strong>47.48 Sq.Kms
        <strong>Buffer Zone: </strong>227.92 Sq.Kms
        <strong>Transition Zone: </strong>544.60 Sq.Kms
        <br />
        <strong>Location: </strong> Nokrek Biosphere Reserve extends to three
        districts namely West Garo Hills, East Garo Hills and South Garo Hills
        District. <br />
        <strong>Gazette Notification and Date: </strong>
        Notified by the ministry of Environment & Forests on 01-09-1988.
        <br />
        <strong>Conservation value: </strong>
        <br />
        Nokrek Biosphere Reserve is the First Biosphere Reserve in the
        North-East India to be designated for inclusion in the World Network of
        Biosphere Reserve of Man and the Biosphere Programme,UNESCO on
        26-05-2009. Nokrek Biosphere Reserve is a rich gene pool of citrus
        species, especially the Citrus indica Tanaka and other related
        cultivars. Apart from several other species of wild animals such as -
        Himalayan Black Bear, Slow Loris, Guar, Clouded Leopard etc., Nokrek
        Biosphere Reserve is home to a large population of Hoolock gibbon, the
        only ape found in India. It is catchment area of several streams,
        including the streams providing drinking water to Tura and other towns.
      </p>
      <h4>Garo Hills Elephant Reserve</h4>
      <p>
        <strong>Area: </strong>3500 Sq.Kms (approx.)
        <strong>Core Zone: </strong>533.892 Sq.Kms (approx.)
        <strong>Buffer Zone: </strong>2900 Sq.Kms (approx.)
        <br />
        <strong>Location: </strong> Parts of the Civil Districts of East Garo
        Hills, West Garo Hills and South Garo Hills comprising Balpakram
        National Park, Siju Wildlife Sanctuary, Rewak Reserved Forest, Emangre
        Reserved Forest, Nokrek National Park, Baghmara Reserved Forest,
        Angratoli Reserved Forest, Rongranggiri Reserved Forest, Tura Peak
        Reserved Forest and all the Clan/Community lands comprising them. <br />
        <strong>Gazette Notification and Date: </strong>
        No.FOR.132/2000/97 dated 31-10-2001
        <br />
        <strong>Conservation value: </strong>
        <br />
        The State of Meghalaya has a sizeable number of elephant populations.
        These are not contained within the Protected Area network which are
        under the direct control of the State Government. A significant
        population of elephants resides outside the Protected Area network. The
        elephant because of their long ranging movement, need for shelter and
        food requirement, move from one block of forest to another which lie in
        fragmented form. The area outside the Protected Area network is
        interspersed with human habitation. It was therefore considered
        essential to define a management unit which acknowledges presence of
        human being along with the elephant, prescribing management practice
        synergizing the need of both the components. The thrust of management in
        such areas is eco-development works to improve economic status of human
        being, anti-depredation activities to reduce man animal conflict and
        habitat improvement programme to divert the movement of elephants. One
        such Elephant Reserves in the Garo Hills region under the Centrally
        Sector Scheme of Project Elephant has already been notified vide
        Government of Meghalaya Notification Number 132/ 2000/ 97 dated 31st
        October 2001 measuring a total area of 3500 sq kms approximately.
      </p>
    </Container>
  )
}
export default ParksSanctuaries
