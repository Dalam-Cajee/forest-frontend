import React from 'react'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import {
  Button,
  Card,
  CardBody,
  CloseButton,
  Container,
  Stack,
} from 'react-bootstrap'
import FieldInput from '../core/FieldInput'
import FieldSelect from '../core/FieldSelect'
import FieldFile from '../core/FieldFile'
import { useNavigate } from 'react-router-dom'
import {
  useAddGalleryPhotos,
  useFetchGalleryCategory,
} from '../../hooks/queries/GalleryQueries'

const CreateGalleryPhotoForm = () => {
  // States

  // Refs

  // Functions
  const onSuccess = (response) => {
    return response
  }
  const onError = (error) => {
    return error
  }

  // Hooks
  const navigate = useNavigate()
  // Gallery Queries
  const galleryCategory = useFetchGalleryCategory(onSuccess, onError)
  const addGalleryPhotos = useAddGalleryPhotos(onSuccess, onError)

  // Constants
  const FILE_TYPES = ['image/png', 'image/jpg', 'image/jpeg']

  const FILE_SIZE = 5 * 1024 * 1024 // 5MB

  // Formik
  // Initial Values
  const initialValues = {
    galleryDetails: {
      title: '',
      galleryTypeId: '',
    },
    file: null,
  }

  // Schema
  const validationSchema = yup.object({
    galleryDetails: yup.object({
      title: yup.string().required('Title is required'),
      galleryTypeId: yup.string().required('Gallery Category is required'),
    }),
    file: yup
      .mixed()
      .required('File is required')
      .test('fileFormat', 'File format not supported', (value) => {
        return value && FILE_TYPES.includes(value.type)
      })
      .test('fileSize', 'File size too large', (value) => {
        return value && value.size <= FILE_SIZE
      }),
  })

  // Handlers
  const onSubmit = (values) => {
    // Form Data object
    const formData = new FormData()
    // Update the object
    formData.append('file', values.file)
    formData.append('galleryDetails', JSON.stringify(values.galleryDetails))
    addGalleryPhotos.mutate(formData)
    navigate(-1)
  }

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Container>
            <Card>
              <CardBody className='shadow rounded p-3'>
                <Form>
                  <Stack gap={2}>
                    <div>
                      <CloseButton
                        className='float-end'
                        onClick={() => navigate(-1)}
                      />
                    </div>
                    {/* Title */}
                    <div>
                      <FieldInput
                        name='galleryDetails.title'
                        label='Title'
                        formik={formik}
                        isRequired={true}
                      />
                    </div>
                    {/* Gallery Category */}
                    <div>
                      <FieldSelect
                        name='galleryDetails.galleryTypeId'
                        label='Gallery Category'
                        formik={formik}
                        isRequired={true}
                      >
                        {galleryCategory?.data?.data?.data.map((type) => (
                          <option key={type.id} value={type.id}>
                            {type.name}
                          </option>
                        ))}
                      </FieldSelect>
                    </div>
                    {/* File Upload */}
                    <div>
                      <FieldFile
                        name='file'
                        label='Upload Image(jpg/jpeg/png)'
                        formik={formik}
                        isRequired={true}
                      />
                    </div>
                    {/* Add Button */}
                    <div className='mt-2'>
                      <Button type='submit'>Add</Button>
                    </div>
                  </Stack>
                </Form>
              </CardBody>
            </Card>
          </Container>
        )
      }}
    </Formik>
  )
}

export default CreateGalleryPhotoForm
