import React from "react"
import { Container, Figure, FigureCaption, FigureImage } from "react-bootstrap"
import sacredGrove from "../../assets/Forest/forest_sacredgroves.jpg"

const SacredGroves = () => {
  return (
    <Container>
      <h2>Sacred Groves</h2>
      <p>
        Sacred Groves are the tracts of virgin forests that are left untouched
        by the local inhabitants and are protected by the local people due to
        their culture and religious beliefs. Sacred groves are relic vegetation
        of once dominant flora. They are repositories of our rich biodiversity;
        they are also the last bastion where the rich culture and the customs of
        the indigenous people are still preserved.
      </p>
      <p>
        In Meghalaya, sacred groves represent an age old tradition of
        environmental conservation based on indigenous knowledge, culture and
        religious beliefs. Sacred Groves originated in Meghalaya since time
        immemorial much before the advent of Christianity. They are unique
        feature of Khasi and Jaintia Hills. They are among the few least
        disturbed forest patches which are serving as the natural treasure house
        of biodiversity and a refuge for a large number of endemic, endangered
        and rare taxa. A baseline floristic survey revealed the presence of at
        least 514 species representing 340 genera and 131 families in these
        sacred groves.
      </p>
      <p>
        As part of religious beliefs, an estimated 1,000 sq. kms of forest areas
        (Survey carried out by the Regional centre of NAEB), under the
        administrative control of District Councils have been preserved through
        the ages by the indigenous tribal communities as ‘sacred groves’. There
        are 125 Sacred groves in Meghalaya.These forests with areas ranging from
        0.01 to 900 hectares are unique features of the state.
      </p>
      <p>
        The local tribal people believe that ‘U Basa’ or goddess dwell among
        these thick and virgin forests. Various rites and rituals are performed
        periodically in these forests. According to their belief that pleasing
        ‘U Basa’ through sacrifice of animals (pig, goat, cow, buffalo and fowl)
        together with performing dances, the Basa will protect their villages or
        clans from famine and other sufferings or bad omens and keeps the evil
        spirits away.
      </p>
      <p>
        In the past, people did not dare to enter or destroy these forests. It
        is interesting to know that till date, in some sacred groves, people are
        not allowed even to pluck twigs of plants, use wire or steel, wear
        shoes/ slippers take photography or attend a nature’s call. No timber of
        forest produce shall be removed for sale or trade but allowed for
        religious purpose.
      </p>
      <p>
        Apart from being repository of rich bio-diversity harboring many rare,
        endangered & threatened plant species including rare medicinal and
        aromatic plants, sacred groves are living example of strong symbiotic
        relationship between the forests and indigenous tribal population of the
        state.
      </p>
      <p>
        The District Council has entrusted the management of sacred groves to
        the Lyngdohs or religious priests. Sacred groves shall be registered
        with District council.
      </p>
      <p>
        <strong>Mawphlang sacred grove</strong>, located in East Kahsi hills
        District, 25 km from Shillong is internationally known and important
        tourist destination and educational centre. It is spread across 78
        hectares and protected by the local deity-Labasa.
      </p>
      <h4>Threats</h4>
      <ul>
        <li>
          Sacred groves in Meghalaya are now increasingly coming under threat as
          the tribal way of life changes. The area under sacred groves is also
          shrinking and quite a few have been turned into degraded forests. The
          erosion of traditional values and deterioration of sacred groves in
          recent times is, however, as a matter for concern.
        </li>
        <li>
          Some sacred groves though protected in the past have fallen prey to
          encroachments and degradation due to decline of the very social and
          ethical values that had helped them to thrive
        </li>
      </ul>
      <div className="text-center">
        <Figure>
          <FigureImage src={sacredGrove} thumbnail />
          <FigureCaption>Mawphlang Sacred Grove</FigureCaption>
        </Figure>
      </div>
    </Container>
  )
}

export default SacredGroves
