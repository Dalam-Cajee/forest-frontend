import React from "react"
import { Container } from "react-bootstrap"
import CreateGalleryPhotoForm from "../../components/forms/CreateGalleryPhotoForm"

const AddGalleryPhotos = () => {
  return (
    <Container className="my-3">
      <h3 className="text-center my-4 bg-light">Add New Photo</h3>
      <CreateGalleryPhotoForm />
    </Container>
  )
}

export default AddGalleryPhotos
