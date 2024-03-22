import React, { useState } from "react"
import {
  Button,
  Col,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  ModalTitle,
  Nav,
  NavLink,
  Row,
  Tab,
  TabContent,
  Table,
  Tabs,
} from "react-bootstrap"
import {
  useDeleteDocument,
  useFetchDocumentByID,
  useFetchDocuments,
  useFetchDocumnentTypes,
} from "../../hooks/queries/PublicationQueries"
import { BsPlus, BsTrashFill } from "react-icons/bs"
import AddDocumentTypeForm from "../../components/forms/AddDocumentTypeForm"
import { useNavigate } from "react-router-dom"

const PublicationsAdmin = () => {
  //States
  const [activeKey, setActiveKey] = useState("Acts & Rules")
  const [show, setShow] = useState(false)
  const [ID, setID] = useState(1)
  const [showPanel, setShowPanel] = useState(true)

  // Refs
  const navigate = useNavigate()

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
  // Publication Queries
  const documents = useFetchDocuments(onSuccess, onError)
  const documentTypes = useFetchDocumnentTypes(onSuccess, onError)
  const fetchDocumentByID = useFetchDocumentByID(ID)
  const deleteDocument = useDeleteDocument(onSuccess, onError)

  // Constants

  // Handlers
  const handleDelete = (id) => deleteDocument.mutate(id)
  const handleSelect = (key) => {
    setActiveKey(key)
  }
  // Modal
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  return (
    <Container className="my-3">
      <h3 className="text-center mt-4 mb-5 bg-light">
        Publications Admin Panel
      </h3>
      <Row className="justify-content-center">
        {showPanel && (
          <Col sm={4}>
            <Nav
              fill
              variant="pills"
              className="custom-nav flex-column"
              onSelect={handleSelect}
            >
              {documentTypes?.data?.data?.data?.map((type) => {
                return (
                  <NavLink
                    key={type.id}
                    eventKey={type.name}
                    className={`nav-link ${isActive(type.name)}`}
                    onClick={() => {
                      setID(type.id)
                    }}
                  >
                    {type.name}
                  </NavLink>
                )
              })}
            </Nav>
          </Col>
        )}
        <Col sm={8}>
          <TabContent className="bg-light p-3">
            {/* Tabs */}
            <Tabs
              defaultActiveKey="documents"
              fill
              className="custom-nav"
              onClick={() => setShowPanel(!showPanel)}
            >
              {/* Add Documents */}
              <Tab eventKey="documents" title="Documents">
                <Button
                  variant="outline-success"
                  className="float-end my-3"
                  size="sm"
                  onClick={() => navigate("create")}
                >
                  <BsPlus className="fs-4" />
                  Add Document
                </Button>
                {/* Documents Table */}
                <Table striped bordered hover className="my-2">
                  <thead className="table-dark">
                    <tr>
                      <th>Title</th>
                      <th>Document Type</th>
                      <th>Active</th>
                      <th>Created Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fetchDocumentByID?.data?.data?.data ? (
                      fetchDocumentByID?.data?.data?.data?.map((document) => {
                        const active = JSON.stringify(document.active)
                        return (
                          <tr key={document.id}>
                            <td>{document.title}</td>
                            <td>{document.documentTypeName}</td>
                            <td>{active}</td>
                            <td>{document.createdDate}</td>
                            <td>
                              <Button variant="outline" size="sm">
                                <BsTrashFill
                                  title="Delete"
                                  onClick={() => handleDelete(document.id)}
                                />
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
              {/* Add Document Types */}
              <Tab eventKey="documentTypes" title="Document Types">
                <Button
                  variant="outline-success"
                  className="float-end my-3"
                  size="sm"
                  onClick={() => handleShow()}
                >
                  <BsPlus className="fs-4" />
                  Add Document Type
                </Button>
                {/* Modal for Adding Document Types */}
                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                  centered
                >
                  <ModalHeader closeButton>
                    <ModalTitle className="d-flex justify-content-center w-100">
                      Add New Document Type
                    </ModalTitle>
                  </ModalHeader>
                  <ModalBody>
                    <AddDocumentTypeForm setShow={setShow} />
                  </ModalBody>
                </Modal>
                {/* Document Types Table */}
                <Table striped bordered hover className="my-2">
                  <thead className="table-dark">
                    <tr>
                      <th>ID</th>
                      <th>Notification Type</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {documentTypes?.data?.data?.data ? (
                      documentTypes?.data?.data?.data?.map((type) => {
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

export default PublicationsAdmin
