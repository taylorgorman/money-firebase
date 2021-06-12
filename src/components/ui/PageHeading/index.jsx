import { Popover, OverlayTrigger, Row, Col, Form } from 'react-bootstrap'
import { GearFill } from 'react-bootstrap-icons'

import HeadingSubheading from '../HeadingSubheading'
import { dashed } from '../../../utilities/formatString'

import './styles.scss'

export default function PageHeading({ children, subheading, settings }) {
  return (
    <div className="page-heading">
      <HeadingSubheading
        heading={ children }
        subheading={ subheading }
        Tag='h1'
      />
      { settings && <PageSettings {...{ settings }} /> }
    </div>
  )
}

function PageSettings({ settings }) {
  return (
    <OverlayTrigger
      rootClose={ true }
      trigger="click"
      placement="bottom-end"
      overlay={
        <Popover id="page-heading-settings" className="page-heading-settings">
          <Popover.Content>
            <PageSettingsContent {...{ settings }} />
          </Popover.Content>
        </Popover>            
      }
    >
      <button className="page-heading-settings-trigger"><GearFill /></button>
    </OverlayTrigger>
  )
}

function PageSettingsContent({ settings }) {
  return (
    <Row className="settings-row">
    { settings.map(( setting, key ) => (
      <Col md className="setting" key={ key }>
        <h5 className="setting-title small-caps">{ setting.label }</h5>
        <div className="setting-options">
        { setting.options.map(( optionLabel, key) => {
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
              {...{
                key,
                checked,
                onChange,
              }}
            />
          )
        }) }
        </div>
      </Col>
    )) }
    </Row>
  )
}
