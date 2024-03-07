import { Field } from 'formik'
import React from 'react'
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap'

const FieldInput = ({ name, label, formik, isRequired, ...rest }) => {
  return (
    <FormGroup>
      <FormLabel htmlFor={name} className='fw-bold'>
        {label}
      </FormLabel>
      <Field name={name}>
        {({ field, form, meta }) => {
          console.log(formik.errors[name.split('.')[0]])
          return (
            <FormControl
              id={name}
              required={isRequired}
              isInvalid={
                formik.errors[name.split('[]')[0]] &&
                formik.touched[name.split('[]')[0]]
              }
              {...rest}
              {...field}
            />
          )
        }}
      </Field>
      <FormControl.Feedback type='invalid'>
        <small className='text-danger'>
          {formik.errors[name.split('[]')[0]]}
        </small>
      </FormControl.Feedback>
    </FormGroup>
  )
}

export default FieldInput
