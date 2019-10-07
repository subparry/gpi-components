## GPI Slider component

A custom slider component with GPI brand styles

### Features:

- Option for one or two handles
- Display current value on handles
- Colored fill bar on slider track
- Addition of plus sign when handle reaches max value
- Handles do not block each other
- Width 100%

### Usage:

After importing and placing in the return of your functional component or the render method of your class component, you can provide the following props:

#### Required Props

- setValues - Type: **Function**
  > A function with one or two parameters. If the slider has one handle, it receives an unique argument with that value as an integer, if the slider is double, it receives two arguments with each handle value. Useful for setting state based on said values or performing operations...

#### Optional Props

- double - Type: **Boolean**, Default: `false`
  > If the slider has one or two handles (if true, slider with two handles)
- max - Type: **Integer** Default: `7`
  > The maximum value of the slider (currently it supports only values lesser than 10)
- min - Type: **Integer**, Default: `1`
  > The minimum value of the slider
- step - Type: **Integer**, Default: `1`
  > Amount of variation of the slider value by drag step

Currently it doesn't support values with two digits because of the available space in the handles, however it can be done anyway with a warning in the console. If you want to change the color of the value displayed in the handles, you can use the following css selector (".tracks-container span")

### Example of use:

The example below implements a double handled slider with values between 1 and 5 and a callback function that sets the current value as an array of two integers.

```javascript
const MyComponent = () => {
  // Use 'useState' hook to save slider values as state. If your slider has two handles, initial state must be equal to the min and max props passed to the Slider Component, if it has only one handle, initial state is equal to the middle number rounded down to the nearest integer.
  const [sliderValues, setSliderValues] = useState([1, 5])

  // Define the callback function we'll use to retrieve slider values
  const setValues = (first, second) => {
    // In this example we save the slider values as an array, but you can define your own implementation
    setSliderValues([first, second])
  }

  return (
    <>
      <h1>My slider</h1>
      <Slider double min={1} max={5} step={1} setValues={setValues} />
    </>
  )
}
```
