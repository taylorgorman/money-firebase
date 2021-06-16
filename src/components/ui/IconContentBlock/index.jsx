import './index.scss'

export default function IconContentBlock( { Icon, children } ) {
  return (
    <div className="icon-content-block">
      <p><Icon /></p>
      { children }
    </div>
  )
}
