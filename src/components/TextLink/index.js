import React from 'react'
import './TextLink.css'

const nameSpace = 'gpi-text-link-component'
const extractClickProps = ({ location, href, onNewTab, history }) => {
  const clickProps = {}
  if (href) {
    clickProps.href = href
    clickProps.target = onNewTab ? '_blank' : undefined
  } else if (location) {
    clickProps.onClick = () => {
      history.push(location)
    }
  }
  return clickProps
}

const TextLink = ({
  disabled,
  children,
  location = null,
  href = null,
  onNewTab = true,
  history = null,
  ...props
}) => {
  return (
    <div
      className={`${nameSpace}__container${disabled ? '--disabled' : ''}`}
      {...props}
    >
      <a
        className={`${nameSpace}__anchor${disabled ? '--disabled' : ''}`}
        {...extractClickProps({ location, href, onNewTab, history })}
      >
        {children}
      </a>
      <div className={`${nameSpace}__underline`} />
    </div>
  )
}

export default TextLink
