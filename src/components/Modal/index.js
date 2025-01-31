import React, { useEffect, useState, useRef } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './Modal.css'
import redx from './20x20_X.svg'

const modalDiv = document.createElement('div')

const noPropagation = e => {
  e.stopPropagation()
}

const toggleScroll = () => {
  document.body.classList.toggle('gpi-modal--scroll-lock')
}
const enableScroll = () => {
  document.body.classList.remove('gpi-modal--scroll-lock')
}

const Modal = ({
  HeaderComponent,
  FooterComponent,
  children,
  isOpen,
  className = '',
  closeModal,
  customHeight,
  customWidth,
  maxHeight,
  maxWidth,
  lockScroll = true,
  heightFix = true,
  overlayScroll = false,
  hideX = false,
}) => {
  const [shouldRender, setShouldRender] = useState(false)
  const modalBody = useRef(null)
  const modalRoot = document.getElementById('modal-root')

  useEffect(() => {
    if (isOpen && !shouldRender) {
      setShouldRender(true)
    }
  })

  useEffect(() => {
    if (shouldRender) {
      modalRoot.appendChild(modalDiv)
    }
    return () => {
      if (shouldRender) {
        modalRoot.removeChild(modalDiv)
      }
    }
  }, [shouldRender])

  const onModalClose = () => {
    closeModal() // Sets isOpen to false
    lockScroll && enableScroll()
  }

  useEffect(() => {
    if (shouldRender && modalBody) {
      modalBody.current.scrollTo({
        top: 0,
      })
    }
    if (lockScroll && isOpen) {
      toggleScroll()
    }
    return enableScroll

    //eslint-disable-next-line
  }, [isOpen])

  useEffect(() => {
    const listener = e => {
      if (e.key === 'Escape') {
        onModalClose()
      }
    }
    shouldRender && document.addEventListener('keydown', listener)

    return () => document.removeEventListener('keydown', listener)
    //eslint-disable-next-line
  }, [shouldRender])

  const overlayScrollStyle = overlayScroll
    ? {
        position: `absolute`,
        marginTop: `50px`,
        top: `100%`,
      }
    : {}

  return (
    shouldRender &&
    ReactDOM.createPortal(
      <div className="gpi-modal__main-container">
        {
          // Overlay
        }

        <div
          onClick={onModalClose}
          className={`gpi-modal__overlay${isOpen ? `--opened` : `--closed`}`}
        ></div>
        {
          //Modal
        }
        <div
          onTransitionEnd={() => {
            if (!isOpen && shouldRender) {
              setShouldRender(false)
            }
          }}
          onClick={noPropagation}
          className={`gpi-modal${
            isOpen ? '--opened' : '--closed'
          } ${className}`}
          style={{
            height: customHeight ? customHeight : '',
            width: customWidth ? customWidth : '',
            maxHeight: maxHeight ? maxHeight : '',
            maxWidth: maxWidth ? maxWidth : '',
            paddingTop: heightFix ? `40px` : ``,
            ...overlayScrollStyle,
          }}
        >
          {!hideX && (
            <button className={`gpi-modal__closex`} onClick={onModalClose}>
              <img src={redx} />
            </button>
          )}

          {HeaderComponent && (
            <div className="gpi-modal__header">
              <HeaderComponent />
            </div>
          )}
          <div className="gpi-modal__content" ref={modalBody}>
            {children}
          </div>
          {FooterComponent && (
            <div className="gpi-modal__footer">
              <FooterComponent />
            </div>
          )}
        </div>
      </div>,
      modalDiv
    )
  )
}

Modal.propTypes = {
  HeaderComponent: PropTypes.func,
  FooterComponent: PropTypes.func,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired, //Function that closes the modal (changes the isOpen state)
  customHeight: PropTypes.string, //If height auto, add overlayScroll=true and lockScroll=false
  customWidth: PropTypes.string,
  lockScroll: PropTypes.bool, //Block the scrolling of the background content while the modal is open
  heightFix: PropTypes.bool, //Adds 40px of padding to the body of the modal in case the heading content reaches the red close X
  overlayScroll: PropTypes.bool, //Changes display of the modal to absolute so it can scroll with the body
}

export default Modal
