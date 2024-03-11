import React from "react"
import { Formik, Form } from "formik"
import * as yup from "yup"
import { Button, Card, CardBody, Stack } from "react-bootstrap"
import FieldInput from "../core/FieldInput"
import { useAddGalleryCategory } from "../../hooks/queries/GalleryQueries"

const AddGalleryCategoryForm = ({ setShow }) => {
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
  const createGalleryCategory = useAddGalleryCategory(onSuccess, onError)
  // Constants

  // Formik
  // Initial Values
  const initialValues = {
    name: "",
  }

  // Schema
  const validationSchema = yup.object({
    name: yup.string().required("Gallery Category is required"),
  })

  // Handlers
  const onSubmit = (values) => {
    createGalleryCategory.mutate(values)
    setShow(false)
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
          <Card className="border-0">
            <CardBody>
              <Form>
                <Stack gap={2}>
                  {/* Title */}
                  <div>
                    <FieldInput
                      name="name"
                      label="Gallery Category"
                      formik={formik}
                      isRequired={true}
                    />
                  </div>
                  {/* Add Button */}
                  <div className="mt-2">
                    <Button type="submit" className="float-end">
                      Add
                    </Button>
                  </div>
                </Stack>
              </Form>
            </CardBody>
          </Card>
        )
      }}
    </Formik>
  )
}

export default AddGalleryCategoryForm
