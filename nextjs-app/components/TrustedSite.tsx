import Script from 'next/script';

const TrustedSite = () => {
  return (
    <>
      <Script
        src="https://cdn.ywxi.net/js/1.js"
        strategy="lazyOnload"
        async
      />
      {/* Rest of your component */}
    </>
  );
};

export default TrustedSite;
