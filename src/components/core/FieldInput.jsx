import { Field } from 'formik'
import React from 'react'
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap'

const FieldInput = ({ name, label, formik, isRequired, ...rest }) => {
  return (
    <FormGroup>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Field name={name}>
        {({ field, form, meta }) => (
          <FormControl
            id={name}
            required={isRequired}
            isInvalid={formik.errors[name] && formik.touched[name]}
            {...rest}
            {...field}
          />
        )}
      </Field>
      <FormControl.Feedback type='invalid'>
        <small className='text-danger'>{formik.errors[name]}</small>
      </FormControl.Feedback>
    </FormGroup>
  )
}

export default FieldInput
