import { Container } from 'react-bootstrap'

export default function Section( { children, ...props } ) {
  return (
    <section { ...props }>
      <Container>
        { children }
      </Container>
    </section>
  )
}
