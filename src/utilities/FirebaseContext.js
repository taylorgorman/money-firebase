import { createContext, useContext } from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'

const FirebaseContext = createContext()

export function FirebaseProvider({ children }) {

  // global utilities
  const isFirebaseInitialized = firebase.apps.length > 0
  const isDevelopEnv = process.env.NODE_ENV === 'development'

  // initialize firebase
  if ( ! isFirebaseInitialized ) {
    firebase.initializeApp({
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_FIREBASE_APP_ID,
      measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
    })
  }

  // global firebase tools
  const auth = firebase.auth()
  const firestore = firebase.firestore()

  // use firebase emulators in develop
  if ( ! isFirebaseInitialized && isDevelopEnv ) {
    auth.useEmulator( 'http://localhost:9099' )
    firestore.useEmulator( 'localhost', 8080 )
  }

  // auth
  const [ user, loading, error ] = useAuthState( auth )
  const userLoading = loading
  const userError = error
  const signOut = () => { auth.signOut() }

  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup( provider )
  }
  function signInWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider()
    auth.signInWithPopup( provider )
  }
  function signInWithTwitter() {
    const provider = new firebase.auth.TwitterAuthProvider()
    auth.signInWithPopup( provider )
  }
  
  // context provider
  return <FirebaseContext.Provider value={{
    firebase,
    auth,
    user,
    userLoading,
    userError,
    signOut,
    firestore,
    signInWithGoogle,
    signInWithFacebook,
    signInWithTwitter,
  }}>
    { children }
  </FirebaseContext.Provider>

} 

// context consumer
export const useFirebase = () => useContext( FirebaseContext )
