import Competitors from '../../components/Competitors'
import Layout from '../../components/Layout'
import PageHeading from '../../components/PageHeading'
import Section from '../../components/Section'
import HeadingSubheading from '../../components/ui/HeadingSubheading'

export default function Home() {
  return (
    <Layout>
      <Section>
        <PageHeading subheading="Organize your money like fancy swine.">
          Sir Pigglesworth
        </PageHeading>
        <HeadingSubheading
          heading="Competitors"
          subheading="These people are cool. We're cooler."
        />
        <Competitors />
      </Section>
    </Layout>
  )  
}
