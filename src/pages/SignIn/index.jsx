import Layout from '../../components/Layout'
import Section from '../../components/Section'
import { SignInWithGoogleButton, SignInWithFacebookButton, SignInWithTwitterButton } from '../../components/AuthButtons'

import './styles.scss'

export default function SignIn() {
  return (
    <Layout>
      <Section className="sign-in">
        <h1>Sign in</h1>
        <p>
          <SignInWithGoogleButton />
          <SignInWithFacebookButton />
          <SignInWithTwitterButton />
        </p>
      </Section>
    </Layout>
  )
}
