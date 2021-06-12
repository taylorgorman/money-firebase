import Competitors from '../../components/Competitors'
import Layout from '../../components/Layout'
import PageHeading from '../../components/PageHeading'
import Section from '../../components/Section'

export default function Home() {
  return (
    <Layout>
      <Section>
        <PageHeading>Sir Pigglesworth</PageHeading>
        <p className="mt-0"><em>Organize your money like fancy swine.</em></p>
        <h2>Competitors</h2>
        <Competitors />
      </Section>
    </Layout>
  )  
}
