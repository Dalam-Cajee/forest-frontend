import React from "react"
import { Formik, Form } from "formik"
import * as yup from "yup"
import {
  Button,
  Card,
  CardBody,
  CloseButton,
  Container,
  Stack,
} from "react-bootstrap"
import FieldInput from "../core/FieldInput"
import FieldSelect from "../core/FieldSelect"
import FieldFile from "../core/FieldFile"
import { useNavigate } from "react-router-dom"
import {
  useAddDocument,
  useFetchDocumnentTypes,
} from "../../hooks/queries/PublicationQueries"

const AddDocumentForm = () => {
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
  // Publication Queries
  const documentTypes = useFetchDocumnentTypes(onSuccess, onError)
  const addDocument = useAddDocument(onSuccess, onError)

  // Constants
  const FILE_TYPES = ["application/pdf", "application/x-pdf"]

  const FILE_SIZE = 500 * 1024 * 1024 // 500MB

  // Formik
  // Initial Values
  const initialValues = {
    documentDetails: {
      title: "",
      documentTypeId: "",
    },
    file: null,
  }

  // Schema
  const validationSchema = yup.object({
    documentDetails: yup.object({
      title: yup.string().required("Title is required"),
      documentTypeId: yup.string().required("Document Type is required"),
    }),
    file: yup
      .mixed()
      .required("File is required")
      .test("fileFormat", "File format not supported", (value) => {
        return value && FILE_TYPES.includes(value.type)
      })
      .test("fileSize", "File size too large", (value) => {
        return value && value.size <= FILE_SIZE
      }),
  })

  // Handlers
  const onSubmit = (values) => {
    // Form Data object
    const formData = new FormData()
    // Update the object
    formData.append("file", values.file)
    formData.append("documentDetails", JSON.stringify(values.documentDetails))
    addDocument.mutate(formData)
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
              <CardBody className="shadow rounded p-3">
                <Form>
                  <Stack gap={2}>
                    <div>
                      <CloseButton
                        className="float-end"
                        onClick={() => navigate(-1)}
                      />
                    </div>
                    {/* Title */}
                    <div>
                      <FieldInput
                        name="documentDetails.title"
                        label="Title"
                        formik={formik}
                        isRequired={true}
                      />
                    </div>
                    {/* Document Type */}
                    <div>
                      <FieldSelect
                        name="documentDetails.documentTypeId"
                        label="Document Type"
                        formik={formik}
                        isRequired={true}
                      >
                        {documentTypes?.data?.data?.data.map((type) => (
                          <option key={type.id} value={type.id}>
                            {type.name}
                          </option>
                        ))}
                      </FieldSelect>
                    </div>
                    {/* File Upload */}
                    <div>
                      <FieldFile
                        name="file"
                        label="Upload Document(PDF)"
                        formik={formik}
                        isRequired={true}
                      />
                    </div>
                    {/* Add Button */}
                    <div className="mt-2">
                      <Button type="submit">Add</Button>
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

export default AddDocumentForm
