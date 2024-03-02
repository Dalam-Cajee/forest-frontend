import React from 'react'
import { Container, Image, Stack } from 'react-bootstrap'
import minizoos1 from '../../assets/Wildlife/wildlife_minizoos01.jpg'
import minizoos2 from '../../assets/Wildlife/wildlife_minizoos02.jpg'
import minizoos3 from '../../assets/Wildlife/wildlife_minizoos03.jpg'
import minizoos4 from '../../assets/Wildlife/wildlife_minizoos04.jpg'
import minizoos5 from '../../assets/Wildlife/wildlife_minizoos05.jpg'

const MiniZoosParks = () => {
  return (
    <Container>
      <h2>Mini Zoos & Parks</h2>
      <p>
        The Government through the wildlife wing of Forests & Environment
        Department has set up and maintain some Parks & Gardens with a few
        animal enclosures in order to display and exhibit the importance of wild
        animals and spread awareness to the people. Apart from playing an
        important role in ex-situ conservation of important wildlife species and
        generating awareness on the need for long term conservation of wildlife
        species and their habitat, zoological parks also add to list of tourist
        attractions in the state. The State has two Mini Zoos; Lady Hydari Park
        cum Mini Zoo at Shillong and Nehru Park cum Mini Zoo, Danakgre, Tura and
        a recreational park i.e.Lum Nehru Park at Umiam.
      </p>
      <h4>1. Lady Hydari Park</h4>
      <h5>History of the Zoo:</h5>
      <p>
        The present Lady Hydari Park was created in 1937, when Sir Robert Neil
        Reid was the Governor of Assam and it was at that time, known as Lady
        Reid Pleasure Park. On 4th May 1947, Sir Akbar Hydari took over as
        Governor of Assam and held office upto 28th December, 1948. It was
        during his tenure that Lady Reid Pleasure Park was renamed as Lady
        Hydari Park. During those days the park served as very important place
        for certain functions like: (i) Keeping of Gandhi's ashes for darshan
        for the public in the town (ii) Delivering of lectures by
        SardarVallabhai Patel (iii) Organising the, "The All India Cattle Show"
        (iv) Celebrating of Hills and Plains Week(v) Regular Flower Show etc.
      </p>
      <p>
        The Park was under the control of the Deputy Commissioner of Khasi
        Hills, till it was handed over to the Forest Department in the year 1973
        and since the creation of the Wildlife Wing in 1977, the Park is now
        under the control of the Khasi Hills Wildlife Division Shillong. During
        initial time, Park consists only of Lawns and Flower garden. But later
        with the creation of the Wildlife wing, park begins to house many
        rescued animals both from the wild and public captivity. Hence they were
        kept in small cages to display to the public for bringing awareness
        among them. With the inception of the Central Zoo Authority of India
        (CZA), Lady Hydari was registered under the authority and which later on
        obtained the status of Mini Zoo Lady Hydari Park. In another words Mini
        Zoo Lady Hydari Park could be called as the Rescue Centre as most of the
        animals' house inside the Park are rescued animals.
      </p>
      <Image src={minizoos1} />
      <Image src={minizoos2} />
      <h5>Location:</h5>
      <p>
        The Park is located at a distance of about 300 meters South to the main
        Secretariat Building, Shillong and behind the Civil Hospital,Shillong.
      </p>
      <h5>Section:</h5>
      <p>
        Lady Hydari Park has mainly three Section:-
        <li>Park and Garden Area.</li>
        <li>Animal Land</li>
        <li> Forest Museum</li>
      </p>
      <h5>Animals kept at the Zoo:</h5>
      <p>
        <strong>Mammals:-</strong> Sambar Deer, Barking Deer, Hog Deer, Rhesus
        Macaque, Himalayan Black Bear, Indian Porcupine, Slow Loris, Civet Cat,
        Leopard Cat, Himalayan Yellow Throated Marten, Stumped Tailed Macaque,
        Serow, Common Fox,Clouded Leopard, etc.
        <br />
        <strong>Birds:-</strong> Indian Pied Hornbill, Northern Gosh Hawk,
        Himalayan Griffon , Goose Bar Headed, Heron Pond, Owl Brown Fish,
        Pelican, Eagle Crested Serpent etc.
        <br />
        <strong>Reptiles:-</strong> Asian Brown Tortoise.
      </p>
      <Image src={minizoos3} />
      <h4>2. Nehru Park Cum Mini Zoo, Danakgre, Tura</h4>
      <p>
        The Nehru Park cum Mini Zoo, Danakgre is located in Tura, in Meghalaya
        and is the only zoo in the Garo Hills region and only the second one in
        the state. It was initially started by the District Administration at
        Tura Park where few rescued animals were kept for amusement and
        entertainment for visitors. During the year 1967 it was handed over to
        the Divisional Forest Officer, Garo Hills (T) Division, Tura. Later it
        became a small rescue centre and started dealing with the problem of
        displaces and injured animals. The Nehru Park cum Mini Zoo is important
        for the region because it not only provides recreation to the visitors
        but also acts as a centre for displaced, orphaned and injured animals
        which could not be released back in the wild due to more or more of the
        reasons. Many animals are also being rehabilitated here and released
        back in the wild when certified fit by the Veterinary surgeon of the
        Zoo. As the number of animals grew and the need for a permanent holding
        facility was felt, the zoo was shifted to the present location at the
        Nehru Park at Danakgre. The zoo has since been as Mini Zoo under section
        38th of the Wildlife (Protection) Act, 1972 by the CZA vide letter no. F
        No. 19-168/93-CZA/188 dated 10/10/2005.
      </p>
      <h5>Vision of the Zoo:</h5>
      <p>
        Tura Mini Zoo was basically started for recreation purposes only
        however, with the advancement of time, the need to protect and conserve
        global biodiversity and wildlife was realized, therefore it was shifted
        to present location with the following vision:
        <li>
          A scientific institution engaged in Animal Welfare, Research,
          Conservation, Education and Sustainability.
        </li>
        <li>
          Best business practice, being efficient, focused and productive, with
          close attention paid to planning, ecologically sound design and
          pollution free environmental.
        </li>
        <li>
          Outstanding "Value for Money" for all who visit the zoo. Providing
          fun, entertainment and learning.
        </li>
      </p>
      <Stack direction='horizontal' gap={2}>
        <div>
          <Image src={minizoos4} thumbnail />
        </div>
        <div>
          <Image src={minizoos5} thumbnail />
        </div>
      </Stack>
      <h5>Mission of the Zoo:</h5>
      <p>
        <li>
          To act as Rescue Centre by receiving and keeping orphaned, seized,
          rescued and injured wild animals.
        </li>
        <li>
          Develop amongst the visitors an understanding about the ecological
          linkages with the life supporting processes of nature and the need for
          keeping them intact by adopting sustainable life styles and living in
          harmony with nature
        </li>
        <li>
          Develop amongst visitors empathy for wildlife and motivate them to
          support the cause of conservation of wildlife.
        </li>
        <li>
          Compliment the national effort in conservation of wildlife through
          planned coordinated conservation breeding of endangered wild animal
          species of the region.
        </li>
        <li>
          Enhancing the role of the zoo in conservation of wildlife through
          collaborated research aiming at attaining management skilled for
          in-situ population and carrying out advocacy for protecting the wild
          animals and their natural habitat.
        </li>
      </p>
      <h5>Animals kept at the Zoo:</h5>
      <p>
        <strong>Mammals:-</strong> Rhesus Macaque, Pig Tailed Macaque, Leopard
        Cat,Barking Deer, Common Fox, Slow Loris and Himalayan Black Bear.
        <br />
        <strong>Birds:-</strong> Indian Hornbill, Brown Fish Owl, Crested
        Serpant Eagle, Purple Moorhen etc.
        <br />
        <strong>Amphibians:-</strong> Indian Python, Black Soft Shelled Turtle
        and Assam Roofed Terrapin.
      </p>
      <h4>2. Lum Nehru Park</h4>
      <p>
        Lum Nehru Park was created on a windswept near barren hillock
        surrounding the Umiam Lake along the Guwahati Shillong Road, about 16
        Kms from Shillong. Lum Nehru Park was named after Pandit Jawaharlal
        Nehru, who laid the foundation stone of the Umiam Hydel Project at the
        very place where the park has been created. Work for creation of the
        Park began in 1989. The Park was completed and formally inaugurated on
        the 12th March, 1990 by Shri P.A.Sangma the then Chief Minister of
        Meghalaya.
      </p>
      <p className='fw-bold'>Area of the park = 22.5 acres.</p>
      <h5>About the Park:</h5>
      <p>The Park consists of mainly three sections viz-</p>
      <ol>
        <li>
          Grass lawns with view points at certain places which are favoured
          picnic spots.
        </li>
        <li>
          Gardens: Comprising of rose gardens, flower beds containing a variety
          of seasonal flowers and a green house.
        </li>
        <li>A small aviary where where ducks are being kept.</li>
      </ol>
      <p>
        The main attraction however is the location of the park. From here one
        can enjoy the beautiful scenery comprising the Umiam catchment.
      </p>
    </Container>
  )
}

export default MiniZoosParks
