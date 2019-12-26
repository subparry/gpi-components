## GPI Checkbox component

### Features:

- Brand styles

### Usage:

Use it just like a controlled `input[type=checkbox]` element. Checked status is managed via `checked` prop.

Checkbox forwards all props to the input element and receives the following props:

#### Required Props:

- id - Type: **Boolean**
  > Standard HTML id attribute for checkbox input. It **is required** for the correct functioning of the component

#### Optional Props:

- checked - Type: **Boolean**, Default: `false`
  > If checkbox is checked.
  > Required for controlling the input via state. **It is recommended** to pass an additional `onChange` prop to enable user interaction.
- disabled - Type: **Boolean**, Default: `false`
  > If checkbox is disabled.

### Example of use:

Import:

```javascript
import Checkbox from 'goplaceit-component-library/lib/Checkbox'
```

Usage:

```javascript
// MyComponent.js
import React, { useState } from 'react'

// Initial checkbox state. In this case, it will render unchecked
const MyComponent = () => {
  const [isChecked, setIsChecked] = useState(false)

  // Function in charge of enabling standard checbox behavior by changing isChecked state to its boolean opposite when user clicks (and triggers change event) on Checkbox.
  const handleChange = () => {
    setIsChecked(previousState => !previousState)
  }

  return <Checkbox checked={isChecked} onChange={handleChange} />
}
```
