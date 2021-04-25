import {useState} from 'react'
import './App.css'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

// global utilities
const isFirebaseInitialized = firebase.apps.length > 0;
const isDevelopEnv = process.env.NODE_ENV === "development";
const isProductionEnv = process.env.NODE_ENV === "production";

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
  });
}

// global firebase tools
const auth = firebase.auth()
const firestore = firebase.firestore()

// use firebase emulators in develop
if (!isFirebaseInitialized && isDevelopEnv) {
  auth.useEmulator("http://localhost:9099");
  firestore.useEmulator("localhost", 8080);
}


export default function App() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      <header>
        <h1>Money</h1>
        <div>{user?.email}</div>
        <div>{user ? <SignOutButton /> : <SignInButton />}</div>
      </header>
      <main>
        {error && (
          <p>
            <em>
              <strong>useAuthState Error:</strong> {JSON.stringify(error)}
            </em>
          </p>
        )}
        {loading && <p>Loading...</p>}
        {user ? (
          <>
            <p>Welcome!</p>
            <Messages />
          </>
        ) : (
          <p>Sign in to see the stuff.</p>
        )}
      </main>
    </>
  );
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

function Messages() {

  const messagesCollection = firestore.collection('messages')
  const query = messagesCollection.orderBy('createdAt', 'desc').limit(25)
  const [messages, loading, error] = useCollectionData(query, { idField: 'id' })

  const [newMessage, setNewMessage] = useState('')
  async function createMessage(event) {
    event.preventDefault()
    console.log('newMessage', newMessage)
    await messagesCollection.add({
      text: newMessage,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    setNewMessage('')
  }
  
  return (
    <>
      <h2>Messages from the database!</h2>
      {error && (
        <p>
          <em>
            <strong>useAuthState Error:</strong> {JSON.stringify(error)}
          </em>
        </p>
      )}
      {loading && <p>Loading...</p>}

      <h3>Add a message</h3>
      <form onSubmit={createMessage}>
        <input
          value={newMessage}
          onChange={({ target }) => setNewMessage(target.value)}
        />
        <button type="submit">Save</button>
      </form>

      <h3>Messages</h3>
      {messages ? (
        messages.map((message) => (
          <p key={message.id}>
            {message.text}
          </p>
        ))
      ) : (
        <p>Aw nuts, there are none.</p>
      )}
    </>
  );
}
