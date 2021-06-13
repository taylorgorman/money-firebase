import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import NumberFormat from 'react-number-format'

import './index.scss'

export default function InputGroupAccounting( { value, onValueChange } ) {
  return (
    <InputGroup className="accounting">
      <InputGroup.Prepend>
        <InputGroup.Text>$</InputGroup.Text>
      </InputGroup.Prepend>
      <NumberFormat
        customInput={ Form.Control }
        thousandSeparator
        value={ value }
        decimalScale={ 0 }
        onValueChange={ ( values ) => {
          onValueChange( values.value )
        } }
      />
    </InputGroup>
  )
}
