import { ErrorMessage } from "formik"
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
        onBlur={formik.handleBlur}
      />
      <ErrorMessage
        name={name}
        render={(msg) => <small className="text-danger">{msg}</small>}
      />
    </FormGroup>
  )
}

export default FieldFile
