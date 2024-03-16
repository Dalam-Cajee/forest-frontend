import React from 'react'
import { Container, Image } from 'react-bootstrap'
import { useFetchGallery } from '../../hooks/queries/GalleryQueries'

const Gallery = () => {
  // Functions
  const onSuccess = (response) => {
    return response
  }
  const onError = (error) => {
    return error
  }

  // Hooks
  // Gallery Queries
  const gallery = useFetchGallery(onSuccess, onError)

  return (
    <Container>
      <h2>Gallery Page</h2>
      <div>
        {gallery?.data?.data?.data?.map((gallery) => {
          const mimeType = gallery.image.startsWith('data:image/png')
            ? 'image/png'
            : 'image/jpeg'
          const imageUrl = `data:${mimeType};base64,${gallery.image}`
          return <Image key={gallery.id} src={imageUrl} className='w-100' />
        })}
      </div>
    </Container>
  )
}
export default Gallery
