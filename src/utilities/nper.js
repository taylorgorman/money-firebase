export default function nper( ir, pmt, pv, fv ) {
  const irNew = ( ir !== 0 ) ? ir / 100 : ir
  const nbperiods = Math.log( ( - fv * irNew + pmt ) / ( pmt + irNew * pv ) )
    / Math.log( 1 + irNew )
  return nbperiods
}
