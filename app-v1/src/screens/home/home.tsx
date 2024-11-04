import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '~/src/components/ui/text';
import { Button } from '~/src/components/ui/button';

import { profileStore } from '~/src/stores/profile.store';

const HomeScreen = () => {

  const submit = () => {

    const profile = profileStore.getState().profile;

    console.log(profile);

    if (profile && profile.id) {
      console.log('Here');

      router.navigate('../logged-in/profile');
    }
  };

  return (
    <SafeAreaView className='mb-36 flex flex-1 flex-col items-center justify-center' onLayout={submit}>

      <Text className='mb-24 text-8xl font-bold'>
        Spectra
      </Text>

      <Link href='/sign-up' push asChild>
        <Button className='native:h-20 mb-6 h-20 w-96 rounded-full'>
          <Text className='native:text-4xl text-4xl'>
            Sign Up
          </Text>
        </Button>
      </Link>

      <Link href='/sign-in' push asChild>
        <Button className='native:h-20 h-20 w-96 rounded-full'>
          <Text className='native:text-4xl text-4xl'>
            Sign In
          </Text>
        </Button>
      </Link>

    </SafeAreaView>
  );
};

export default HomeScreen;
