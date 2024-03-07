import { Field } from "formik"
import React from "react"
import { FormControl, FormGroup, FormLabel } from "react-bootstrap"

const FieldFile = ({ name, label, formik, isRequired, ...rest }) => {
  return (
    <FormGroup>
      <FormLabel htmlFor={name} className="fw-bold">
        {label}
      </FormLabel>
      <FormControl
        id={name}
        type="file"
        required={isRequired}
        isInvalid={formik.errors[name] && formik.touched[name]}
        {...rest}
        onChange={(e) => formik.setFieldValue(name, e.target.files[0])}
      />

      <FormControl.Feedback type="invalid">
        <small className="text-danger">{formik.errors[name]}</small>
      </FormControl.Feedback>
    </FormGroup>
  )
}

export default FieldFile
