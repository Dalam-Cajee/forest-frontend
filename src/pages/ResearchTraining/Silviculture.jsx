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
  Table,
} from 'react-bootstrap'
import silviculture1 from '../../assets/ResearchTraining/rt_silviculture01.jpg'
import silviculture2 from '../../assets/ResearchTraining/rt_silviculture02.jpg'
import silviculture3b from '../../assets/ResearchTraining/rt_silviculture03b.jpg'
import silviculture4a from '../../assets/ResearchTraining/rt_silviculture04a.jpg'
import silviculture4b from '../../assets/ResearchTraining/rt_silviculture04b.jpg'
import silviculture4d from '../../assets/ResearchTraining/rt_silviculture04d.jpg'
import silviculture4e from '../../assets/ResearchTraining/rt_silviculture04e.jpg'
import silviculture10 from '../../assets/ResearchTraining/rt_silviculture10.jpg'
import silviculture11 from '../../assets/ResearchTraining/rt_silviculture11.jpg'
import silviculture5a from '../../assets/ResearchTraining/rt_silviculture05a.jpg'
import silviculture5b from '../../assets/ResearchTraining/rt_silviculture05b.jpg'
import silviculture5c from '../../assets/ResearchTraining/rt_silviculture05c.jpg'
import silviculture6b from '../../assets/ResearchTraining/rt_silviculture06b.jpg'
import silviculture6c from '../../assets/ResearchTraining/rt_silviculture06c.jpg'
import silviculture6d from '../../assets/ResearchTraining/rt_silviculture06d.jpg'
import silviculture8a from '../../assets/ResearchTraining/rt_silviculture08a.jpg'
import silviculture8b from '../../assets/ResearchTraining/rt_silviculture08b.jpg'
import silviculture8c from '../../assets/ResearchTraining/rt_silviculture08c.jpg'
import silviculture8d from '../../assets/ResearchTraining/rt_silviculture08d.jpg'
import silviculture9a from '../../assets/ResearchTraining/rt_silviculture09a.jpg'
import silviculture9b from '../../assets/ResearchTraining/rt_silviculture09b.jpg'
import silviculture9c from '../../assets/ResearchTraining/rt_silviculture09c.jpg'
import silviculture9d from '../../assets/ResearchTraining/rt_silviculture09d.jpg'

