import React from "react"
import { Formik, Form } from "formik"
import * as yup from "yup"
import { Button, Card, CardBody, Stack } from "react-bootstrap"
import FieldInput from "../core/FieldInput"
import { useAddDocumentType } from "../../hooks/queries/PublicationQueries"

const AddDocumentTypeForm = ({ setShow }) => {
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
  const createDocumentType = useAddDocumentType(onSuccess, onError)

  // Constants

  // Formik
  // Initial Values
  const initialValues = {
    name: "",
  }

  // Schema
  const validationSchema = yup.object({
    name: yup.string().required("Document Type is required"),
  })

  // Handlers
  const onSubmit = (values) => {
    createDocumentType.mutate(values)
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
                      label="Document Type"
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

export default AddDocumentTypeForm
