import React from "react"
import { Col, Container, Image, Row } from "react-bootstrap"
import { useFetchPhotosByID } from "../../hooks/queries/GalleryQueries"

const GalleryPhotos = ({ photoID }) => {
  // Functions
  const onSuccess = (response) => {
    return response
  }
  const onError = (error) => {
    return error
  }

  // Hooks
  // Gallery Queries
  const fetchPhotosByID = useFetchPhotosByID(photoID, onSuccess, onError)

  return (
    <Container>
      <Row>
        {fetchPhotosByID?.data?.data?.data?.map((photo) => {
          const mimeType = photo.image.startsWith("data:image/png")
            ? "image/png"
            : "image/jpeg"
          const imageUrl = `data:${mimeType};base64,${photo.image}`
          return (
            <Col key={photo.id} md={4} className="p-3">
              <Image
                key={photo.id}
                src={imageUrl}
                className="img-fluid h-100"
              />
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default GalleryPhotos
