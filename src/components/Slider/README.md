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

- min (default = 1)
  > Integer: The minimum value of the slider
- max (default = 7)
  > Integer: The maximum value of the slider (currently it supports only values lesser than 10)
- step (default = 1)
  > Integer: Amount of variation of the slider value by drag step
- double (default = false)
  > Boolean: If the slider has one or two handles (if true, slider with two handles)
- setValues (**REQUIRED**)
  > Function: A function with one or two parameters. If the slider has one handle, it receives an unique argument with that value as an integer, if the slider is double, it receives two arguments with each handle value. Useful for setting state based on said values or performing operations...

Currently it doesn't support values with two digits because of the available space in the handles, however it can be done anyway with a warning in the console. If you want to change the color of the value displayed in the handles, you can use the following css selector (".tracks-container span")
