import { useState, useEffect } from 'react'
// Material ui setup
import { darkTheme, lightTheme } from '../components/muiTheme/theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles'
import { jssPreset, StylesProvider } from '@material-ui/core/styles'
import { create } from 'jss'

// Components
import NavBar from './../components/NavBar/NavBar'

const jss = create({
	plugins: [...jssPreset().plugins],
	insertionPoint: 'mui-inject-first',
})

const Providers = ({ darkMode, children }) => {
	return (
		<StylesProvider jss={jss}>
			<MuiThemeProvider theme={darkMode ? darkTheme : lightTheme}>
				<SCThemeProvider theme={lightTheme}>
					<CssBaseline />
					{children}
				</SCThemeProvider>
			</MuiThemeProvider>
		</StylesProvider>
	)
}

export const MyApp = ({ Component, pageProps }) => {
	useEffect(() => {
		const jssStyles = document.querySelector('#jss-server-side')
		if (jssStyles) {
			jssStyles.parentNode.removeChild(jssStyles)
		}
	})
	const [darkMode, setDarkMode] = useState(false)

	return (
		<Providers darkMode={darkMode}>
			<NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
			<Component darkMode={darkMode} {...pageProps} />
		</Providers>
	)
}

export default MyApp
