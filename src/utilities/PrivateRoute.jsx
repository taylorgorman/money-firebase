import { Redirect, Route } from "react-router"

import { useFirebase } from "./FirebaseContext"

export default function PrivateRoute( props ) {
  const { user } = useFirebase()
  if ( user )
    return <Route { ...props } />
  else
    return <Redirect to="/signin" />
}
