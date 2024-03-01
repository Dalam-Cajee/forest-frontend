import React from "react"
import {
  Container,
  Figure,
  FigureCaption,
  FigureImage,
  Image,
  Stack,
} from "react-bootstrap"
import rescue1 from "../../assets/Wildlife/wildlife_rescue01.jpg"
import rescue2 from "../../assets/Wildlife/wildlife_rescue02.jpg"

const AnimalRescueCentres = () => {
  return (
    <Container>
      <h2>Animal Rescue Centres</h2>
      <p>
        Wild animals in distress are rescued and brought to
        <strong> Lady Hydari Park,Shillong</strong> and
        <strong> Nehru Park cum Mini Zoo, Danakgre</strong> for their veterinary
        care and treatment. After their recovery, all such animals are again
        released into suitable habitats. Every year, the Department also
        recognizes the selfless efforts of the individuals involved in animal
        rescue by bestowing 'Wildlife Samaritan Award' upon hundreds of
        individuals during the Wildlife Week Celebration. Wildlife lovers and
        responsible citizens inform about the wild animals in distress for its
        rehabilitation or hand over the animals to the wildlife wing Officers
        /Staff. The wildlife wing also conducts regular patrolling to detect
        animals in distress. The department works in tandem with Police, BSF and
        Customs Department to detect illegal trade of wild animals/products.
      </p>
      <Figure>
        <Stack direction="horizontal" gap={3}>
          <div>
            <Image src={rescue1} thumbnail />
          </div>
          <div>
            <Image src={rescue2} thumbnail />
          </div>
        </Stack>
        <FigureCaption>
          Release of rescued Wild animal and Participation of Students / Public
          in Wild animal rescue
        </FigureCaption>
      </Figure>
    </Container>
  )
}

export default AnimalRescueCentres
