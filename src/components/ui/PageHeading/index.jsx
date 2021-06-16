import {
  Popover, OverlayTrigger, Row, Col, Form, Button,
} from 'react-bootstrap'
import { GearFill } from 'react-bootstrap-icons'

import HeadingSubheading from '../HeadingSubheading'
import { dashed } from '../../../utilities/formatString'

import './styles.scss'

export default function PageHeading( {
  children,
  subheading,
  buttonText = 'Add New',
  buttonOnClick,
  settings,
} ) {
  return (
    <div className="page-heading">
      <div className="d-flex align-items-center flex-grow-1">
        <HeadingSubheading
          heading={ children }
          subheading={ subheading }
          Tag="h1"
        />
        { buttonText && buttonOnClick && (
          <Button onClick={ buttonOnClick } size="sm" variant="light">{ buttonText }</Button>
        ) }
      </div>
      { settings && <PageSettings { ...{ settings } } /> }
    </div>
  )
}

function PageSettings( { settings } ) {
  return (
    <OverlayTrigger
      rootClose
      trigger="click"
      placement="bottom-end"
      overlay={ (
        <Popover id="page-heading-settings" className="page-heading-settings">
          <Popover.Content>
            <PageSettingsContent { ...{ settings } } />
          </Popover.Content>
        </Popover>
      ) }
    >
      <button type="button" aria-label="Settings" className="page-heading-settings-trigger">
        <GearFill />
      </button>
    </OverlayTrigger>
  )
}

function PageSettingsContent( { settings } ) {
  return (
    <Row className="settings-row">
      { settings.map( ( setting ) => (
        <Col md className="setting" key={ setting.label }>
          <h5 className="setting-title small-caps">{ setting.label }</h5>
          <div className="setting-options">
            { setting.options.map( ( optionLabel, key ) => {
              const checked = setting.type === 'radio'
                ? setting.value === optionLabel
                : setting.value
              const onChange = setting.type === 'radio'
                ? () => setting.onChange( optionLabel )
                : () => setting.onChange( ! setting.value )
              return (
                <Form.Check
                  type={ setting.type }
                  id={ dashed( optionLabel ) }
                  name={ dashed( optionLabel ) }
                  label={ optionLabel }
                  { ...{
                    key,
                    checked,
                    onChange,
                  } }
                />
              )
            } ) }
          </div>
        </Col>
      ) ) }
    </Row>
  )
}
