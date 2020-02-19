import React from 'react'
import './ArrowLink.css'

const nameSpace = 'gpi-arrow-link'

const extractClickProps = ({ location, href, onNewTab, history, disabled }) => {
  const clickProps = {}
  if (disabled) return clickProps
  if (href && typeof window !== 'undefined') {
    clickProps.onClick = () => {
      onNewTab ? window.open(href) : (window.history.href = href)
    }
  } else if (location) {
    clickProps.onClick = () => {
      history.push(location)
    }
  }
  return clickProps
}

const ArrowLink = ({
  children,
  disabled,
  location = null,
  href = null,
  onNewTab = true,
  history = null,
  ...props
}) => {
  return (
    <div
      className={`${nameSpace}__container${disabled ? '--disabled' : ''}`}
      {...extractClickProps({ location, href, onNewTab, history, disabled })}
      {...props}
    >
      {children}
      <svg
        id="Capa_1"
        data-name="Capa 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          className="gpi-dropdown__chevron"
          d="M10.49,15.8a2.47,2.47,0,0,0,1.27-.66l6.82-6.8a2.46,2.46,0,0,0-3.47-3.48L10,10,4.86,4.86a2.44,2.44,0,0,0-3.45,0A2.4,2.4,0,0,0,.7,6.6a2.45,2.45,0,0,0,.71,1.74l6.83,6.8a2,2,0,0,0,.85.53A2.24,2.24,0,0,0,10.49,15.8Z"
        />
      </svg>
    </div>
  )
}

export default ArrowLink
