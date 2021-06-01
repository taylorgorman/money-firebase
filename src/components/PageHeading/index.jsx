import { GearFill } from 'react-bootstrap-icons'

import './styles.scss'

export default function PageHeading({ children, hasSettings }) {
  return (
    <heading className="page-heading">
      <h1>{ children }</h1>
      { hasSettings && <a href="#page-settings"><GearFill /></a> }
    </heading>
  )
}
