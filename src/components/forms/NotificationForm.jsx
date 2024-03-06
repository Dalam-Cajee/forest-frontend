import React from "react"
import { Formik, Form } from "formik"
import * as yup from "yup"
import { Button, Container, Stack } from "react-bootstrap"
import FieldInput from "../core/FieldInput"
import {
  useAddNotification,
  useFetchNotificationTypes,
} from "../../hooks/queries/NotificationQueries"
import FieldSelect from "../core/FieldSelect"
import FieldFile from "../core/FieldFile"
import { useNavigate } from "react-router-dom"

const NotificationForm = () => {
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
  const { mutate: addNotification } = useAddNotification(onSuccess, onError)
  // Constants

  // Formik
  // Initial Values
  const initialValues = {
    title: "",
    notificationTypes: "",
    notificationFile: "",
  }

  // Schema
  const validationSchema = yup.object({
    title: yup.string().required("Required!"),
    notificationTypes: yup.string().required("Required!"),
    notificationFile: yup
      .mixed()
      // .test("fileType", "Only PDF files are allowed", (value) => {
      //   if (!value) return true
      //   return value.type === "application/pdf"
      // })
      // .test("fileSize", "File size is too large[Max: 5MB]", (value) => {
      //   if (!value) return true
      //   return value.size <= 5 * 1024 * 1024
      // })

      .required("Required!"),
  })

  // Handlers
  const onSubmit = (values) => {
    console.log("Notifications:", values)
    addNotification(values)
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
            <Form>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => navigate(-1)}
              >
                Go Back
              </Button>
              <Stack gap={3}>
                {/* Title */}
                <div>
                  <FieldInput
                    name="title"
                    label="Title"
                    formik={formik}
                    isRequired={true}
                  />
                </div>
                {/* Notification Type */}
                <div>
                  <FieldSelect
                    name="notificationTypes"
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
                    name="notificationFile"
                    label="Upload Document(PDF)"
                    formik={formik}
                    isRequired={true}
                  />
                </div>
                {/* Add Button */}
                <div>
                  <Button type="submit">Create</Button>
                </div>
              </Stack>
            </Form>
          </Container>
        )
      }}
    </Formik>
  )
}

export default NotificationForm
