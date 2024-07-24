import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const trackEvent = (event_name, props) => {
  try {
    if ((window as any).mixpanel) {
      (window as any).mixpanel.track(event_name, props);
    }
  } catch (e) {
    console.log(e);
  }
};

export const useAnalytics = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      //Send track event when new pages is loaded
      trackEvent('Viewed Page', { url });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
};
