import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import './styles.scss'
import Layout from '../../components/Layout'
import Section from '../../components/Section'
import { Route, Switch } from 'react-router'
import Access from './Access'

export default function Settings() {
  return (
    <Layout page="settings">
    <Section>

      <h1>Settings</h1>
      
      <Row>
      <Col md={3}>
        <ListGroup>
          { [
            {
              link: '/settings/access',
              children: 'Access',
            },
            {
              link: '/settings/another',
              children: 'Another',
            },
            {
              link: '/settings/heres-a-page',
              children: 'Here\'s a page',
            },
          ].map(( item ) => (
            <LinkContainer to={ item.link }>
              <ListGroup.Item action>{ item.children }</ListGroup.Item>
            </LinkContainer>
          )) }
        </ListGroup>
      </Col>
      <Col className="p-0">
      <Container>
        <Switch>
          <Route path="/settings/access" component={ Access } />
        </Switch>
      </Container>
      </Col>
      </Row>
    </Section>
    </Layout>
  )
}
