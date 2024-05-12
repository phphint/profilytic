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
          gtag('config', 'G-2P0QJGXGSX', {
            'anonymize_ip': true,
            'allow_ad_personalization_signals': false
          });
        `}
      </Script>
    </>
  );
}

export default Analytics;
