import { NavLink } from 'react-router-dom'
import { Image, ListGroup, OverlayTrigger, Popover } from 'react-bootstrap'
import { PaletteFill, GearFill } from 'react-bootstrap-icons'

import './styles.scss'
import { useFirebase } from '../../utilities/FirebaseContext'
import { LinkContainer } from 'react-router-bootstrap'

export default function AppHeader() {
  const { signOut } = useFirebase()
  return (
    <header className="app-header">
      <h1>Sir Pigglesworth</h1>
      <nav className="app-header-nav">
        <NavLink to="/style-guide" className="nav-item">
          <PaletteFill />
          <span className="sr-only">Style Guide</span>
        </NavLink>
        <NavLink to="/settings" className="nav-item">
          <GearFill />
          <span className="sr-only">Settings</span>
        </NavLink>
        <span className="nav-item">
          <Avatar className="avatar" />
          <span className="sr-only">Sign Out</span>
        </span>
      </nav>
    </header>
  )
}

function Avatar({ className }) {
  return (
    <OverlayTrigger
      rootClose={ true }
      trigger="click"
      placement="right-end"
      overlay={ profileLinks }
    >
      <Image className={ className } src="https://placekitten.com/50/50" roundedCircle />
    </OverlayTrigger>
  )
}

const profileLinks = (
  <Popover id="profile-links">
    <Popover.Content>
      <ListGroup>
        <LinkContainer to="/profile">
          <ListGroup.Item action>Profile</ListGroup.Item>
        </LinkContainer>
        <ListGroup.Item>Sign Out</ListGroup.Item>
      </ListGroup>
    </Popover.Content>
  </Popover>
);
