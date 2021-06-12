import './index.scss'

export default function HeadingSubheading({
  heading,
  subheading,
  Tag='h2'
}) {
  return (
    <div className="heading-subheading">
      <Tag>{ heading }</Tag>
      <p className="subheading"><em>{ subheading }</em></p>
    </div>
  )
}
