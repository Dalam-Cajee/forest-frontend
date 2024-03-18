import React from 'react'
import { Container } from 'react-bootstrap'

const GalleryPhotos = ({ photoID }) => {
  console.log(photoID)
  return (
    <Container>
      <h2>Gallery Photos - {photoID}</h2>
    </Container>
  )
}

export default GalleryPhotos
