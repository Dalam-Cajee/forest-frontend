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
import {
  useAddNotification,
  useFetchNotificationTypes,
} from "../../hooks/queries/NotificationQueries"
import FieldSelect from "../core/FieldSelect"
import FieldFile from "../core/FieldFile"
import { useNavigate } from "react-router-dom"

const CreateNotificationForm = () => {
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
  // Notification Queries
  const notificationTypes = useFetchNotificationTypes(onSuccess, onError)
  const createNotification = useAddNotification(onSuccess, onError)

  // Constants
  const FILE_TYPES = ["application/pdf", "application/x-pdf"]

  const FILE_SIZE = 500 * 1024 * 1024 // 500MB

  // Formik
  // Initial Values
  const initialValues = {
    notificationDetails: {
      title: "",
      notificationTypeId: "",
    },
    file: null,
  }

  // Schema
  const validationSchema = yup.object({
    notificationDetails: yup.object({
      title: yup.string().required("Title is required"),
      notificationTypeId: yup
        .string()
        .required("Notification Type is required"),
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
    formData.append(
      "notificationDetails",
      JSON.stringify(values.notificationDetails)
    )
    createNotification.mutate(formData)
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
                        name="notificationDetails.title"
                        label="Title"
                        formik={formik}
                        isRequired={true}
                      />
                    </div>
                    {/* Notification Type */}
                    <div>
                      <FieldSelect
                        name="notificationDetails.notificationTypeId"
                        label="Notification Type"
                        formik={formik}
                        isRequired={true}
                      >
                        {notificationTypes?.data?.data?.data.map((type) => (
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
                      <Button type="submit">Create</Button>
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

export default CreateNotificationForm