const Silviculture = () => {
  return (
    <Container>
      <h2>Silviculture</h2>
      <h4>Activities</h4>
      <ul>
        <li>
          Creation of Seed Orchards and identification of Superior/Plus Tree
          species.
        </li>
        <li>
          Standardizing Nursery Practices and Propagation through tissue culture
          techniques of Rare, Endangered and Critically Endangered species and
          restock in the natural habitat.
        </li>
        <li>
          Protection and Conservation of Rare, Endangered & Endemic Plant
          Species through in- situ Conservation and protection from natural and
          biotic pressure.
        </li>
        <li>
          Protection and Conservation of Rare, Endangered & Endemic Plant
          Species and medicinal Plants through ex- situ conservation viz.
          Germplasm bank, creation and maintenance of herbal garden.
        </li>
        <li>
          Conservation & Developing protocols of important tree and Bamboo
          species of the State.
        </li>
        <li>
          Micropropagation and development of tissue culture protocols of Rare,
          Endangered & Endemic Plant Species including Orchids and Medicinal
          Plant, Nepenthes khasiana (Pitcher plant) and other plants.
        </li>
      </ul>
      <h4>Achievements</h4>
      <ol>
        <li>
          <strong>Standardizing nursery practices:</strong>The Division has
          standardized Nursery practices for Medicinal Plants viz., Taxus
          baccata Acquilaria agallocha Terminalia arjuna Terminalia chebula
          Terminalia ballerica Rare and Endangered Species viz., Ilex khasiana
          Podocarpus nerifolia Commercially important species viz., Michelia
          champaca Toona ciliata Chukrassia tabularis
        </li>
        <li>
          <strong>Activities of the Plant tissue culture laboratory:</strong>{' '}
          The Department has established sate of art Plant tissue culture
          laboratory at upper Shillong with following objectives:-
          <br />
          (i)Standardization of plant tissue culture protocol of rare and
          endangered plants, orchids, bamboo and medicinal plants of the region
          for large scale propagation.
          <br />
          (ii)Conservation of rare and endangered plants, orchids, bamboo and
          medicinal plants of the region through plant tissue culture
          techniques.
          <br />
          (iii)Imparting knowledge of plant tissue culture techniques through
          training, workshops, etc to students, farmers, Department officials,
          etc
          <br />
          Species for which tissue culture protocol have been standardized in
          the laboratory:-
          <br />
          (i)<strong>Rare, Endangered and Endemic plants (6 Nos):</strong>{' '}
          Nepenthes khasiana, Ilex Khasiana, Citrus indica, Nymphea tetragona,
          Gymnocladus assamicus, and Citrus grandis
          <br />
          (ii)<strong>Orchids (19 Nos):</strong> Dendrobium nobile, Dendrobium
          chrysanthum, Vanda cerulea, Paphiopedilum insigne, Paphiopedilum
          villossum, Paphiopedilum hirsutissimum, Pleione praecox, Pleione
          maculata, Cymbidium cochleare,Cymbidium elegans,Cymbidium eburneum,
          Coelogyne corymbosa, Coelogyne fimbriata, cymbidium iridoides,
          Dendrobium falconeri, Dendrobium longicornu, Dendrobium ochraetum,
          Cymbidium mastersii and Dendrobium primulinum.
          <br />
          (iii)<strong>Medicinal plants (9 Nos):</strong> Aegle marmelos, Acacia
          catechu, Aquilaria agallocha, Terminalia bellerica, Terminalia
          chebula, Tectona grandis, Gmelina arborea, Panax pseudoginseng and
          Taxus bacata.
          <br />
          (iv)<strong>Bamboo (4 Nos):</strong> Bambusa nana, Bambusa tulda,
          Dendrocalamus hamiltonii and Dendrocalamus strictus.
          <br />
          <br />
          <Container className='mb-5'>
            <Row className='mb-4'>
              <Col className='text-center'>
                <Image
                  src={silviculture3b}
                  thumbnail
                  className='img-fluid h-100 '
                />
                <FigureCaption>Culture room</FigureCaption>
              </Col>
              <Col className='text-center'>
                <Image
                  src={silviculture1}
                  thumbnail
                  className='img-fluid h-100 '
                />
                <FigureCaption>Inoculation chamber</FigureCaption>
              </Col>
              <Col className='text-center'>
                <Image
                  src={silviculture2}
                  thumbnail
                  className='img-fluid h-100 '
                />
                <FigureCaption>Mist chamber</FigureCaption>
              </Col>
            </Row>
          </Container>
          <p>Advantages of tissue culture grown seedlings</p>
          <ul>
            <li>High quality true to type seedlings</li>
            <li>
              Rapid large scale mass multiplication of novel plant material
            </li>
            <li>Round the year production of seedlings</li>
            <li>Production of disease free seedlings</li>
            <li>Easy transportation and less transportation cost</li>
            <li>
              Production of seedlings in case of plants which fails to produce
              seeds or long dormancy period or slow vegetative propagation
            </li>
            <li>
              Conservation of endangered and endemic plants which are very
              difficult to propagate through seeds due to incomplete development
              of embryo, long dormancy period or poor germination capacity
            </li>
            <li>
              Propagation of Orchids by using seeds through tissue culture is
              feasible which is otherwise very difficult
            </li>
          </ul>
          <Container className='text-center mt-3'>
            <Figure>
              <FigureImage src={silviculture4a} thumbnail className='mx-2' />
              <FigureImage src={silviculture4b} thumbnail className='mx-2' />
              <FigureImage src={silviculture4d} thumbnail className='mx-2' />
              <FigureImage src={silviculture4e} thumbnail className='mx-2' />
              <FigureCaption className='text-center'>
                In vitro propogation of Nepenthes khasiana (pitcher plant)
              </FigureCaption>
            </Figure>
          </Container>
        </li>
        <li>
          <strong>
            Protection of Area with Rare and Endangered Plant Species:
          </strong>{' '}
          Is aimed at protection of rare and endangered plants of the State
          through creation of nurseries and plantations in order to ensure their
          protection and conservation ex-situ through artificial means. The
          Scheme "conservation of rare and endangered plants" is being
          implemented by Silviculture Division and so far we have successfully
          raised and maintained 55 hectares plantation area of some rare and
          endangered plant species in different centres of the State. The
          prominent species planted are Taxus baccatta, Carpinus viminea,
          Podocarpus nerifolia, Rhododendron arboreum, Acquilaria agallocha.
        </li>
        <li>
          <strong>
            Ex-situ & In-situ conservation of rare and endemic plants:
          </strong>{' '}
          <div className='text-center mt-2'>
            <Figure>
              <FigureImage src={silviculture10} thumbnail />
              <FigureCaption className='text-center'>
                Pitcher Plant (Nepenthes Khasiana)- Insectivorous plant
              </FigureCaption>
            </Figure>
          </div>
          <br />
          The only pitcher plant found in India and is endemic to Meghalaya. It
          is a straggling scandent insectivorous shrub growing in the
          undisturbed sub tropical and tropical forests of the State at
          elevation ranging from 1000-1500 meters MSL.
          <br />
          <strong>Conservation Status:</strong> The pitcher plant is placed in
          the Critically Endangered IUCN Status category and is also in Appendix
          1 of CITES. The Species also figures in schedule VI of the Wildlife
          Protection Act, 1972.
          <br />
          <strong>Medicinal uses:</strong> The fluid in the unopened pitcher is
          used to treat eye, digestive and urinary ailments; for diabetes. The
          pitcher with its content is made into paste and applied on affected
          parts of leprosy patients.
          <br />
          <strong>Conservation measures:</strong> Efforts have been made to
          conserve this plant through both in-situ and ex-situ conservation
          measures. Fire protection measures have been initiated in fire prone
          areas during dry months. A survey was carried out to map the natural
          habitat of pitcher plant in the state.
          <div className='text-center my-3'>
            <Image src={silviculture11} thumbnail />
          </div>
          <p>
            The Silviculture division has standardized tissue culture techniques
            for multiplication of pitcher plant. The tissue culture grown plants
            are being used to restock population of pitcher plant their natural
            habitat. Ex-situ conservation areas are established in Laitkynsew,
            Mawsmai and Umkhuti using tissue culture grown pitcher plants.
          </p>
          <Container className='text-center mt-3'>
            <Figure>
              <FigureImage className='mx-2' />
              <FigureImage src={silviculture5b} thumbnail className='mx-2' />
              <FigureImage src={silviculture5c} thumbnail className='mx-2' />
              <FigureCaption className='text-center'>
                Planting of In-vitro seedlings Pitcher plants at Laitkynsew and
                Umkhuti (Ex-situ Conservation)
              </FigureCaption>
            </Figure>
          </Container>
          <Container className='text-center mt-2'>
            <Figure>
              <FigureImage src={silviculture6b} thumbnail className='mx-2' />
              <FigureImage src={silviculture6d} thumbnail className='mx-2' />
              <FigureImage src={silviculture6c} thumbnail className='mx-2' />
              <FigureCaption className='text-center'>
                Ex situ conservation of Nepenthes khasiana, Umkhuti using
                invitro raised seedling
              </FigureCaption>
            </Figure>
          </Container>
        </li>
        <li>
          <p>
            <strong>In-vitro Multiplication of Orchids:</strong> The State of
            Meghalaya is famous for its beautiful orchids. The climatic
            condition and topography of area is very suitable for the growth of
            different species of orchids of which about 300 species have been
            reported. However due to the disturbances caused by many adverse
            factors the number of orchids found in the natural habitat have been
            drastically reduced.
          </p>
          <p>
            A research laboratory was set up at Shillong with the objectives of
            multiplying and propagating orchids by adopting tissue culture
            techniques. Even though the laboratory has minimum facilities and
            equipments, yet we have been able to successfully germinate seeds of
            some species of orchids and many of them have developed into
            seedlings and matured plants. Tissue culture protocol of 19 orchids
            species have been standardized in the laboratory.
          </p>
          <strong>
            List of orchids available at Conservation centre (total of 70
            species)
          </strong>
          <Table striped bordered>
            <thead className='table-dark'>
              <tr>
                <th>Sl.No</th>
                <th>Species</th>
                <th>Sl.No</th>
                <th>Species</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>Agrostophyllum brevipes King &amp; Pantl. </td>
                <td>36.</td>
                <td>Eria paniculata Lindl. </td>
              </tr>
              <tr>
                <td>2.</td>
                <td>Agrostophyllum planicaule Wall. ex.Lindl. </td>
                <td>37.</td>
                <td>Eria stricta Lindl. </td>
              </tr>
              <tr>
                <td>3.</td>
                <td>Anthogonium gracile Lindl. </td>
                <td>38.</td>
                <td>Esmeralda clarkei Rchb.f </td>
              </tr>
              <tr>
                <td>4.</td>
                <td>Arundina graminifolia D. Don </td>
                <td>39.</td>
                <td>Flickingeria fugax Rchb.f </td>
              </tr>
              <tr>
                <td>5.</td>
                <td>Bulbophyllum forrestii Seiderf. </td>
                <td>40.</td>
                <td>Gastrochilus calceolaris Buch-Ham.ex Sm. </td>
              </tr>
              <tr>
                <td>6.</td>
                <td>Bulbophyllum gymnopus Hook.f. </td>
                <td>41.</td>
                <td>Goodyera procera Ker-gawl. </td>
              </tr>
              <tr>
                <td>7.</td>
                <td>Bulbophyllum striatum Griff. </td>
                <td>42.</td>
                <td>Liparis cordifolia Hook.f. </td>
              </tr>
              <tr>
                <td>8.</td>
                <td>Bulbophyllum umbellatum Lindl. </td>
                <td>43.</td>
                <td>Micropera obtusa Lindl. </td>
              </tr>
              <tr>
                <td>9.</td>
                <td>Cephalantheropsis obcordata Lindl. </td>
                <td>44.</td>
                <td>Micropera rostrata Roxb. </td>
              </tr>
              <tr>
                <td>10.</td>
                <td>Coelogyne corymbosa Lindl. </td>
                <td>45.</td>
                <td>Neogyna gardneriana Lindl. </td>
              </tr>
              <tr>
                <td>11.</td>
                <td>Coelogyne flaccida Lindl. </td>
                <td>46.</td>
                <td>Otochillus fuscus Lindl. </td>
              </tr>
              <tr>
                <td>12.</td>
                <td>Coelogyne fuliginosa Lodd.ex Hook. </td>
                <td>47.</td>
                <td>Oberonia pachyrachis Rchb.f. ex Hook.f. </td>
              </tr>
              <tr>
                <td>13.</td>
                <td>Coelogyne ovalis Lindl. </td>
                <td>48.</td>
                <td>Paphiopedillum hirsutissimum Lindl. ex Hook. f. </td>
              </tr>
              <tr>
                <td>14.</td>
                <td>Coelogyne viscosa Rchb.f. </td>
                <td>49.</td>
                <td>Paphiopedillum insigne Wall.ex Lindl. </td>
              </tr>
              <tr>
                <td>15.</td>
                <td>Cymbidium aloifolium Lindl. </td>
                <td>50.</td>
                <td>Paphiopedillum venustum Wall.ex Sims. </td>
              </tr>
              <tr>
                <td>16.</td>
                <td>Cymbidium bicolor Lindl. </td>
                <td>51.</td>
                <td>Papilionanthe vandarum Rchb.f </td>
              </tr>
              <tr>
                <td>17.</td>
                <td>Cymbidium cochleare Lindl. </td>
                <td>52.</td>
                <td>Phaius flavus Lindl. </td>
              </tr>
              <tr>
                <td>18.</td>
                <td>Cymbidium eburneum Lindl. </td>
                <td>53.</td>
                <td>Phalaenopsis taenialis Lindl. </td>
              </tr>
              <tr>
                <td>19.</td>
                <td>Cymbidium elegans Lindl. </td>
                <td>54.</td>
                <td>Pholidota articulate Lindl. </td>
              </tr>
              <tr>
                <td>20.</td>
                <td>Cymbidium iridioides D.don. </td>
                <td>55.</td>
                <td>Pleione humilis D.Don </td>
              </tr>
              <tr>
                <td>21.</td>
                <td>Cymbidium lancifolium Hook.f. </td>
                <td>56.</td>
                <td>Pleione maculata Lindl. </td>
              </tr>
              <tr>
                <td>22.</td>
                <td>Dendrobium aduncum Wall. </td>
                <td>57.</td>
                <td>Pleione praecox D. Don </td>
              </tr>
              <tr>
                <td>23.</td>
                <td>Dendrobium chrysanthum Lindl. </td>
                <td>58.</td>
                <td>Porpax gigantea Deori </td>
              </tr>
              <tr>
                <td>24.</td>
                <td>Dendrobium crepidatum Lindl.paxton </td>
                <td>59.</td>
                <td>Phaius tancarville L'Her. </td>
              </tr>
              <tr>
                <td>25.</td>
                <td>Dendrobium densiflorum Lindl. </td>
                <td>60.</td>
                <td>Rhomba lanceolata Lindl. </td>
              </tr>
              <tr>
                <td>26.</td>
                <td>Dendrobium devonianum Paxton </td>
                <td>61.</td>
                <td>Rynthoshylis retusa Lindl. </td>
              </tr>
              <tr>
                <td>27.</td>
                <td>Dendrobium heterocarpum Wall.ex. Lindl. </td>
                <td>62.</td>
                <td>Schoenorchis gemmata Lindl. </td>
              </tr>
              <tr>
                <td>28.</td>
                <td>Dendrobium jenkinsii Wall.ex.Lindl. </td>
                <td>63.</td>
                <td>Smitinandia micrantha Lindl. </td>
              </tr>
              <tr>
                <td>29.</td>
                <td>Dendrobium moschatum Buch-ham </td>
                <td>64.</td>
                <td>Spathoglottis pubescens Lindl. </td>
              </tr>
              <tr>
                <td>30.</td>
                <td>Dendrobium nobile Lindl. </td>
                <td>65.</td>
                <td>Tainia minor Hook.f. </td>
              </tr>
              <tr>
                <td>31.</td>
                <td>Dendrobium ruckeri Lindl. </td>
                <td>66.</td>
                <td>Thunia alba Lindl. </td>
              </tr>
              <tr>
                <td>32.</td>
                <td>Dendrobium ochreatum</td>
                <td>67.</td>
                <td>Vanda alpina Lindl. </td>
              </tr>
              <tr>
                <td>33.</td>
                <td>Eria bambusifolia Lindl. </td>
                <td>68.</td>
                <td>Vanda coerulea Griff.ex Lindl. </td>
              </tr>
              <tr>
                <td>34.</td>
                <td>Eria coronaria Lindl. </td>
                <td>69.</td>
                <td>Vanda cristata Lindl. </td>
              </tr>
              <tr>
                <td>35.</td>
                <td>Eria lasiopetala Willd. </td>
                <td>70.</td>
                <td>Vanda undulata Lindl. </td>
              </tr>
            </tbody>
          </Table>
        </li>
        <li>
          <p>
            <strong>Gene-Pool Conservation of Medicinal Plants:</strong> The
            importance of medicinal, aromatic and oil bearing plants as economic
            natural resources is well established and the State of Meghalaya is
            richly endowed with large varieties of these valuable plants on
            account of its wide range of climatic zones.
          </p>
          <p>
            It is however unfortunate that the resource base of these medicinal
            plants is fast getting depleted due to random destruction of forests
            in private areas and there has never been any proper attempt by the
            users of these plants to cultivate them in a regular manner. As of
            now, the medicinal plans are being collected by the herbal plant
            practitioners from the forests in different parts of the State
            without replenishing them and it is felt that unless and until these
            plants are scientifically cultivated, many of them will disappear in
            no time.
          </p>
          <p>
            "Conservation of medicinal plants" is being implemented by
            Silviculture Division and 96 nos of gene-pool conservation plots and
            5 hectares plantation area have so far been successfully raised and
            are being maintained at different locations in East Khasi Hills, Ri
            Bhoi and East Garo Hills. The gene-pool plots are of 3 dimensions -
            6m x 6m, 8m x 8m and 12m x 12m for herbaceous, shrub and tree
            species, respectively. The plants species collected in these plots
            are - Rhus semialata, Myrica nagi, Gaultheria fragrantissima, Rubus
            ellipticus, Panax ginseng, Potentilla fulgens, Mentha arvensis,
            Swertia chirata, Solanum nigrum, Acorus calamus, Abroma agusta,
            Azadirachta indica, Averrhoa carambola, Nepenthes Khasiana,
            Terminalia arjuna, Terminalia chebula, Terminalia ballerica,
            Rauwalfia serpentina, Asparagus racemosus, Acquilaria agallocha,
            Rhododendron arboreum and Taxus baccata.
          </p>
        </li>
        <li>
          <p>
            <strong>Development of Bamboo:</strong> Meghalaya is well endowed
            with bamboo resources. According to literatures, 38 species of
            bamboo from 11 genera are found in Meghaaya (Biswas 1988). Different
            bamboo species naturally grow in almost every part of the State and
            due to prevailing varied physiographic and climatic condition there
            is diverse species distribution of bamboo in different part of the
            State.
          </p>
          <p>
            (i)<strong>Establishment of Bambusetum</strong> - An area of 10
            (ten) hectares each in Rongrengiri, East Garo Hills District and at
            Lumsohpetbneng in Ri Bhoi District is being taken up for setting up
            of bambusetum wherein about 20 to 25 species of bamboo, both
            indigenous and exotic are collected and conserved ex-situ.
            <br />
            (ii)
            <strong>Bamboo Planting Stock Production Centre</strong> - An area
            of 2 (two) hectares each in Rongrengiri, East Garo Hills District
            and at Lumsohpetbneng in Ri Bhoi District is also being taken up for
            setting up of bamboo nurseries to produce quality planting stock for
            future bamboo plantation programmes in private/ community wasteland
            through Social Forestry and for free distribution to the public.
          </p>
          <strong>Bamboo species maintained at Bambusetum:</strong>
          <Table striped bordered>
            <thead className='table-dark'>
              <tr>
                <th>Sl.no</th>
                <th>Species</th>
                <th>Sl.no</th>
                <th>Species</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Bambusa bambos(Linn) </td>
                <td>11</td>
                <td>Bambusa balpakramii Naithani</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Dendrocalamus hamiltonii</td>
                <td>12</td>
                <td>Dendrocalamus hookeri</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Dendrocalamus strictus(Roxb) </td>
                <td>13</td>
                <td>Gigantochloa albociliata (Munro)</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Meloca; lamus maclellandi (Munro)</td>
                <td>14</td>
                <td>Melocanna baccifera(Roxb)</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Phyllostachys manni</td>
                <td>15</td>
                <td>Schizostachyum mannii</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Bambusa balcooa(Roxb)</td>
                <td>16</td>
                <td>Bambusa cacharensis</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Bambusa cacharensis</td>
                <td>17</td>
                <td>Bambusa multiplex</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Bambusa polymorpha</td>
                <td>18</td>
                <td>Bambusa tulda(Roxb)</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Bambusa vulgaris</td>
                <td>19</td>
                <td>Bambusa vulgaris var.vittata </td>
              </tr>
              <tr>
                <td>10</td>
                <td colSpan={3}>Bambusa vulgaris forma waminii</td>
              </tr>
            </tbody>
          </Table>
        </li>
        <li>
          <p>
            <strong>Nursery:</strong> Silviculture Division created nurseries at
            Umsaw, Ri-Bhoi, Sangmein, Upper Shillong Umkhuti and Rongrengiri,
            East Garo HillsSome of the Plant species raised in the nursery are:
            Podpcarpus neriifolia, Ilex khasiana, Ilex excels, Ilex venulosa,
            Gymnocladus assamicus, Aquilaria agallocha Roxb, Mangolia
            lanuginose, Mangolia insignis, Mangolia caveana, Mangolia punduana,
            Taxus baccata, Taxus wallichina , Elaeocarpus prunifolius, Acer
            laevigatum Wall, Carpinus viminea Lindl, Terminalia bellirica,
            Terminalia chebula, Terminalia arjuna, Raulfia serpentine, Raulfia
            tetraphylla, Dillenia indica, Oroxylum indicum, Phyllanthus emblica,
            Carcinia padunculata, Carcinia kydia, Myrica spp.
          </p>
          <h5>Training in Advance Nursery Practices</h5>
          <Container>
            <Row className='mb-4'>
              <Col className='text-center'>
                <Image
                  src={silviculture9a}
                  thumbnail
                  className='img-fluid h-100 '
                />
              </Col>
              <Col className='text-center'>
                <Image
                  src={silviculture9b}
                  thumbnail
                  className='img-fluid h-100 '
                />
              </Col>
              <Col className='text-center'>
                <Image
                  src={silviculture9c}
                  thumbnail
                  className='img-fluid h-100 '
                />
              </Col>
              <Col className='text-center'>
                <Image
                  src={silviculture9d}
                  thumbnail
                  className='img-fluid h-100 '
                />
              </Col>
              <FigureCaption className='text-center'>
                Hands on training at Tissue Culture lab for Research associates,
                Students and Frontline staff
              </FigureCaption>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col className='text-center'>
                <Image
                  src={silviculture8a}
                  thumbnail
                  className='img-fluid h-100 '
                />
                <FigureCaption>
                  Nursery at Sangmein, Upper Shillong
                </FigureCaption>
              </Col>
              <Col className='text-center'>
                <Image
                  src={silviculture8b}
                  thumbnail
                  className='img-fluid h-100 '
                />
                <FigureCaption>Nursery at Umsaw, Ri-Bhoi</FigureCaption>
              </Col>
              <Col className='text-center'>
                <Image
                  src={silviculture8c}
                  thumbnail
                  className='img-fluid h-100 '
                />
                <FigureCaption>
                  Nursery at Umkhuti Ri-Bhoi district
                </FigureCaption>
              </Col>
              <Col className='text-center'>
                <Image
                  src={silviculture8d}
                  thumbnail
                  className='img-fluid h-100 '
                />
                <FigureCaption>
                  Mist Chamber at Umkhuti Ri-Bhoi district
                </FigureCaption>
              </Col>
            </Row>
          </Container>
        </li>
      </ol>
    </Container>
  )
}

export default Silviculture
