import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import './Modal.css'

const noPropagation = e => {
  e.stopPropagation()
}

const toggleScroll = () => {
  document.body.classList.toggle('scroll-lock')
}

const Modal = ({
  HeaderComponent,
  FooterComponent,
  children,
  isOpen,
  closeModal,
  customHeight = '90vh',
  customWidth = '80vw',
  lockScroll,
}) => {
  useEffect(() => {
    isOpen &&
      document.querySelector('.modal-content').scrollTo({
        top: 0,
      })
    if (lockScroll && isOpen) {
      toggleScroll()
    }
    //eslint-disable-next-line
  }, [isOpen])

  const onModalClose = () => {
    lockScroll && toggleScroll()
    closeModal()
  }

  useEffect(() => {
    const listener = e => {
      if (e.keyCode === 27) {
        onModalClose()
      }
    }
    isOpen && document.addEventListener('keydown', listener)

    return () => document.removeEventListener('keydown', listener)
    //eslint-disable-next-line
  }, [isOpen])

  return (
    // Backdrop
    <div
      onClick={onModalClose}
      className={`gpi-modal__backdrop`}
      style={{
        transition: isOpen
          ? 'opacity 0.2s ease 0.2s'
          : 'opacity 0.2s ease 0.2s, z-index 0s linear 0.4s',
      }}
    >
      {
        //Modal
      }
      <div
        onClick={noPropagation}
        className={`${isOpen ? 'gpi-modal--opened' : 'gpi-modal--closed'}`}
        style={{ height: customHeight, width: customWidth }}
      >
        {HeaderComponent && (
          <div className="gpi-modal__header">
            <HeaderComponent />
            <hr className="gpi-modal__hr" />
          </div>
        )}
        <div className="modal-content gpi-modal__content">{children}</div>
        {FooterComponent && (
          <div className="gpi-modal__footer">
            <hr className="gpi-modal__hr" />
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
}

export default Modal
