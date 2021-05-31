
export function dashed( string ) {

  // must be string
  if ( typeof string !== 'string' )
    return null
  
  let result = string
  // lowercase
  result = result.toLowerCase()
  // replace all whitespace with one dash
  result = result.split( ' ' ).filter( s => s )
  result = result.join( '-' )
  // remove characters not alphanumeric or dash
  result = result.replace( /[^a-z0-9-]/g, '' )

  // return
  return result

}
