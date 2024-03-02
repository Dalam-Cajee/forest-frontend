import React from 'react'
import { Container, Figure, FigureCaption, FigureImage } from 'react-bootstrap'
import cherryBlossom from '../../assets/SocialForestry/sf_cherryblsom.jpg'

const CherryBlossomFestival = () => {
  return (
    <Container>
      <h2>Cherry Blossom Festival</h2>
      <p>
        Meghalaya enjoys a unique distinction of having cherry trees that bloom
        in the month of November. Cherry trees found in other countries usually
        bloom in spring during March-April.{' '}
        <em>
          India's 1st Cherry Blossom Festival held from 14th to 17th November,
          2016 at Shillong had made a mark as the{' '}
          <strong>
            First International Cherry Blossom Festival celebrated during Autumn
          </strong>
        </em>{' '}
        and has placed Meghalaya on the global tourist map. The festival is
        organized jointly by Forests and Environment Department and Institute of
        Bio resources & Sustainable Development (IBSD).
      </p>
      <p>
        Now there are cherry blossom festivals, in Washington DC, Macon,
        Georgia, Japan, New Zealand and parts of Korea, attracting millions of
        tourists in spring season.{' '}
        <strong>
          Meghalaya became the first in the World to have an autumn Cherry
          Blossom Festival
        </strong>{' '}
        based on the local cherry plants which bloom during{' '}
        <strong>November.</strong>
      </p>
      <p>
        The Festival celebrated the flowering of Cherry blossoms in Shillong in
        autumn in contrast to flowering in spring that takes place all over the
        world. India's first Cherry Blossom Festival 2016 was in sync with the
        Government of Meghalaya's push for “Destination Meghalaya”. It helped to
        promote Shillong as a tourist destination with a unique feature of
        autumn blossoms which can help in developing the city as a holiday
        destination for tourists. The festival attracted a huge number of
        tourists from all over the world.
      </p>
      <p>
        Attractions in the festivals includes rock concert, unplugged western
        music, dance performance from all over North east, beauty pageant,
        fashion shows, guided night walk under illuminated cherry blossoms,
        drawing painting storey telling competition for kids, stalls showcasing
        regions food, wine and crafts
      </p>
      <p>
        Link -{' '}
        <a href='https://cherryblossomfestival.in' target='_blank'>
          https://cherryblossomfestival.in
        </a>
      </p>
      <Figure>
        <FigureImage src={cherryBlossom} thumbnail />
        <FigureCaption className='text-center'>
          Cherry trees bloom at Lumjingshai Road
        </FigureCaption>
      </Figure>
    </Container>
  )
}

export default CherryBlossomFestival
