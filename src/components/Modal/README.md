## GPI Modal component

### Features:

- Scroll lock when open (Optional)
- Fade in and out transitions
- Uses Portals to attach itself at DOM's root level
- Attaches and detaches itself from the DOM depending on its isOpen state
- Can receive custom width and height through props
- Scrollable modal body or scroll with background content
- Closeable by pressing "Escape" key, clicking outside the modal, clicking the red cross on top right corner or passing a custom button as child
- Render Optional Header and Footer components as props

### Usage:

**IMPORTANT**: The Modal Component attaches itself at root level in the DOM using a ReactDOM portal. To that end, you **must** create a div with `id='modal-root'` at the top level of your HTML file. This will be the node where the modal attaches itself.

Modal receives the following props:

#### Required Props:

- closeModal - Type: **Function**
  > A callback function to be executed when the user executes any of the aforementioned closing actions (clicking outisde modal, clicking red cross or pressing Escape key). In its most simple form it only sets isOpen to false (this is required to effectively close the modal), but you can add as many operations as you want.
- isOpen - Type: **Boolean**
  > A boolean value indicating if the modal is open. Note that when this value is false, the modal is not only hidden but also removed from the DOM.

#### Optional Props:

- className - Type: **String**, Default: `''`
  > String attached to the modal itself (not the wrapper nor the overlay) in order to extend its styles.
- customHeight - Type: **String**
  > String representing any valid CSS height value (e.g. "50vh", "100px", "10rem").
- customWidth - Type: **String**
  > String representing any valid CSS width value.
- FooterComponent - Type: **React Component**
  > React component to be rendered in the Footer section of the modal. This will not be affected by the overflow-y scroll property of the modal body.
- HeaderComponent - Type: **React Component**
  > React component to be rendered in the Header section of the modal. This will not be affected by the overflow-y scroll property of the modal body.
- heightFix - Type: **Boolean**, Default: `true`
  > If true, sets a small amount of padding-top on the modal box so that the content does not overlap with the red X at the top right corner.
- lockScroll - Type: **Boolean**, Default: `true`
  > Enables background content scroll lock behaviour
- overlayScroll - Type: **Boolean**, Default: `false`
  > Enables scrolling for modals with more than 100% height (e.g. long content with `customWidth = 'auto'`)

### Example of use:

This example renders a modal when the button is clicked. Note how the modals' open state is managed via props (isOpen)

```html
<!-- index.html -->

<!-- rest of html document -->
<html>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <div id="modal-root"></div>
  </body>
</html>
```

```javascript
// MyComponent.js

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <h1>My component with modal</h1>
      <button onClick={openModal}>Open modal</button>

      <Modal closeModal={closeModal} isOpen={isOpen}>
        This is the content of my modal
      </Modal>
    </div>
  )
}
```
