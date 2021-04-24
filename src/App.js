import './App.css'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

if (firebase.apps.length === 0) { // for react dev live refresh
  firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  });
}

const auth = firebase.auth()
const firestore = firebase.firestore()

export default function App() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      <header>
        <h1>Money</h1>
        <div>{user?.displayName}</div>
        <div>{user ? <SignOutButton /> : <SignInButton />}</div>
      </header>
      <main>
        {error && <p><strong>useAuthState Error:</strong> {error}</p>}
        {loading && <p>Loading...</p>}
        {user ? <p>Welcome!</p> : <p>You are not logged in.</p>}
      </main>
    </>
  )
}

function SignInButton() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }
  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function SignOutButton() {
  return (
    auth.currentUser && (
      <button onClick={ () => auth.signOut() }>Sign out</button>
    )
  );
}
