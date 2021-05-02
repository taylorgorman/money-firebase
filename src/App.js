import { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Button, Form, InputGroup } from "react-bootstrap";

import StyleGuide from "./components/StyleGuide";
import RetirementCalculator from "./components/RetirementCalculator";

// global utilities
const isFirebaseInitialized = firebase.apps.length > 0;
const isDevelopEnv = process.env.NODE_ENV === "development";

// initialize firebase
if (!isFirebaseInitialized) {
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
const auth = firebase.auth();
const firestore = firebase.firestore();

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
        <div>
          <h1>Money</h1>
          <span className="d-sm-none">{user?.email}</span>
        </div>
        <span className="m-0 d-none d-sm-flex">{user?.email}</span>
        {user ? <SignOutButton /> : <SignInButton />}
      </header>
      <main>
        {error && (
          <p>
            <em>
              <strong>useAuthState Error:</strong> {JSON.stringify(error)}
            </em>
          </p>
        )}
        {loading && <p>Loading user data...</p>}
        <Messages />
        <RetirementCalculator />
        <StyleGuide />
      </main>
    </>
  );
}

function SignInButton() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return <Button onClick={signInWithGoogle}>Sign in with Google</Button>;
}

function SignOutButton() {
  return (
    auth.currentUser && <Button onClick={() => auth.signOut()}>Sign out</Button>
  );
}

function Messages() {
  const [user] = useAuthState(auth);
  const messagesCollection = firestore.collection("messages");
  const query = messagesCollection
    .where("uid", "==", user?.uid || null)
    .orderBy("createdAt", "desc");
  const [messages, loading, error] = useCollectionData(query, {
    idField: "id",
  });

  const [newMessage, setNewMessage] = useState("");
  async function createMessage(event) {
    event.preventDefault();
    if (!user) {
      console.warning("DATABASE WRITE FAILED, user not authenticated");
    }
    else {
      await messagesCollection.add({
        uid: user.uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        text: newMessage,
      });
      setNewMessage("");
    }
  }

  if (!user) {
    return <p>Sign in to see the stuff.</p>
  }
  else {
    return (
      <>
        <p>Welcome, {user.displayName}!</p>
        <h2>Messages from the database!</h2>
        {error && (
          <p>
            <em>
              <strong>useCollectionData Error:</strong> {JSON.stringify(error)}
            </em>
          </p>
        )}
        {loading && <p>Loading messages...</p>}

        <h3>Add a message</h3>
        <Form onSubmit={createMessage}>
            <InputGroup>
              <Form.Control
                value={newMessage}
                onChange={({ target }) => setNewMessage(target.value)}
                required
              />
              <InputGroup.Append>
                <Button type="submit">Save</Button>
              </InputGroup.Append>
            </InputGroup>
        </Form>

        <h3>Messages</h3>
        {messages?.length ? (
          messages.map((message) => (
            <p key={message.id}>
              {message.createdAt.seconds}: {message.text}
            </p>
          ))
        ) : (
          <p>Aw nuts, there are none.</p>
        )}
      </>
    );
  }
  
}
