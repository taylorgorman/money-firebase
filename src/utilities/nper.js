
export default function nper( ir, pmt, pv, fv ) {

  var nbperiods;

  if (ir !== 0)
    ir = ir / 100;

  nbperiods = Math.log((-fv * ir + pmt)/(pmt + ir * pv))/ Math.log(1 + ir)

  return nbperiods;

}
