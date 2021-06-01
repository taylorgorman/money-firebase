import Layout from '../../components/Layout'
import Section from '../../components/Section'

export default function Profile() {
  return (
    <Layout>
      <Section>
        <h1>Profile</h1>
        <ul>
          <li>Change profile photo, name, contact info</li>
          <li>Delete account</li>
        </ul>
      </Section>
    </Layout>
  )
}
