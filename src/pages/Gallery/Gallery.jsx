import React, { useState } from "react"
import {
  Button,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContainer,
  TabContent,
  TabPane,
} from "react-bootstrap"
import { useFetchGalleryCategory } from "../../hooks/queries/GalleryQueries"
import GalleryPhotos from "./GalleryPhotos"
import { useNavigate } from "react-router-dom"

const Gallery = () => {
  // States
  const [activeKey, setActiveKey] = useState("Birds")
  const [photoID, setPhotoID] = useState(1)

  // Functions
  const onSuccess = (response) => {
    return response
  }
  const onError = (error) => {
    return error
  }
  const isActive = (key) => {
    return key === activeKey ? "active" : ""
  }

  // Hooks
  const navigate = useNavigate()
  // Gallery Queries
  const galleryCategory = useFetchGalleryCategory(onSuccess, onError)

  // Handlers
  const handleSelect = (key) => {
    setActiveKey(key)
  }

  return (
    <Container className="my-5">
      <h3 className="text-center mt-4 mb-5 bg-light">Gallery</h3>
      <TabContainer defaultActiveKey={activeKey}>
        <Button
          variant="outline-success"
          className="mb-2"
          onClick={() => navigate("/gallery/admin")}
        >
          Gallery Admin
        </Button>
        <Row>
          <Col sm={3}>
            <Nav
              variant="pills"
              className="custom-nav flex-column"
              onSelect={handleSelect}
            >
              {galleryCategory?.data?.data?.data?.map((category) => {
                return (
                  <NavLink
                    key={category.id}
                    eventKey={category.name}
                    className={`nav-link ${isActive(category.name)}`}
                    onClick={() => setPhotoID(category.id)}
                  >
                    {category.name}
                  </NavLink>
                )
              })}
            </Nav>
          </Col>
          <Col sm={9}>
            <TabContent className="bg-light p-3">
              {galleryCategory?.data?.data?.data?.map((category) => {
                return (
                  <TabPane key={category.id} eventKey={category.name}>
                    <GalleryPhotos photoID={photoID} />
                  </TabPane>
                )
              })}
            </TabContent>
          </Col>
        </Row>
      </TabContainer>
    </Container>
  )
}
export default Gallery
