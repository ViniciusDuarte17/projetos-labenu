import React from 'react'

import { Router } from '../Routes/routes'
import { GlobalStyle } from '../GlobalStyle'
import { ThemeProvider } from '@mui/material/styles'
import theme from "../constants/theme"
import GlobalState from '../Global/GlobalState'

const App = () => {
  return (
    <>
      <GlobalState>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
        <Router />
        </ThemeProvider>
      </GlobalState>
    </>
  )
}

export default App