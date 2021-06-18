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
              <h3 className="h5 name">{ account.nickname }</h3>
              <div className="bank">{ account.bank }</div>
              <div className="description">{ account.description }</div>
              <AreaChart />
              <div className="d-flex align-items-center justify-content-between">
                <Badge className="type" variant="light">{ account.type }</Badge>
                <Currency className="balance" amount={ account['closing-balance'] } />
              </div>
            </Card>
          </Col>
        ) ) }
      </Row>
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
