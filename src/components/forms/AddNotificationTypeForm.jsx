import React from "react"
import { Formik, Form } from "formik"
import * as yup from "yup"
import { Button, Card, CardBody, Stack } from "react-bootstrap"
import FieldInput from "../core/FieldInput"
import { useAddNotificationType } from "../../hooks/queries/NotificationQueries"

const AddNotificationTypeForm = ({ setShow }) => {
  // States

  // Refs

  // Hooks
  const createNotificationType = useAddNotificationType()
  // Constants

  // Formik
  // Initial Values
  const initialValues = {
    name: "",
  }

  // Schema
  const validationSchema = yup.object({
    name: yup.string().required("Notification Type is required"),
  })

  // Handlers
  const onSubmit = (values) => {
    createNotificationType.mutate(values)
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
                      label="Notification Type"
                      formik={formik}
                      isRequired={true}
                    />
                  </div>
                  {/* Add Button */}
                  <div className="mt-2">
                    <Button
                      variant="outline-success"
                      type="submit"
                      className="float-end"
                    >
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

export default AddNotificationTypeForm
