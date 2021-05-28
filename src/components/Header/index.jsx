import { Button } from 'react-bootstrap'

import './styles.scss'
import { useFirebase } from '../../utilities/FirebaseContext'

export default function Header() {

  // hooks
  const { user, userLoading, userError } = useFirebase()

  // errors
  userError && console.error( 'Error with user:', userError )

  // variables
  const userEmail = userLoading ? 'Loading...' : user?.email

  // render
  return (
    <header>
      <div>
        <h1>Money</h1>
        <span className="d-sm-none small">{ userEmail }</span>
      </div>
      <span className="m-0 d-none d-sm-flex small">{ userEmail }</span>
      { user ? <SignOutButton /> : <SignInButton /> }
    </header>
  )

}

function SignInButton() {
  const { signInWithGoogle } = useFirebase()
  return <Button onClick={ signInWithGoogle }>Sign in</Button>
}

function SignOutButton() {
  const { user, signOut } = useFirebase()
  return user && <Button onClick={ () => signOut() }>Sign out</Button>
}
