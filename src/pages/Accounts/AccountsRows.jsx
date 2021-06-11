import data from './data.json'
import Currency from '../../components/Currency'
import { Badge, Card } from 'react-bootstrap'

import './AccountsRows.scss'

export default function AccountsRows({ showNetWorth }) {
  return (
    <div className="accounts-rows">
      { data.map(( account, key ) => (
        <Card body className="account-row" key={ key }>
          <span className="flex-item name-bank">
            { account.name }
            <span className="bank">{ account.bank }</span>
          </span>
          <span className="flex-item type">
            <Badge variant="light">{ account.type }</Badge>
          </span>
          <Currency className="flex-item" amount={ account.balance } />
        </Card>
      )) }
      { showNetWorth && (
        <div className="total">
          <Currency amount={ data.reduce( ( total, account ) => total + account.balance, 0 ) } />
        </div>
      ) }
    </div>
  )
}
