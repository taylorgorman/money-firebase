import { createContext, useContext } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import { retrieveSettings, updateSetting } from './data/settings'
import { useFirebase } from './FirebaseContext'

const DataContext = createContext()

export function DataProvider( { children } ) {
  const FB = useFirebase()
  const { firebase, firestore, user } = useFirebase()
  const [settings, settingsLoading, settingsError] = retrieveSettings()

  /**
   * @param {string} collectionName
   * @param {Object} docData
   * @param {string} docId
   */
  function createData( collectionName, docData, docId ) {
    const collection = firestore.collection( collectionName )
    const data = {
      uid: user?.uid,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      ...docData,
    }
    return docId
      ? collection.doc( docId ).set( data )
      : collection.add( data )
  }

  /**
   * @param {string} collectionName - name of firestore collection
   * @returns [data, loading, error]
   */
  function retrieveData( collectionName ) {
    const query = firestore.collection( collectionName )
      .where( 'uid', '==', user?.uid || null )
      .orderBy( 'updatedAt', 'desc' )
    return useCollectionData( query, { idField: 'id' } )
  }

  function updateData( collectionName, newData, docId ) {
    return firestore.collection( collectionName ).doc( docId ).update( newData )
  }

  // Context provider
  return (
    <DataContext.Provider value={ {
      createData,
      retrieveData,
      updateData,
      settings,
      settingsLoading,
      settingsError,
      updateSetting: ( docData, docId ) => updateSetting( FB, docData, docId ),
    } }
    >
      { children }
    </DataContext.Provider>
  )
}

// Context consumer
export const useData = () => useContext( DataContext )
