import AsyncStorage from '@react-native-async-storage/async-storage';

import { MoonStar, Sun } from '~/src/icons/icons';
import { Button } from '~/src/components/ui/button';
import { useColorScheme } from '~/src/lib/useColorScheme';
import { setAndroidNavigationBar } from '~/src/lib/setAndroidNavigationBar';

export const ProfileThemeButton = () => {
  const { isDarkColorScheme, setColorScheme } = useColorScheme();

  const changeTheme = () => {
    const colorTheme = isDarkColorScheme ? 'light' : 'dark';
    setColorScheme(colorTheme);
    setAndroidNavigationBar(colorTheme);
    AsyncStorage.setItem('colorTheme', colorTheme);
  };

  return (
    <Button className='web:me-2' variant={'link'} size={'icon'} onPress={changeTheme}>
      {isDarkColorScheme ? (
        <MoonStar className='text-foreground' size={30} strokeWidth={1.25}></MoonStar>
      ) : (
        <Sun className='text-foreground' size={30} strokeWidth={1.25}></Sun>
      )}
    </Button>
  );
}
