import {ReactNode, ReactElement} from 'react'
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import "../styles/globals.css";

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
	// pageProps: any;
}

function MyApp({Component, pageProps}: AppPropsWithLayout) {
	const getLayout = Component.getLayout || ((page) => page);

	return getLayout(<Component {...pageProps} />);
}

export default MyApp;
