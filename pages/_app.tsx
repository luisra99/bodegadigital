import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import PropTypes from 'prop-types'
import Meta from '@/components/meta'
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'

const App = ({ Component, pageProps }: AppProps) => {
	const { session } = pageProps
	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='system'
			disableTransitionOnChange
		>
			<SessionProvider session={session}>
				<Meta />
				<Component {...pageProps} />
			</SessionProvider>
		</ThemeProvider>
	)
}
App.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
}

export default App
