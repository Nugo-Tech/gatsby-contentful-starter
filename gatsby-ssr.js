import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles'
import store from './src/state/store'
import theme from './src/theme'
import './src/styles/global.scss'

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {element}
      </ThemeProvider>
    </Provider>
  )
}
