import classnames from 'classnames'

import './styles.scss'

export default function Currency({ amount }) {
  const isNegative = amount < 0
  let number = isNegative ? amount * -1 : amount
  number = Number(number).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  const className = classnames({
    'currency': true,
    'is-negative': isNegative,
  })
  return (
    <span className={ className }>
      { isNegative && '(' }
      <span className="currency-symbol">$</span>
      <span className="amount">{ number }</span>
      { isNegative && ')' }
    </span>
  )
}
