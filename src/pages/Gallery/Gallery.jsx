import React, { useState } from 'react'
import {
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContainer,
  TabContent,
  TabPane,
  Image,
} from 'react-bootstrap'
import {
  useFetchGallery,
  useFetchGalleryCategory,
} from '../../hooks/queries/GalleryQueries'
import GalleryPhotos from './GalleryPhotos'

const Gallery = () => {
  // States
  const [activeKey, setActiveKey] = useState('Birds')
  const [photoID, setPhotoID] = useState(null)

  // Functions
  const onSuccess = (response) => {
    return response
  }
  const onError = (error) => {
    return error
  }
  const isActive = (key) => {
    return key === activeKey ? 'active' : ''
  }

  // Hooks
  // Gallery Queries
  const gallery = useFetchGallery(onSuccess, onError)
  const galleryCategory = useFetchGalleryCategory(onSuccess, onError)

  // Handlers
  const handleSelect = (key) => {
    setActiveKey(key)
  }

  return (
    <Container>
      <Container className='my-5'>
        <TabContainer defaultActiveKey={activeKey}>
          <Row>
            <Col sm={3}>
              <Nav
                variant='pills'
                className='custom-nav flex-column'
                onSelect={handleSelect}
              >
                {galleryCategory?.data?.data?.data?.map((category) => {
                  return (
                    <NavItem key={category.id}>
                      <NavLink
                        eventKey={category.name}
                        className={`nav-link ${isActive(category.name)}`}
                      >
                        {category.name}
                      </NavLink>
                    </NavItem>
                  )
                })}
              </Nav>
            </Col>
            <Col sm={9}>
              <TabContent className='bg-light p-3'>
                {galleryCategory?.data?.data?.data?.map((category) => {
                  return (
                    <TabPane
                      key={category.id}
                      eventKey={category.name}
                      onClick={() => setPhotoID(category.id)}
                    >
                      <GalleryPhotos photoID={photoID} />
                      {/* <div>
                        {gallery?.data?.data?.data?.map((gallery) => {
                          const mimeType = gallery.image.startsWith(
                            'data:image/png'
                          )
                            ? 'image/png'
                            : 'image/jpeg'
                          const imageUrl = `data:${mimeType};base64,${gallery.image}`
                          return (
                            <Image
                              key={gallery.id}
                              src={imageUrl}
                              className='w-100'
                            />
                          )
                        })}
                      </div> */}
                    </TabPane>
                  )
                })}
              </TabContent>
            </Col>
          </Row>
        </TabContainer>
      </Container>
    </Container>
  )
}
export default Gallery
