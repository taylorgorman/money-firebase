import { Card, CardGroup, OverlayTrigger, Popover } from 'react-bootstrap'

import './styles.scss'
import { headings, platforms } from './data'
import { dashed } from '../../../utilities/formatString'
import { QuestionCircleFill } from 'react-bootstrap-icons'

export default function Competitors() {

  return (
    <CardGroup className="competitors">
      <Card body className="row-headings">
        <h3 className="card-title h6">{' '}</h3>
        <em className="card-description muted-text small"></em>
        { headings.map(( heading, key ) => (
          <p key={ key } className={ heading.isSectionHeading ? 'is-section-heading' : '' }>
          { heading.name }
          { heading.description && (
            <OverlayTrigger
              rootClose={ true }
              placement="right"
              overlay={
                <Popover id={ dashed( heading.name ) } className="popover-competitor-description">
                  <Popover.Content>
                    { heading.description }
                  </Popover.Content>
                </Popover>    
              }
            >
              <QuestionCircleFill className="desc-icon" />
            </OverlayTrigger>
          ) }
          </p>
        )) }
      </Card>
      { platforms.map(( platform, key ) => {
        const nameLinkedOrNot = platform.url
          ? <a href={ platform.url } target="_blank" rel="noreferrer">{ platform.name }</a>
          : platform.name
        return (
          <Card body key={ key } className={ dashed( platform.name ) }>
            <h3 className="card-title h6">{ nameLinkedOrNot }</h3>
            <em className="card-description muted-text small">{ platform.description }</em>
            { headings.map(( heading, key ) => (
              <p key={ key } className={ heading.isSectionHeading ? 'is-section-heading' : '' }>
                { platform[heading.dataKey] }
              </p>
            )) }
          </Card>
        )
      }) }
    </CardGroup>
  )
}
