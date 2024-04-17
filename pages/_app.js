import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import { GlobalStyles } from "../styles";
import * as gtag from "../lib/gtag";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoadingScreen } from "../components";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLoading(false);
      // const loader = document.getElementById('globalLoader');
      // if (loader)
      //   loader.remove();
    }
  }, []);
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <GlobalStyles />
      <>
        {loading && <LoadingScreen />}
        <React.Fragment>
          <Component {...pageProps} />
        </React.Fragment>
      </>
      <ToastContainer />
    </>
  );
}

export default MyApp;
