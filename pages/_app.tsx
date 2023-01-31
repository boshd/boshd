import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { ThemeProvider } from "next-themes";
import { DesignSystemProvider, darkTheme } from "@modulz/design-system";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DesignSystemProvider>
      <ThemeProvider
        disableTransitionOnChange
        attribute="class"
        value={{ light: "theme", dark: darkTheme }}
        // defaultTheme="theme"
      >
        <Layout narrow={false} title={""}>
          <Component {...pageProps} />
        </Layout>
        <Analytics />
      </ThemeProvider>
    </DesignSystemProvider>
  );
}

export default MyApp;
