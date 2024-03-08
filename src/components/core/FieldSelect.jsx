import { ErrorMessage, Field } from "formik"
import React from "react"
import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap"

const FieldSelect = ({
  name,
  label,
  formik,
  isRequired,
  placeholder,
  children,
  ...rest
}) => {
  return (
    <FormGroup>
      <FormLabel htmlFor={name} className="fw-bold">
        {label}
      </FormLabel>
      <Field name={name}>
        {({ field, form, meta }) => (
          <Form.Select
            id={name}
            required={isRequired}
            isInvalid={formik.errors[name] && formik.touched[name]}
            {...rest}
            {...field}
          >
            <option value="" disabled>
              --Select an option--
            </option>
            {children}
          </Form.Select>
        )}
      </Field>
      <ErrorMessage
        name={name}
        render={(msg) => <small className="text-danger">{msg}</small>}
      />
    </FormGroup>
  )
}

export default FieldSelect
