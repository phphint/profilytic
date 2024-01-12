// pages/_app.js or pages/_app.tsx
import "../styles/globals.css"; // Adjust the path to the actual location of your globals.css
import "../styles/main.css"; // Adjust the path to the actual location of your globals.css


// pages/_app.js
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Common elements like favicon */}

        <link rel="icon" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* You can also include common meta tags here */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
