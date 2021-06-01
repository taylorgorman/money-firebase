import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import './styles.scss'
import Layout from '../../components/Layout'
import Section from '../../components/Section'
import { Redirect, Route, Switch } from 'react-router'
import Access from './Access'
import Categories from './Categories'
import Labels from './Labels'

export default function Settings() {
  const subpages = [
    {
      path: '/access',
      title: 'Access',
      component: Access,
    },
    {
      path: '/categories',
      title: 'Categories',
      component: Categories,
    },
    {
      path: '/labels',
      title: 'Labels',
      component: Labels,
    },
  ]
  return (
    <Layout page="settings">
    <Section>

      <h1>Settings</h1>
      
      <Row>
      <Col md={3}>
        <ListGroup>
          { subpages.map(( subpage ) => (
            <LinkContainer to={ `/settings${ subpage.path }` }>
              <ListGroup.Item action>{ subpage.title }</ListGroup.Item>
            </LinkContainer>
          )) }
        </ListGroup>
      </Col>
      <Col className="p-0">
      <Container>
        <Switch>
          <Redirect exact path="/settings" to={ `/settings${ subpages[0].path }` } />
          { subpages.map(( subpage ) => (
            <Route path={ `/settings${ subpage.path }` } component={ subpage.component } />
          )) }
        </Switch>
      </Container>
      </Col>
      </Row>
    </Section>
    </Layout>
  )
}
