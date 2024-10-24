import { Stack } from 'expo-router';
import { cssInterop } from 'nativewind';
import { SafeAreaView } from 'react-native-safe-area-context';

import '../global.css';

cssInterop(SafeAreaView, { className: 'style' });

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name='(auth)' options={{ headerShown: false }} />
      <Stack.Screen name='logged-in/profile' options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
