import { createContext, useContext } from 'react'
import { retrieveSettings, updateSetting } from './data/settings'
import { useFirebase } from './FirebaseContext'

const DataContext = createContext()

export function DataProvider({ children }) {

  const FB = useFirebase()
  const [ settings, settingsLoading, settingsError ] = retrieveSettings()
  
  // Context provider
  return <DataContext.Provider value={{
    settings, settingsLoading, settingsError,
    updateSetting: ( docData, docId ) => updateSetting( FB, docData, docId ),
  }}>
    { children }
  </DataContext.Provider>

} 

// Context consumer
export const useData = () => useContext( DataContext )
