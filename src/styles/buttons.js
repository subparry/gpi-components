const getButtonsWithTheme = ({
  red,
  darkRed,
  lightRed,
  white,
  black,
  gray,
}) => ({
  primary: {
    base: {
      bg: red,
      border: `1px solid ${red}`,
      color: white,
    },
    focus: {
      bg: darkRed,
      border: `1px solid ${darkRed}`,
      color: white,
    },
    hover: {
      bg: darkRed,
      border: `1px solid ${darkRed}`,
      color: white,
    },
    disabled: {
      bg: lightRed,
      border: `1px solid ${lightRed}`,
      color: white,
    },
  },
  secondary: {
    base: {
      bg: white,
      border: `1px solid ${gray}`,
      color: black,
    },
    hover: {
      bg: 'rgba(0, 0, 0, 0.08)',
      border: `1px solid ${gray}`,
      color: black,
    },
    focus: {
      bg: white,
      border: `1px solid ${darkRed}`,
      color: darkRed,
    },
    disabled: {
      bg: white,
      border: `1px solid ${lightRed}`,
      color: lightRed,
    },
  },
})

export default getButtonsWithTheme
