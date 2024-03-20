import React from 'react'
import { Container, Table } from 'react-bootstrap'

const Overview = () => {
  return (
    <Container>
      <h2>Overview of Forest in Meghalaya</h2>
      <p>
        Meghalaya is among the few States in the country which can be proud of
        its abundance of natural forest wealth spanning across large part of its
        geographical area, much higher than national average. Its location,
        physiographical features, altitudinal variation, abundant rainfall,
        salubrious climate and fertile soils favours high species diversity and
        supports different types of forests. The Vegetation types ranging from
        tropical rain forest in foothill to Alpine meadows and cold desert. This
        rich flora had been the centre of attraction for many botanists starting
        from Buchanan Hamilton (1820-24) and rightly considered as 'Botanist
        Paradises'. This region was described by Hooker as “Cradle of
        Angiosperms”.
      </p>
      <p>
        True to its name, 'Meghalaya' is an abode of clouds and thus increased
        moisture conditions prevails. The hills rise abruptly in south, while it
        is gradual in north. The altitudinal variation range from 50 meters to
        1950 meters with the Shillong plateau at the crest. The hills are
        dissected and drained by numerous rivers and rivulets draining to north
        and south. The climate is monsoonal with distinct warm-wet and cold-dry
        periods. The towns of Sohra (Cherrapunjee) and Mawsynram, which are
        located on the Southern part of the State, receive very heavy rainfall
        and amongst the wettest spots in the world.
      </p>
      <p>
        The undulating hilly terrain, where the plateau is dissected by rain-fed
        rivers, streams and deep ravines, waterfalls and hills covered with rich
        vegetation present picturesque landscape. The forests are also home to
        rare and endemic plants and animals. The undisturbed primary forests are
        botanically well known and extraordinarily rich.
      </p>
      <p>
        Forests of the State shelters more than 3500 flowering plants, 352
        orchids, 40 bamboo species and about 800 medicinal plants resources. The
        state is part of the Indo Burma Biodiversity Hotspot of the world. There
        are about 40 endemic plant species and 75 Threatened plant species found
        in Meghalaya. Amongst its rare species are the insect eating Pitcher
        plant (<em>Nepenthes khasiana</em>), Wild citrus (<em>Citrus indica</em>
        ) and Pygmy Lily (<em>Nymphaea tetragona</em>). The Rhododendron Forest
        at Shillong Peak is a major attraction for tourist during blooming
        period (February to April).
      </p>
      <h4>Important Tree Species of Meghalaya</h4>
      <Table striped bordered>
        <thead className='table-dark'>
          <tr>
            <th>Botanical Name</th>
            <th>Common / Local Name </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Shorea robusta</td>
            <td>Sal, Sakhu</td>
          </tr>
          <tr>
            <td>Mesua ferrea</td>
            <td>Dieng ngai, Nahar</td>
          </tr>
          <tr>
            <td>Myrica esculenta</td>
            <td>Box myrtle, Dieng Sohphi</td>
          </tr>
          <tr>
            <td>Prunus cerasoides</td>
            <td>Wild Himalayan Cherry</td>
          </tr>
          <tr>
            <td>Betula alnoides</td>
            <td>Dieng ling</td>
          </tr>
          <tr>
            <td>Tectona grandis</td>
            <td>Teak, Segun</td>
          </tr>
          <tr>
            <td>Pinus kesiya</td>
            <td>Khasi pine</td>
          </tr>
          <tr>
            <td>Lagerstroemia spp</td>
            <td>Ajhow, Jarul, Sida</td>
          </tr>
          <tr>
            <td>Michelia spp</td>
            <td>Champ, Sopa, Titachap</td>
          </tr>
          <tr>
            <td>Bombax ceiba</td>
            <td>Semul</td>
          </tr>
          <tr>
            <td>Terminalia Myriocarpa</td>
            <td>Hollock</td>
          </tr>
          <tr>
            <td>Gmelina arborea</td>
            <td>Gamari (State Tree)</td>
          </tr>
          <tr>
            <td>Xylia xylocarpa</td>
            <td>NA</td>
          </tr>
          <tr>
            <td>Albizia Spp</td>
            <td>Hiraru, Moroi, Mog, Kako, Sundi, Saw, Harish</td>
          </tr>
          <tr>
            <td>Toona ciliata</td>
            <td>Poma</td>
          </tr>
          <tr>
            <td>Terminalia spp.</td>
            <td>Bahera, Bhomda</td>
          </tr>
          <tr>
            <td>Schima wallichii</td>
            <td>Makrisal, Nagaplu</td>
          </tr>
          <tr>
            <td>Cinnamomum spp.</td>
            <td>NA</td>
          </tr>
          <tr>
            <td>Castanopsis indica</td>
            <td>Hingori</td>
          </tr>
          <tr>
            <td>Syzigium jambosa</td>
            <td>jamoon</td>
          </tr>
          <tr>
            <td>Artocarpus</td>
            <td>Sam, Champ, Kathal</td>
          </tr>
          <tr>
            <td>Quercus spp.</td>
            <td>Oak</td>
          </tr>
          <tr>
            <td>Chukrasia tabularis</td>
            <td>Chuma, Dieng Dkhar bti</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}

export default Overview
