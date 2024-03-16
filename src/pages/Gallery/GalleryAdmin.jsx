import React, { useState } from 'react'
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
} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { BsPlus, BsTrashFill } from 'react-icons/bs'
import AddGalleryCategoryForm from '../../components/forms/AddGalleryCategoryForm'
import {
  useDeletePhoto,
  useFetchGallery,
  useFetchGalleryCategory,
} from '../../hooks/queries/GalleryQueries'

const GalleryAdmin = () => {
  // States
  const [show, setShow] = useState(false)

  // Refs

  // Functions
  const onSuccess = (response) => {
    return response
  }
  const onError = (error) => {
    return error
  }

  // Constants

  // Hooks
  const navigate = useNavigate()
  // Gallery Queries
  const gallery = useFetchGallery(onSuccess, onError)
  const galleryCategory = useFetchGalleryCategory(onSuccess, onError)
  const deletePhoto = useDeletePhoto(onSuccess, onError)

  // Handlers
  const handleDelete = (id) => deletePhoto.mutate(id)
  // Modals
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  return (
    <Container>
      <h3 className='text-center mt-4 mb-5 bg-light '>Gallery Admin Panel</h3>
      {/* Tabs */}
      <Tabs defaultActiveKey='gallery' justify>
        {/* Create Gallery Photos */}
        <Tab eventKey='gallery' title='Gallery'>
          <Button
            className='float-end my-3'
            size='sm'
            onClick={() => navigate('create')}
          >
            <BsPlus className='fs-4' />
            Add Gallery Photos
          </Button>
          {/* Gallery Photos Table */}
          <Table striped bordered hover className='my-2'>
            <thead className='table-dark'>
              <tr>
                <th>Title</th>
                <th>Gallery Category</th>
                <th>Active</th>
                <th>Created Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {gallery?.data?.data?.data ? (
                gallery?.data?.data?.data?.map((gallery) => {
                  const active = JSON.stringify(gallery.active)
                  return (
                    <tr key={gallery.id}>
                      <td>{gallery.title}</td>
                      <td>{gallery.galleryTypeName}</td>
                      <td>{active}</td>
                      <td>{gallery.createdDate}</td>
                      <td>
                        <Button
                          variant='outline'
                          size='sm'
                          onClick={() => handleDelete(gallery.id)}
                        >
                          <BsTrashFill title='Delete' />
                        </Button>
                      </td>
                    </tr>
                  )
                })
              ) : (
                <tr>
                  <td colSpan='6' className='text-center'>
                    --- No Data Available ---
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Tab>
        {/* Add Gallery Category */}
        <Tab eventKey='galleryCategory' title='Gallery Category'>
          <Button
            className='float-end my-3'
            size='sm'
            onClick={() => handleShow()}
          >
            <BsPlus className='fs-4' />
            Add Gallery Category
          </Button>
          {/* Modal for Adding Gallery Category */}
          <Modal
            show={show}
            onHide={handleClose}
            backdrop='static'
            keyboard={false}
            centered
          >
            <ModalHeader closeButton>
              <ModalTitle className='d-flex justify-content-center w-100'>
                Add New Gallery Category
              </ModalTitle>
            </ModalHeader>
            <ModalBody>
              <AddGalleryCategoryForm setShow={setShow} />
            </ModalBody>
          </Modal>
          {/* Gallery Category Table */}
          <Table striped bordered hover className='my-2'>
            <thead className='table-dark'>
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
                        <Button variant='outline' size='sm'>
                          <BsTrashFill title='Delete' />
                        </Button>
                      </td>
                    </tr>
                  )
                })
              ) : (
                <tr>
                  <td colSpan='3' className='text-center'>
                    --- No Data Available ---
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Tab>
      </Tabs>
    </Container>
  )
}

export default GalleryAdmin
