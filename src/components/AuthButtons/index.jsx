import { Button } from 'react-bootstrap'

import { useFirebase } from '../../utilities/FirebaseContext'

export function SignInWithGoogleButton() {
  const { signInWithGoogle } = useFirebase()
  return (
    <Button className="btn-google" onClick={ signInWithGoogle }>
      Sign in with Google
    </Button>
  )
}

export function SignInWithFacebookButton() {
  const { signInWithFacebook } = useFirebase()
  return (
    <Button className="btn-facebook" onClick={ signInWithFacebook }>
      Sign in with Facebook
    </Button>
  )
}

export function SignInWithTwitterButton() {
  const { signInWithTwitter } = useFirebase()
  return (
    <Button className="btn-twitter" onClick={ signInWithTwitter }>
      Sign in with Twitter
    </Button>
  )
}

export function SignOutButton() {
  const { signOut } = useFirebase()
  return <Button onClick={ () => signOut() }>Sign out</Button>
}
