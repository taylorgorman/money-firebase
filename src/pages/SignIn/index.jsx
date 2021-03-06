import { Card } from 'react-bootstrap'

import './styles.scss'
import Layout from '../../components/Layout'
import Section from '../../components/ui/Section'
import { SignInWithGoogleButton, SignInWithFacebookButton, SignInWithTwitterButton } from '../../components/AuthButtons'

export default function SignIn() {
  return (
    <Layout>
      <Section className="sign-in">
        <Card body>
          <h1>Sign in</h1>
          <p>
            <SignInWithGoogleButton />
            <SignInWithFacebookButton />
            <SignInWithTwitterButton />
          </p>
        </Card>
      </Section>
    </Layout>
  )
}
