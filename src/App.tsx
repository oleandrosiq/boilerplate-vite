// External Libraries
import React from 'react'
import { ThemeProvider } from 'styled-components'

// Styles
import { GlobalStyles } from './styles/GlobalStyle'
import { defaultTheme } from './styles/themes/default'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Boilerplate Vite</h1>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
