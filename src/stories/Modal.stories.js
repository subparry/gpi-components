import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import Modal from '../components/Modal'

const longContent = ` When a dialog opens, focus placement depends on the nature and size of the
content. In all circumstances, focus moves to an element contained in the
dialog. Unless a condition where doing otherwise is advisable, focus is
initially set on the first focusable element. If content is large enough
that focusing the first interactive element could cause the beginning of
content to scroll out of view, it is advisable to add tabindex=-1 to a
static element at the top of the dialog, such as the dialog title or first
paragraph, and initially focus that element. If a dialog contains the
final step in a process that is not easily reversible, such as deleting
data or completing a financial transaction, it may be advisable to set
focus on the least destructive action, especially if undoing the action is
difficult or impossible. The Alert Dialog Pattern is often employed in
such circumstances. If a dialog is limited to interactions that either
provide additional information or continue processing, it may be advisable
to set focus to the element that is likely to be most frequently used,
such as an OK or Continue button. When a dialog closes, focus returns to
the element that invoked the dialog unless either: The invoking element no
longer exists. Then, focus is set on another element that provides logical
work flow. The work flow design includes the following conditions that can
occasionally make focusing a different element a more logical choice: It
is very unlikely users need to immediately re-invoke the dialog. The task
completed in the dialog is directly related to a subsequent step in the
work flow. For example, a grid has an associated toolbar with a button for
adding rows. the Add Rows button opens a dialog that prompts for the
number of rows. After the dialog closes, focus is placed in the first cell
of the first new row. It is strongly recommended that the tab sequence of
all dialogs include a visible element with role button that closes the
dialog, such as a close icon or cancel button. WAI-ARIA Roles, States, and
Properties The element that serves as the dialog container has a role of
dialog. All elements required to operate the dialog are descendants of the
element that has role dialog. The dialog container element has aria-modal
set to true. The dialog has either: A value set for the aria-labelledby
property that refers to a visible dialog title. A label specified by
aria-label. Optionally, the aria-describedby property is set on the
element with the dialog role to indicate which element or elements in the
dialog con`
const extraLongContent = longContent + longContent + longContent + longContent
const WrappedModal = ({ backContent, children, ...props }) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      <div id="modal-root"></div>
      <button onClick={() => setIsOpen(true)}>Open modal</button>
      {backContent}
      <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)} {...props}>
        {children}
      </Modal>
    </>
  )
}

storiesOf('Modal', module)
  .add('Opened and without children', () => (
    <WrappedModal isOpen={true} closeModal={action('closed modal!')} />
  ))
  .add('With header component and no children', () => (
    <WrappedModal
      closeModal={action('closed modal!')}
      HeaderComponent={() => <h1>Header!</h1>}
    />
  ))
  .add('With header, footer and no children', () => (
    <WrappedModal
      closeModal={action('closed modal!')}
      HeaderComponent={() => <h1>Header!</h1>}
      FooterComponent={() => <h1>Footer!</h1>}
    />
  ))
  .add('With header, footer and children', () => (
    <WrappedModal
      closeModal={action('closed modal!')}
      HeaderComponent={() => <h1>Header!</h1>}
      FooterComponent={() => <h1>Footer!</h1>}
    >
      Hello, this is the content
    </WrappedModal>
  ))
  .add('With header, footer and overflowing children', () => (
    <WrappedModal
      closeModal={action('closed modal!')}
      HeaderComponent={() => <h1>Header!</h1>}
      FooterComponent={() => <h1>Footer!</h1>}
    >
      {longContent}
    </WrappedModal>
  ))
  .add('With custom height and width', () => (
    <WrappedModal
      closeModal={action('closed modal!')}
      customHeight="25vh"
      customWidth="30vw"
    >
      Hello, this is the content
    </WrappedModal>
  ))
  .add('With custom height and width and overflowing content', () => (
    <WrappedModal
      closeModal={action('closed modal!')}
      customHeight="25vh"
      customWidth="30vw"
    >
      {longContent}
    </WrappedModal>
  ))
  .add('closeable modal', () => <WrappedModal />)
  .add('closeable modal with Header', () => (
    <WrappedModal
      HeaderComponent={() => <h2 style={{ margin: 0 }}>Header</h2>}
    />
  ))
  .add('With height auto', () => (
    <WrappedModal
      closeModal={action('closed modal!')}
      customHeight="auto"
      customWidth="30vw"
      overlayScroll
      lockScroll={false}
    >
      {longContent}
    </WrappedModal>
  ))
  .add('With height auto and long back content', () => (
    <WrappedModal
      HeaderComponent={() => <h2>Header</h2>}
      customHeight="auto"
      customWidth="350px"
      backContent={extraLongContent}
      overlayScroll
      lockScroll={false}
    >
      {longContent}
    </WrappedModal>
  ))

  .add('Without scroll lock', () => (
    <WrappedModal
      HeaderComponent={() => <h2>Header</h2>}
      backContent={extraLongContent}
      lockScroll={false}
    >
      {longContent}
    </WrappedModal>
  ))
  .add('With scroll lock', () => (
    <WrappedModal
      HeaderComponent={() => <h2>Header</h2>}
      backContent={extraLongContent}
    >
      {longContent}
    </WrappedModal>
  ))
