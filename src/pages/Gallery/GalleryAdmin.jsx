import React, { useState } from "react"
import {
  Container,
  Table,
  Button,
  Tabs,
  Tab,
  Modal,
  ModalHeader,
  ModalBody,
  ModalTitle,
  Row,
  Col,
  NavLink,
  TabContent,
  Nav,
} from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { BsPlus, BsTrashFill } from "react-icons/bs"
import AddGalleryCategoryForm from "../../components/forms/AddGalleryCategoryForm"
import {
  useDeletePhoto,
  useFetchGallery,
  useFetchGalleryCategory,
  useFetchPhotosByID,
} from "../../hooks/queries/GalleryQueries"

const GalleryAdmin = () => {
  // States
  const [activeKey, setActiveKey] = useState("Birds")
  const [show, setShow] = useState(false)
  const [photoID, setPhotoID] = useState(1)
  const [showPanel, setShowPanel] = useState(true)

  // Refs

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

  // Constants

  // Hooks
  const navigate = useNavigate()
  // Gallery Queries
  const gallery = useFetchGallery(onSuccess, onError)
  const galleryCategory = useFetchGalleryCategory(onSuccess, onError)
  const fetchPhotosByID = useFetchPhotosByID(photoID, onSuccess, onError)
  const deletePhoto = useDeletePhoto(onSuccess, onError)

  // Handlers
  const handleDelete = (id) => deletePhoto.mutate(id)
  const handleSelect = (key) => {
    setActiveKey(key)
  }
  // Modals
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  return (
    <Container className="my-3">
      <h3 className="text-center mt-4 mb-5 bg-light ">Gallery Admin Panel</h3>

      <Row className="justify-content-center">
        {showPanel && (
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
        )}
        <Col sm={9}>
          <TabContent className="bg-light p-3">
            {/* Tabs */}
            <Tabs
              defaultActiveKey="gallery"
              fill
              className="custom-nav"
              onClick={() => setShowPanel(!showPanel)}
            >
              {/* Create Gallery Photos */}
              <Tab eventKey="gallery" title="Gallery">
                <Button
                  variant="outline-success"
                  className="float-end my-3"
                  size="sm"
                  onClick={() => navigate("create")}
                >
                  <BsPlus className="fs-4" />
                  Add Gallery Photos
                </Button>
                {/* Gallery Photos Table */}
                <Table striped bordered hover className="my-2">
                  <thead className="table-dark">
                    <tr>
                      <th>Title</th>
                      <th>Gallery Category</th>
                      <th>Active</th>
                      <th>Created Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fetchPhotosByID?.data?.data?.data ? (
                      fetchPhotosByID?.data?.data?.data?.map((gallery) => {
                        const active = JSON.stringify(gallery.active)
                        return (
                          <tr key={gallery.id}>
                            <td>{gallery.title}</td>
                            <td>{gallery.galleryTypeName}</td>
                            <td>{active}</td>
                            <td>{gallery.createdDate}</td>
                            <td>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleDelete(gallery.id)}
                              >
                                <BsTrashFill title="Delete" />
                              </Button>
                            </td>
                          </tr>
                        )
                      })
                    ) : (
                      <tr>
                        <td colSpan="6" className="text-center">
                          --- No Data Available ---
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </Tab>
              {/* Add Gallery Category */}
              <Tab eventKey="galleryCategory" title="Gallery Category">
                <Button
                  variant="outline-success"
                  className="float-end my-3"
                  size="sm"
                  onClick={() => handleShow()}
                >
                  <BsPlus className="fs-4" />
                  Add Gallery Category
                </Button>
                {/* Modal for Adding Gallery Category */}
                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                  centered
                >
                  <ModalHeader closeButton>
                    <ModalTitle className="d-flex justify-content-center w-100">
                      Add New Gallery Category
                    </ModalTitle>
                  </ModalHeader>
                  <ModalBody>
                    <AddGalleryCategoryForm setShow={setShow} />
                  </ModalBody>
                </Modal>
                {/* Gallery Category Table */}
                <Table striped bordered hover className="my-2">
                  <thead className="table-dark">
                    <tr>
                      <th>ID</th>
                      <th>Gallery Category</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {galleryCategory?.data?.data?.data ? (
                      galleryCategory?.data?.data?.data?.map((type) => {
                        return (
                          <tr key={type.id}>
                            <td>{type.id}</td>
                            <td>{type.name}</td>
                            <td>
                              <Button variant="outline" size="sm">
                                <BsTrashFill title="Delete" />
                              </Button>
                            </td>
                          </tr>
                        )
                      })
                    ) : (
                      <tr>
                        <td colSpan="3" className="text-center">
                          --- No Data Available ---
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </Tab>
            </Tabs>
          </TabContent>
        </Col>
      </Row>
    </Container>
  )
}

export default GalleryAdmin
