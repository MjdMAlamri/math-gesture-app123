// app/_layout.tsx
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

// Remove the invalid '(tabs)' anchor completely.
// If you want, you could add: export const unstable_settings = { initialRouteName: 'index' };

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        {/* Home */}
        <Stack.Screen name="index" />

        {/* Modal (keep if you use it) */}
        <Stack.Screen
          name="modal"
          options={{ presentation: 'modal', headerShown: true, title: 'Modal' }}
        />
      </Stack>

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
