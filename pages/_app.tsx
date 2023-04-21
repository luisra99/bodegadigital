import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import PropTypes from 'prop-types'
import { CacheProvider } from '@emotion/react'

import createEmotionCache from './createEmotionCache'

import Meta from '@/components/meta'
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'

const clientSideEmotionCache = createEmotionCache()

const App = ({ Component, pageProps }: AppProps) => {
	const emotionCache = clientSideEmotionCache
	const { session } = pageProps
	return (
		<CacheProvider value={emotionCache}>
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
		</CacheProvider>
	)
}
App.propTypes = {
	Component: PropTypes.elementType.isRequired,
	emotionCache: PropTypes.object,
	pageProps: PropTypes.object.isRequired,
}

export default App
