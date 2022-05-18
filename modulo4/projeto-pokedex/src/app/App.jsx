import React from 'react'

import { Router } from '../Routes/routes'
import { GlobalStyle } from '../GlobalStyle'
import GlobalState from '../Global/GlobalState'

const App = () => {
  return (
    <GlobalState>
      <GlobalStyle />
      <Router />
    </GlobalState>
  )
}

export default App 

