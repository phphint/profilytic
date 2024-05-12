import Script from 'next/script';

const Analytics: React.FC = () => {
  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-2P0QJGXGSX"
      />
      <Script
        strategy="afterInteractive"
        id="google-analytics"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2P0QJGXGSX');
        `}
      </Script>
    </>
  );
}

export default Analytics;
