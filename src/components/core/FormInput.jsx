import React from "react"
import { FormControl, FormGroup, FormLabel } from "react-bootstrap"

const FormInput = ({ name, label, formik, isRequired, ...rest }) => {
  return (
    <FormGroup>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <FormControl
        required
        id={name}
        type="text"
        name={name}
        isInvalid={formik.errors[name] && formik.touched[name]}
        {...rest}
      />
      <FormControl.Feedback type="invalid">
        <small className="text-danger">{formik.errors[name]}</small>
      </FormControl.Feedback>
    </FormGroup>
  )
}

export default FormInput
