import { Badge, Card } from 'react-bootstrap'

import './AccountsRows.scss'
import Currency from '../../components/ui/Currency'
import AreaChart from '../../components/AreaChart'
import { useData } from '../../utilities/DataContext'

export default function AccountsRows( { showNetWorth } ) {
  const { retrieveData } = useData()
  const [accounts, loading, error] = retrieveData( 'accounts' )

  return (
    <>
      { loading && (
        <p>Loading accounts...</p>
      ) }
      { error && (
      <p>
        Error loading accounts:
        { ' ' }
        <code>{ JSON.stringify( error ) }</code>
      </p>
      ) }
      <div className="accounts-rows">
        { accounts.map( ( account ) => (
          <Card body className="card-account account-row" key={ account.name }>
            <span className="flex-item name-bank">
              { account.name }
              <span className="bank">{ account.bank }</span>
            </span>
            <span className="flex-item type">
              <Badge variant="light">{ account.type }</Badge>
            </span>
            <AreaChart className="flex-item" />
            <Currency className="flex-item" amount={ account.balance } />
          </Card>
        ) ) }
        { showNetWorth && (
        <div className="total">
          <Currency
            amount={ accounts.reduce( ( total, account ) => total + account.balance, 0 ) }
          />
        </div>
        ) }
      </div>
    </>
  )
}
