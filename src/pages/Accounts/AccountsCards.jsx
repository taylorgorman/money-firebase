import {
  Badge, Card, Col, Row,
} from 'react-bootstrap'

import './AccountsCards.scss'
import Currency from '../../components/ui/Currency'
import AreaChart from '../../components/AreaChart'

export default function AccountsCards( {
  showNetWorth,
  accounts,
  // sortBy,
} ) {
  return (
    <div className="accounts-cards">
      <Row className="row">
        { accounts.map( ( account ) => (
          <Col md={ 6 } xl={ 4 } key={ account.name }>
            <Card body className="card-account account-card">
              <div>
                <Badge className="type" variant="light">{ account.type }</Badge>
              </div>
              <div className="name">{ account.nickname }</div>
              <div className="bank">{ account.bank }</div>
              <AreaChart />
              <div>
                <Currency className="balance" amount={ account.balance } />
              </div>
            </Card>
          </Col>
        ) ) }
      </Row>
      { showNetWorth && (
        <div className="total">
          <Currency
            amount={ accounts.reduce( ( total, account ) => total + account.balance, 0 ) }
          />
        </div>
      ) }
    </div>
  )
}
