import React from "react"
import { Container, Image, Stack } from "react-bootstrap"
import wildlife1 from "../../assets/Wildlife/wildlife01.jpg"
import wildlife2 from "../../assets/Wildlife/wildlife02.jpg"

const WildlifeMeg = () => {
  return (
    <Container>
      <h2>Wildlife of Meghalaya</h2>
      <p>
        Meghalaya is a part of Indo-Burma biodiversity hot spot and identified
        as key area for biodiversity conservation due to high species diversity
        and high level of endemism. It has attracted the attention of wildlife
        enthusiasts and research scholars from all over the country. The rare
        and highly endangered Clouded Leopard is the State Animal. Other
        carnivores found here are Leopard, Leopard cat, Jungle cat, Golden Cat,
        Marbled Cat, Dhole or Indian Wild Dog and Indian Wolf.
      </p>
      <p>
        Herbivores commonly found are Elephant, Gaur, Sambar, Serow and Barking
        deer. Omnivores comprise of Jackals, Common fox, Sloth Bear, Himalayan
        Black Bear, Large Indian civets, Yellow throated Marten, Mongoose, Hog
        Badger etc. Among the primates,
        <strong> Hoolock Gibbon, the only Ape found in India</strong> and Capped
        Langur both globally endangered species are also found in the
        State.Other primates found in the State are Slow Loris, Pig Tailed
        Macaque, Stump Tailed Macaque and Rhesus Macaque.
      </p>
      <p>
        Reptiles such as the Bengal Monitor Lizard, Water Monitor Lizard and
        various snakes like the King Cobra, Indian Cobra, Indian Rock Python,
        Banded Krait, Vipers, Keelbacks, Vine snakes, Trinket snakes, Wolf
        snakes, Rat snakes, flying snakes are found in the State.
      </p>
      <p>
        The State has a rich bird diversity. Right from extremely rare Rufous
        Necked Hornbill, the Darter, Dordon's or Blyth's Baza Painted Stork,
        Lesser or Himalayan Grey headed Fish Eagle, Black or King Vulture, Long
        Billed Vulture, White-backed Vulture, White-legged Falconet,
        White-cheeked Hill Partridge, Wood Srupe, Tawny Fish Owl, Blyth's
        Kingfisher, SprangledDrongo, and Grey Sibia are found in the state.
        Species recorded for the first time in Meghalaya during 1996-1998 survey
        are: the Great Crested Grebe, Black Necked Grebe, Red Necked Grebe,
        Indian Shag, Little Green Heron, Malay Bittern, Greater Adjutant Stork
        and Black Headed Gull. The Forest wagtail was recorded for the second
        time and that too after a century, the first time was by Hume 1888. More
        than 400 bird species are recorded from Nongkhyllem Wildlife Sanctuary.
      </p>
      <p>
        There is also a notable recordof Galiforms found in the State like the
        Khasi Hills Partridge, Khaleej pheasant, Jungle fowl and the most
        elusive Peacock pheasant.
      </p>
      <p>
        Every year migratory flocks of Teals, Pintails, and Cormorant (great
        cormorant) visit the State. The streams and rivers also support a
        considerable amount of wildlife. The Golden Mahseer, which has
        disappeared from other rivers and streams due to excessive fishing,
        silting of riverbeds and pollution of water can still be found in the
        river Umtrew. The rare Khasi Hills Terrapin and the Asian Brown Tortoise
        are also recorded.
      </p>
      <h4>Amur Falcon roosting</h4>
      <p>
        Amur Falcon is a small raptor of falcon family. Amur falcons breed in
        South-eastern Siberia and Northern China and migrate west through India
        and across Arabian Sea to Southern Africa to spend their winter making a
        round trip of at least 20,000 km every year travelling between their
        breeding and wintering ground. They make a stop at Tyrso village in Ri
        Bhoi district which is about 75 km from Shillong during the month of
        October for roosting. They usually stay here for a month or so before
        resuming their annual migration. The Department with the help of Tyrso
        Valley Wildlife Protection Society an NGO involved in the protection of
        Amur falcon are sensitizing people through awareness campaigns. A unique
        Amur Falcon festival is organized by the NGO during November to give
        space for the birds and to create awareness.
      </p>
      <Stack direction="horizontal" gap={2}>
        <div>
          <Image src={wildlife1} thumbnail />
        </div>
        <div>
          <Image src={wildlife2} thumbnail />
        </div>
      </Stack>
    </Container>
  )
}

export default WildlifeMeg
