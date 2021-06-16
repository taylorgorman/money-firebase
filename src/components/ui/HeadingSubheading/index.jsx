import './index.scss'

export default function HeadingSubheading( {
  heading,
  subheading,
  Tag = 'h2',
} ) {
  return (
    <div className="heading-subheading">
      <Tag className="heading">{ heading }</Tag>
      { subheading && (
        <p className="subheading"><em>{ subheading }</em></p>
      ) }
    </div>
  )
}
