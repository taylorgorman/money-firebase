import { Formik } from 'formik'
import { Button, Form as BsForm } from 'react-bootstrap'
import * as Yup from 'yup'

import { dashed } from '../../../utilities/formatString'

/**
 * @param {Object} props
 * @param {Object} props.fields
 * @param {string} props.fields.label - label that user sees
 * @param {string} [props.fields.id]
 *  unique string, defaults to lowercased dash-separated value of props.fields.label
 * @param {string} [props.fields.value]
 * @param {string} [props.fields.type=text]
 *  select, checkbox, radio, or any value accepted in the type attribute of input element
 * @param {Array.string} [props.fields.options] - required for select, checkbox, and radio types
 * @param {Object} props.fields.validation - schema provided by Yup
 * @param {string} [props.submitButtonText=Submit]
 * @param {function} props.onSubmit - called when form is submitted
 */
export default function Form( {
  fields,
  submitButtonText = 'Submit',
  onSubmit,
} ) {
  // field fallbacks
  const controls = fields.map( ( field ) => ( {
    ...field,
    id: field.id || dashed( field.label ),
    type: field.type || 'text',
  } ) )

  // extract initial values
  const values = controls.reduce( ( object, control ) => {
    const firstSelectValue = control.type === 'select'
      && control.options[0]
    return (
      Object.assign( object, {
        [control.id]: control.value || firstSelectValue || '',
      } )
    )
  }, {} )

  // extract validation schema
  const validationSchema = Yup.object().shape( controls.reduce( ( object, control ) => (
    Object.assign( object, {
      [control.id]: control.validation,
    } )
  ), {} ) )

  // render
  return (
    <Formik
      initialValues={ values }
      validationSchema={ validationSchema }
      onSubmit={ ( values, { setSubmitting } ) => {
        onSubmit( values )
        setSubmitting( false )
      } }
    >
      { ( {
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        isSubmitting,
      } ) => (
        <BsForm noValidate onSubmit={ handleSubmit }>
          { controls.map( ( {
            type,
            label,
            id,
            options,
          } ) => {
            // simplify props
            const isInvalid = touched[id] && errors[id]

            // field markup
            let Control
            switch ( type ) {
              case 'select':
                Control = (
                  <BsForm.Control
                    as="select"
                    { ...{ isInvalid } }
                    name={ id }
                    value={ values[id] }
                    onChange={ handleChange }
                  >
                    { options.map( ( option ) => (
                      <option
                        key={ dashed( option ) }
                        value={ option }
                      >
                        { option }
                      </option>
                    ) ) }
                  </BsForm.Control>
                )
                break
              default:
                Control = (
                  <BsForm.Control
                    { ...{ type, isInvalid } }
                    name={ id }
                    value={ values[id] }
                    onChange={ handleChange }
                  />
                )
            }

            // render
            return (
              <BsForm.Group
                key={ id }
                controlId={ id }
                className={ isInvalid && 'is-invalid' }
              >
                <BsForm.Label>{ label }</BsForm.Label>
                <BsForm.Control.Feedback as="span" type="invalid">
                  { errors[id] }
                </BsForm.Control.Feedback>
                { Control }
              </BsForm.Group>
            )
          } ) }
          <Button variant="primary" type="submit" disabled={ isSubmitting }>
            { submitButtonText }
          </Button>
        </BsForm>
      ) }
    </Formik>
  )
}
