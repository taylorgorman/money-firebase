import {
  Image, ListGroup, OverlayTrigger, Popover,
} from 'react-bootstrap'
import { PaletteFill, GearFill, BoxArrowInRight } from 'react-bootstrap-icons'
import { LinkContainer } from 'react-router-bootstrap'
import { Link, NavLink } from 'react-router-dom'

import './styles.scss'
import { useFirebase } from '../../utilities/FirebaseContext'

export default function AppHeader() {
  const { user } = useFirebase()

  return (
    <>
      <header className="app-header">
        <p className="brand"><Link to="/">Sir Pigglesworth</Link></p>
        <nav className="app-header-nav">
          <NavLink to="/style-guide" className="nav-item">
            <PaletteFill />
            <span className="sr-only">Style Guide</span>
          </NavLink>
          <NavLink to="/settings" className="nav-item">
            <GearFill />
            <span className="sr-only">Settings</span>
          </NavLink>
          { user
            ? (
              <span className="nav-item">
                <Avatar className="avatar" />
                <span className="sr-only">Your Account</span>
              </span>
            )
            : (
              <NavLink to="/signin" className="nav-item">
                <BoxArrowInRight />
                <span className="sr-only">Sign in</span>
              </NavLink>
            ) }
        </nav>
      </header>
    </>
  )
}

function Avatar( { className } ) {
  return (
    <OverlayTrigger
      rootClose
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
      <ProfileLinksList />
    </Popover.Content>
  </Popover>
)

function ProfileLinksList() {
  const { signOut } = useFirebase()
  return (
    <ListGroup>
      <LinkContainer to="/profile">
        <ListGroup.Item action>Profile</ListGroup.Item>
      </LinkContainer>
      <ListGroup.Item action onClick={ signOut }>Sign Out</ListGroup.Item>
    </ListGroup>
  )
}
