import { Badge, Card } from 'react-bootstrap'

import './AccountsRows.scss'
import Currency from '../../components/ui/Currency'
import AreaChart from '../../components/AreaChart'

export default function AccountsRows( {
  showNetWorth,
  accounts,
  // sortBy,
} ) {
  return (
    <div className="accounts-rows">
      { accounts.map( ( account ) => (
        <>
          <Card body className="card-account account-row" key={ account.nickname }>
            <span className="flex-item name-bank">
              { account.nickname }
              <span className="bank">{ account.bank }</span>
            </span>
            <span className="flex-item type">
              <Badge variant="light">{ account.type }</Badge>
            </span>
            <AreaChart className="flex-item" />
            <Currency className="flex-item" amount={ account['closing-balance'] } />
          </Card>
        </>
      ) ) }
      { showNetWorth && (
      <div className="total">
        <Currency
          amount={ accounts.reduce( ( total, account ) => total + account['closing-balance'], 0 ) }
        />
      </div>
      ) }
    </div>
  )
}
