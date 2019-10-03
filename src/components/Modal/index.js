import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import './Modal.css'
import redx from './20x20_X.svg'

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
  closeModal,
  customHeight = '80vh',
  customWidth = '80vw',
  lockScroll = false,
  heightFix = true,
  overlayScroll = false,
}) => {
  useEffect(() => {
    isOpen &&
      document.querySelector('.gpi-modal__content').scrollTo({
        top: 0,
      })
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
    isOpen && document.addEventListener('keydown', listener)

    return () => document.removeEventListener('keydown', listener)
    //eslint-disable-next-line
  }, [isOpen])

  const onModalClose = () => {
    lockScroll && toggleScroll()
    closeModal()
  }

  const overlayScrollStyle = overlayScroll
    ? {
        position: `absolute`,
        marginTop: `50px`,
        top: `100%`,
      }
    : {}

  return (
    <div
      className={`gpi-modal__main-container${isOpen ? `--opened` : `--closed`}`}
    >
      {
        // Overlay
      }

      <div
        onClick={onModalClose}
        className={`gpi-modal__overlay${isOpen ? `--opened` : `--closed`}`}
        style={{
          transition: isOpen
            ? 'opacity 0.3s ease 0.1s'
            : 'opacity 0.3s ease 0.1s, z-index 0s linear 0.2s',
        }}
      ></div>
      {
        //Modal
      }
      <div
        onClick={noPropagation}
        className={`gpi-modal${isOpen ? '--opened' : '--closed'}`}
        style={{
          height: customHeight,
          width: customWidth,
          paddingTop: heightFix ? `40px` : ``,
          ...overlayScrollStyle,
        }}
      >
        <button className={`gpi-modal__closex`} onClick={onModalClose}>
          <img src={redx} />
        </button>

        {HeaderComponent && (
          <div className="gpi-modal__header">
            <HeaderComponent />
          </div>
        )}
        <div className="gpi-modal__content">{children}</div>
        {FooterComponent && (
          <div className="gpi-modal__footer">
            <FooterComponent />
          </div>
        )}
      </div>
    </div>
  )
}

Modal.propTypes = {
  HeaderComponent: PropTypes.func,
  FooterComponent: PropTypes.func,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  customHeight: PropTypes.string,
  customWidth: PropTypes.string,
  lockScroll: PropTypes.bool,
  heightFix: PropTypes.bool,
}

export default Modal
