import { useCollectionData as collectionData } from 'react-firebase-hooks/firestore'
import { useFirebase as fromFirebase } from '../FirebaseContext'

export function retrieveSettings() {
  // Retrieve settings from Firestore
  const { firestore, user } = fromFirebase()
  const query = firestore.collection( 'settings' )
    .where( 'uid', '==', user?.uid || null )
    .orderBy( 'updatedAt', 'desc' )
  const [data, loading, error] = collectionData( query, { idField: 'id' } )

  // Convert Firebase data to simple object
  const settings = data?.reduce( ( object, setting ) => {
    object[setting.id] = setting.value
    return object
  }, {} )

  // Return
  return [settings, loading, error]
}

export async function updateSetting( FB, docData, docId ) {
  const { firebase, firestore, user } = FB
  const settingsCollection = firestore.collection( 'settings' )
  const data = {
    uid: user?.uid,
    updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    ...docData,
  }
  docId
    ? await settingsCollection.doc( docId ).set( data )
    : await settingsCollection.add( data )
}
