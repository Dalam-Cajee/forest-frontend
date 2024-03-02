import React from 'react'
import { Container, Image, Stack } from 'react-bootstrap'
import elephant1 from '../../assets/Wildlife/wildlife_elephantcensus01.jpg'
import elephant2 from '../../assets/Wildlife/wildlife_elephantcensus02.jpg'
import elephant3 from '../../assets/Wildlife/wildlife_elephantcensus03.jpg'
import elephantPDF from '../../assets/Wildlife/wildlife_elephantcensus.pdf'

const ElephantCensus = () => {
  return (
    <Container>
      <h2>Elephant Census</h2>
      <p>
        The State has one of the highest density of elephants in the Country.
        The latest elephant census was carried out from 26-03-2017 to 29-03-2017
        using dung decay count method. As per the census there are 1754
        elephants in Meghalaya.
      </p>
      <Stack direction='horizontal' gap={2}>
        <div>
          <Image src={elephant2} thumbnail />
        </div>
        <div>
          <Image src={elephant3} thumbnail />
        </div>
      </Stack>
      <h4>Elephant Corridors in Meghalaya</h4>
      <li>
        The Wildlife Trust of India in its publication ByVivek Menon titled
        "Right of Passage:Elephant Corridors of India", has identified five
        elephant corridors in the Garo Hills District for the right of safe
        passage to elephants.
      </li>
      <h5>These five elephant corridors are</h5>
      <strong>
        <li>Siju - Rewak (Length-1.6 km, Width-0.5 Km) </li>
        <li>Baghmara - Balpakram (Length-6 km, Width-4.5 Kms)</li>
        <li>Rewak - Imangiri (Length-6.5-8.4 Kms, Width-1.7-2.8 Kms)</li>
        <li>Rangira - Nokrek (Length-7-8 Kms, Width-0.1-1.5 Kms)</li>
        <li>Imangiri - Nokrek (Length-4-5 Kms, Width-3-4 Kms)</li>
      </strong>
      <li>
        The Hon'ble Supreme Court in their order dated 04.08.2017 in the Writ
        Petition (Civil) No.275/2015 in the matter of VidyaAthreya&Anr. Vs.
        Union of India and Ors directed the Ministry of Environment, Forests
        &Climate Change to secure safe passage of wild elephants from one area
        to another through acquisition or by entering into lease with the stake
        holders of the 27 corridors identified as corridors of high priority.
      </li>
      <li>
        The two corridors, namely, "Baghmara - Balpakram" and "Siju-Rewak" are
        located in Meghalaya
      </li>
      <li>
        Steps have been initiated to acquire community lands for protecting
        elephant corridors in Garo Hills.
      </li>
      <h4>Map showing Corridors</h4>
      <Image src={elephant1} thumbnail />
      <h4>Indo-Bangladesh Transmigration of Elephant</h4>
      <p>
        The first meeting on the Trans-boundary conservation of elephant in
        India and Bangladesh was held at Kolkata in 19-20th August,2015. In the
        year 2017 the second meeting was held where the agreed points of action
        on trans-boundary conservation of elephant was accepted by both the
        countries. The Protocol on “Elephant Conservation and Management in
        Bangladesh and India” and Standard Operating Procedure(SOP) on
        Trans-Boundary Coordination for Management of Elephants were discussed
        on the 21st January,2018 at Kaziranga.
      </p>
      <h4>
        2nd Indo-Bangladesh Dialogue on Trans - Boundary Conservation of
        Elephants
      </h4>
      <p>
        A second Indo-Bangladesh Dialogue on Trans-Boundary Conservation of
        Elephants was held on 27th July,2017 at the State Convention Centre
        Shillong. The Indian Delegation was led by{' '}
        <strong>
          Shri. Siddhanta Das, Director General of Forests & Special Secretary
          to the Government of India, while the Delegation from Bangladesh was
          led by Shri. Mohammad Safiul Alam Chowdhary, Chief Conservator of
          Forests, Government of Bangladesh.{' '}
        </strong>
        At the end of the deliberations, the representatives of the Governments
        of India and Bangladesh proposed and agreed to implement the Agreed
        Action points, aimed at ensuring long term conservation and natural
        migration of elephants in the India-Bangladesh landscape.
      </p>
      <p>
        <a
          href={elephantPDF}
          target='_blank'
          title='PDF that Opens in a New Window'
        >
          Agreed Points of Action on Trans-Boundary Conservation of Elephants in
          India-Bangladesh Landscape
        </a>
      </p>
    </Container>
  )
}

export default ElephantCensus
