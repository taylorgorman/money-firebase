import { Spinner } from "react-bootstrap"
import { Redirect, Route } from "react-router"

import { useFirebase } from "./FirebaseContext"

export default function PrivateRoute( props ) {
  const { user, userLoading } = useFirebase()
  if ( userLoading )
    return <div className="center-center"><Spinner animation="border" /></div>
  if ( user )
    return <Route { ...props } />
  else
    return <Redirect to="/signin" />
}
