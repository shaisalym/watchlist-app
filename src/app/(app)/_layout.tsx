import { SplashScreen, Stack } from 'expo-router';
import React, { useCallback, useEffect } from 'react';

import { ThemeProvider } from '@/context/theme-context';
import { useAuth } from '@/lib';

export default function Layout() {
  const status = useAuth.use.status();

  const hideSplash = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    if (status !== 'idle') {
      setTimeout(() => {
        hideSplash();
      }, 1000);
    }
  }, [hideSplash, status]);

  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  );
}
