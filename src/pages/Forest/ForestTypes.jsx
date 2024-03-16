import React from 'react'
import { Container, Image } from 'react-bootstrap'
import type1 from '../../assets/Forest/forest_types01.jpg'
import type2 from '../../assets/Forest/forest_types02.jpg'

const ForestTypes = () => {
  return (
    <Container>
      <h2>Forest Types in Meghalaya</h2>
      <p>
        Deciduous and Evergreen Tropical Forests, Sub-Tropical Semi Evergreen
        and Sub-Tropical Pine Forests thrive in the State. The abundance of
        vegetation ranging from Temperate, Sub-Tropical and upto Tropical type
        are due to diverse topography and variation in rainfall.
      </p>
      <div className='text-center'>
        <div className='mb-4'>
          <Image src={type2} thumbnail />
        </div>
        <div>
          <Image src={type1} thumbnail />
        </div>
      </div>
    </Container>
  )
}
export default ForestTypes
