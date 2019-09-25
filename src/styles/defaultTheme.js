import getButtonsWithTheme from './buttons'

const colors = {
  white: '#f8f8f9',
  red: '#dd0500',
  darkRed: '#c40000',
  lightRed: 'rgba(221, 5, 0, 0.5)',
  black: '#444242',
  gray: 'rgba(0, 0, 0, 0.08)',
}

const fonts = {
  main: {
    family: "'Poppins', sans-serif",
    size: '15px',
  },
}

export default {
  buttons: getButtonsWithTheme(colors),
  colors,
  fonts,
}
