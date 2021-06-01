import { Redirect, Route, useHistory } from "react-router"

import { useFirebase } from "./FirebaseContext"

export default function PrivateRoute( props ) {
  const { user } = useFirebase()
  const history = useHistory()
  if ( user )
    return <Route { ...props } />
  else
    return <Redirect to={ `/signin?redirectto=${ history.location.pathname }` } />
}
