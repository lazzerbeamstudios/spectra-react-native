import { Stack, Link } from 'expo-router';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Button, SizableText, View } from 'tamagui';

import { useTheme } from 'tamagui';

// import { Button } from '~/src/components/Button';
// import { Container } from '~/src/components/Container';
// import { ScreenContent } from '~/src/components/ScreenContent';

export default function Home() {

  const theme = useTheme();

  const red = theme.red10.get();

  console.log(red);

  return (

    <View backgroundColor={"$background"}>
      <SizableText color={"$blue10"} fontSize={24} fontWeight={300}>Yeah</SizableText>

      {/* <Button>Yeah</Button> */}

    </View>

  );
}
