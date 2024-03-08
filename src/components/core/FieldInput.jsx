import { ErrorMessage, Field } from "formik"
import React from "react"
import { FormControl, FormGroup, FormLabel } from "react-bootstrap"

const FieldInput = ({ name, label, formik, isRequired, ...rest }) => {
  return (
    <FormGroup>
      <FormLabel htmlFor={name} className="fw-bold">
        {label}
      </FormLabel>
      <Field name={name}>
        {({ field, form, meta }) => {
          return (
            <FormControl
              id={name}
              required={isRequired}
              isInvalid={formik.errors[name] && formik.touched[name]}
              {...rest}
              {...field}
            />
          )
        }}
      </Field>
      <ErrorMessage
        name={name}
        render={(msg) => {
          return <small className="text-danger">{msg}</small>
        }}
      />
    </FormGroup>
  )
}

export default FieldInput
