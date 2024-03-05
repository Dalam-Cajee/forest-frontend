import React from "react"
import { Form } from "react-bootstrap"

const FormSelect = ({ name, label, formik, isRequired, children, ...rest }) => {
  return (
    <Form.Group>
      <Form.Label htmlFor={name}>{label}</Form.Label>
      <FormSelect
        required={isRequired}
        id={name}
        name={name}
        isInvalid={formik.errors[name] && formik.touched[name]}
        {...rest}
      >
        {children}
      </FormSelect>
      <Form.Control.Feedback type="invalid">
        <small className="text-danger">{formik.errors[name]}</small>
      </Form.Control.Feedback>
    </Form.Group>
  )
}

export default FormSelect
