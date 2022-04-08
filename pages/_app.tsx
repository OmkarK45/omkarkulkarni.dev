import 'styles/global.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';
import { useAnalytics } from 'lib/analytics';
import { KBarProvider } from 'kbar';
import { actions } from 'lib/KBarActions';
import { KBarPortal } from 'components/KBar/KBar';
import clsx from 'clsx';

export default function App({ Component, pageProps }: AppProps) {
  useAnalytics();

  return (
    <SessionProvider session={pageProps.session}>
      <KBarProvider
        actions={actions}
        options={{
          enableHistory: true,
          disableScrollbarManagement: true
        }}
      >
        <ThemeProvider attribute="class">
          <KBarPortal />
          <Component {...pageProps} />
        </ThemeProvider>
      </KBarProvider>
    </SessionProvider>
  );
}
