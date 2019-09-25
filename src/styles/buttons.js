const getButtonsWithTheme = ({ red, darkRed, lightRed, white, black }) => ({
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
      border: `1px solid rgba(0, 0, 0, 0.08);`,
      color: black,
    },
    hover: {
      bg: 'rgba(0, 0, 0, 0.08)',
      border: `1px solid rgba(0, 0, 0, 0.08);`,
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

const initialState = {
  data: null,
  isLoading: false,
  isRejected: false,
  isFullfilled: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_STATUS':
      return {
        ...initialState,
        data: state.data,
        [action.payload]: true,
      }
    case 'SET_DATA':
      return {
        ...initialStatus,
        isFullfilled: true,
        data: action.payload.data,
      }
    default:
      return initialState
  }
}

const useFetch = ({ endpoint, config = {} }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const run = () => dispatch({ type: 'UPDATE_STATUS', payload: 'isLoading' })
  fetch(endpoint, config)
    .then(res => {
      if (!res.ok) {
        throw new Error('Request error')
      }
      return res.json()
    })
    .then(data => {
      dispatch({ type: 'SET_DATA', payload: { data } })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: 'UPDATE_STATUS', payload: 'isRejected' })
    })

  return { ...state, run }
}

export default getButtonsWithTheme
