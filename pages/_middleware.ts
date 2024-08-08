import type { NextFetchEvent, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const config = {
  matcher: '/'
};

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const { geo } = req;
  const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com *.twitter.com cdn.usefathom.com cdn.mxpnl.com snack.expo.io snack.expo.dev;
    child-src *.youtube.com *.google.com *.twitter.com snack.expo.io snack.expo.dev;
    style-src 'self' 'unsafe-inline' *.googleapis.com snack.expo.io snack.expo.dev;
    img-src * blob: data:;
    media-src 'none';
    connect-src *;
    font-src 'self';
  `;

  const response = NextResponse.next();

  response.headers.set(
    'Content-Security-Policy',
    ContentSecurityPolicy.replace(/\n/g, '')
  );
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=()'
  );
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  );
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-DNS-Prefetch-Control', 'on');

  const { nextUrl: url } = req;
  const country = geo.country || 'Unknown Country';
  const city = geo.city || 'Unknown City';

  url.searchParams.set('country', country);
  url.searchParams.set('city', city);

  return NextResponse.rewrite(url);
}
