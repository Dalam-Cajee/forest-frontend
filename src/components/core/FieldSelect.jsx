import { Field } from "formik"
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
      <FormControl.Feedback type="invalid">
        <small className="text-danger">{formik.errors[name]}</small>
      </FormControl.Feedback>
    </FormGroup>
  )
}

export default FieldSelect
