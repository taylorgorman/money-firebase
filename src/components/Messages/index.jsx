import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { useFirebase } from '../../utilities/FirebaseContext'

export default function Messages() {
  const { firebase, auth, firestore } = useFirebase()
  const [user] = useAuthState( auth )
  const messagesCollection = firestore.collection( 'messages' )
  const query = messagesCollection
    .where( 'uid', '==', user?.uid || null )
    .orderBy( 'createdAt', 'desc' )
  const [messages, loading, error] = useCollectionData( query, {
    idField: 'id',
  } )

  const [newMessage, setNewMessage] = useState( '' )
  async function createMessage( event ) {
    event.preventDefault()
    await messagesCollection.add( {
      uid: user.uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      text: newMessage,
    } )
    setNewMessage( '' )
  }

  if ( ! user ) {
    return <p>Sign in to see your messages.</p>
  }

  return (
    <section>
      <h1>Messages</h1>
      { error && (
      <p>
        <em>
          <strong>useCollectionData Error:</strong>
          { ' ' }
          { JSON.stringify( error ) }
        </em>
      </p>
      ) }
      { loading && <p>Loading messages...</p> }

      <h3>Add a message</h3>
      <Form onSubmit={ createMessage }>
        <InputGroup>
          <Form.Control
            value={ newMessage }
            onChange={ ( { target } ) => setNewMessage( target.value ) }
            required
          />
          <InputGroup.Append>
            <Button type="submit">Save</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>

      <h3>List of your messages</h3>
      { messages?.length ? (
        messages.map( ( message ) => (
          <p key={ message.id }>
            <strong>
              { message.createdAt?.seconds }
              :
            </strong>
            { ' ' }
            { message.text }
          </p>
        ) )
      ) : (
        <p>Aw nuts, there are none.</p>
      ) }
    </section>
  )
}
