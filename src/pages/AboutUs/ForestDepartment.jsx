import React from "react"
import { Container, Image } from "react-bootstrap"
import organisationChart from "../../assets/OrganisationChart.jpg"

const ForestDepartment = () => {
  return (
    <Container>
      <h2>
        Welcome to Forests & Environment Department, Government of Meghalaya
      </h2>
      <p>
        Welcome to the <strong>Meghalayan Age</strong>. We currently live in the
        Meghalayan Age. The past 4,200 years of earth's geological history have
        been officially classified as Meghalayan Age. A stalagmite from the
        Mawmluh Cave of Meghalaya has provided chemical signature as evidence
        for the beginning of Meghalayan age.
      </p>
      <p>
        Meghalaya, the Abode of clouds, located in the hills of Eastern
        Sub-Himalayas was carved out of Assam as autonomous State on 2nd April,
        1970 and was declared as full-fledged State on 21st January, 1972. It is
        bounded on the Northern and Eastern sides by the State of Assam. On
        South and Western side, it shares a 423 Kms long international boundary
        with Bangladesh.
      </p>
      <p>
        Meghalaya is endowed with enviable natural beauty and resources. Nature
        has blessed her with abundant rainfall, sun-shine, virgin dense forests,
        high plateaus, tumbling waterfalls and crystal-clear Rivers. Shillong
        the capital also known as the “Scotland of the East” set amidst a
        picturesque landscape of pine covered hills, rapid streams and
        captivating water falls provides a perfect getaway from the heat. The
        rolling mists in the valleys, the undulating hills, numerous lakes,
        waterfalls, caves, sacred forests, dense forests, breath-taking scenic
        beauty makes the State overwhelmingly beautiful and one of the most
        favoured tourist destinations in the country. The towns of Cherrapunjee
        (Sohra) and Mawsynram, which are located on the Southern parts of the
        states receive very heavy rainfall and are amongst the wettest spots in
        the World.
      </p>
      <p>
        Against the National Goal to maintain two-third of the land area in
        hills and mountainous region of the country, the Forest and Tree cover
        in the State is 79.37 % covering 17,803 Sq.km. contributing 2.26 % of
        India's Forest and Tree Cover. (As per State of Forest Report, 2017
        published by FSI) Meghalaya stands in 4th position in terms of
        percentage of Forest Cover in the Country. Due to varied topography,
        fertile soil, high rainfall and salubrious climate, the State supports
        rich natural resources and biodiversity. The State is part of Indo-Burma
        biodiversity hotspot and key area for biodiversity conservation due to
        species richness and high degree of endemism. The Meghalaya, a small
        State is quite different and unique compared to rest of the world.
      </p>
      <p>
        Meghalaya is significant region as it represents transition zone between
        the Indian, Indo-Malayan, Indo-Chinese biogeographic region as well
        meeting place of Himalayan mountain with peninsular India.
      </p>
      <p>
        <li>
          Mawsynrem and Cherrapunjee are among the wettest places in the world.
        </li>
        <li>
          Unique insect eating Pitcher plant (<em>Nepenthes khasiana</em>) found
          only in State.
        </li>
        <li>
          Part of Indo-Burma biodiversity hot spot and Identified as key area
          for biodiversity conservation due high species diversity and high
          level of endemism.
        </li>
        <li>
          Indian Government nominated Garo hills Conservation Area covering
          Nokrek NP, Balpakkram NP, Siju WLS and RFs Tura peak, Rewak, Emangiri
          and Bagmara for inclusion in tentative list of UNESCO World heritage
          Site.
        </li>
        <li>
          <em>Citrusindica</em> which is mother of all citrus fruit in the world
          is endemic to Nokrek National Park and the locals call it by name
          <em>memangnarang</em> ('orange of the spirits').
        </li>
        <li>
          Five out of six floral species listed in the Schedule-VI of the
          Wildlife (Protection) Act, 1972 whose protection has been accorded
          highest priority, naturally occur in the State.
        </li>
        <li>
          Living Root Bridge which is a engineering marvel found at Nongriat
          village and Mawlynnong formed by <em>Ficus elastic</em> (India rubber
          tree).
        </li>
        <li>
          The Cherry tree which blooms during the Spring in rest of the world
          but it blooms in Shillong during Autumn. To mark the occasion the
          State celebrates India International Cherry Blossom Festival every
          year during autumn season to attract tourist to the State.
        </li>
        <li>State has large number of sacred groves.</li>
        <li>
          Cavers' paradise, large number of caves, Worlds longest cave 'Krem
          Puri' (24 km long)
        </li>
        <li>
          Before the launch of Swacch Bharat Abhiyan by GOI, the Mawlynnong
          village was declared as the cleanest village in Asia in 2003 by
          Discover India magazine.
        </li>
        <li>
          Balpakram National Park - a land of mystery, resting place of spirits
          of the Dead, has many mysterious and unnatural phenomena that cannot
          be satisfactory explained by modern science and logic.
        </li>
        <li>
          Nokrek is also believed to be the home of <em>Mande Burung</em>{" "}
          (jungle man or ape man) and reported cases of sightings found in and
          around the villages of Nokrek.
        </li>
        <li>
          We currently live in the <strong>Meghalayan Age</strong>. The past
          4,200 years of earth's geological history have been officially
          classified as Meghalayan Age. A stalagmite from the Mawmluh Cave of
          Meghalaya has provided chemical signature as evidence for the
          beginning of Meghalayan age.
        </li>
      </p>
      <div className="text-center">
        <h4>Organisation Chart of the Department</h4>
        <Image src={organisationChart} thumbnail />
      </div>
    </Container>
  )
}

export default ForestDepartment
