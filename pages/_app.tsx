import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

function MyApp({
  Component,
  pageProps
}: AppProps) {
  return (
    <ThemeProvider>
      <Analytics />
      <SEO />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  );
}
