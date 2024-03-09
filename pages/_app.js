import '../styles/global.css';
import 'react-intl-tel-input/dist/main.css';
import posthog from "posthog-js";
import { PostHogProvider } from 'posthog-js/react';

if (typeof window !== 'undefined') { // checks that we are client-side
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.debug() // debug mode in development
    },
  })
}

export default function App({ Component, pageProps }) {
  return <PostHogProvider client={posthog}><Component {...pageProps} /></PostHogProvider>
}