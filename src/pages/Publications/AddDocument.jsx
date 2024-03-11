import React from "react"
import { Container } from "react-bootstrap"
import AddDocumentForm from "../../components/forms/AddDocumentForm"

const AddDocument = () => {
  return (
    <Container>
      <h3 className="text-center my-4 bg-light">Add New Document</h3>
      <AddDocumentForm />
    </Container>
  )
}

export default AddDocument
