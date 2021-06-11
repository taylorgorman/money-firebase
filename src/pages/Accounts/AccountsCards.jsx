import { Badge, Card, Col, Row } from 'react-bootstrap'

import './AccountsCards.scss'
import data from './data.json'
import Currency from '../../components/Currency'
import AreaChart from '../../components/AreaChart'

export default function AccountsCards({ showNetWorth }) {
  return (
    <div className="accounts-cards">
      <Row className="row">
        { data.map(( account, key ) => (
          <Col md={ 6 } xl={ 4 } key={ key }>
            <Card body className="card-account account-card">
              <div>
                <Badge className="type" variant="light">{ account.type }</Badge>
              </div>
              <div className="name">{ account.name }</div>
              <div className="bank">{ account.bank }</div>
              <AreaChart />
              <div>
                <Currency className="balance" amount={ account.balance } />
              </div>
            </Card>
          </Col>
        )) }
      </Row>
      { showNetWorth && (
        <div className="total">
          <Currency amount={ data.reduce( ( total, account ) => total + account.balance, 0 ) } />
        </div>
      ) }
    </div>
  )
}
