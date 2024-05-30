import "../styles/globals.css";
import "../styles/main.css";
import Analytics from '../components/Analytics';
import Head from "next/head";
import { Provider } from 'react-redux';
import store from '../dashboard/state/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <>
        <Head>
          <link rel="icon" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        </Head>
        <Analytics />
        <Component {...pageProps} />
      </>
    </Provider>
  );
}

export default MyApp;
