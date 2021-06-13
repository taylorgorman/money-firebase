export default function nper( ir, pmt, pv, fv ) {
  let nbperiods

  if ( ir !== 0 ) ir /= 100

  nbperiods = Math.log( ( - fv * ir + pmt ) / ( pmt + ir * pv ) ) / Math.log( 1 + ir )

  return nbperiods
}
