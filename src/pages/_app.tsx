import type { AppProps } from 'next/app';
import GlobalStyle from '../components/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<GlobalStyle>
			<Component {...pageProps} />
		</GlobalStyle>
	);
}
export default MyApp;
