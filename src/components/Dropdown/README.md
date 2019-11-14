## GPI Dropdown component

### Features

- Tabable and keyboard friendly
- Will close on blur

### Usage

This dropdown is purely presentational and is not customizable. It shows a list of buttons (for accessibility) which will set the value passed down via callback. It is your responsability to handle the status change.
Dropdown accepts the following props:

#### Required props:

- id - Type: **String**
  > A unique string used to set the buttons' dropdown `key`.
- options - Type: **Map**
  > A `Map` instance with the following structure:
  ```
  	const options = new Map([
  		[value, {label: 'label', disabled: true}],
  )
  ```
  where: - value - Type: **Any** > The value associated to the option. This will be the same value used to set the state in the parent component via `setValue` callback, so make sure the data type used here is the same as the one you're sending to the backend. - label - Type: **String** > The option's label that will be shown on the buttons. - disabled - Type: **Boolean**, default: **false** > Pass `disabed: true` to explicitly disable an option, otherwise all options will be available. Useful for having a placeholder option that is not selectable once you change the value.
- setValue - Type: **Function** > A callback function to set current selected value.
- Value - Type: **Any** > The current selected value. The dropdown's main button will show the associated label.

#### Optional props:

- onClose - Type: **Function** > A callback function to execute **before** dropdown closes
- onOpen - Type: **Function** > A callback function to execute **before** dropdown opens
- position - Type: **String**, default: **BOTTOM_LEFT** > A string containing the current alignement of the dropdown's drop component. Options available are: - TOP_LEFT - TOP_RIGHT - BOTTOM_LEFT - BOTTOM_RIGHT

### Usage example:

Import:

```javascript
import Dropdown from 'goplaceit-component-library/lib/Dropdown'
```

Use:

```javascript
const options = new Map([
	['none', {label: 'Select an option' disabled: true}],
	[1, {label: 'Option 1'}],
	[15, {label: 'Option 2'}]
])

const ParentComponent = () => {
	// The 'none' entry will be used as default value
	const [dropValue, setDropValue] = useState('none')
	return (
		<div>
			// other components
			<Dropdown
				id='parentComponentDropdown'
				options={options}
				position='TOP_LEFT'
				setValue={setDropValue}
				value={dropValue}
			/>
		</div>
	)
}
```
