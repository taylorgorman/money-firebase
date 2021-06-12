
export default function HeadingSubheading({
  heading,
  subheading,
  Tag='h2'
}) {
  return (
    <div className="d-flex align-items-baseline">
      <Tag>{ heading }</Tag>
      <p className="subheading m-0 ml-2"><em>{ subheading }</em></p>
    </div>
  )
}
