import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './ui/GlobalStyles'
import { baseTheme } from './ui/themes/baseTheme'
import { darkTheme } from './ui/themes/darkTheme'

const themes = {
	light: baseTheme,
	dark: darkTheme,
}

function App() {
	return (
		<ThemeProvider theme={themes['dark']}>
			<GlobalStyles />
			<div>LET'S GO!</div>
		</ThemeProvider>
	)
}

export default App
