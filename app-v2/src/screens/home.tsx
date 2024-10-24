import { Link } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView className='flex flex-1 flex-col items-center justify-center bg-background'>

      <Text className='mb-32 text-8xl font-bold text-text'>
        Spectra
      </Text>

      <Link href='/sign-up' push asChild>
        <TouchableOpacity className='mb-6 w-60 rounded-full border-2 border-text bg-primary'>
          <Text className='p-4 text-center text-3xl font-semibold text-primarytext'>
            Sign Up
          </Text>
        </TouchableOpacity>
      </Link>

      <Link href='/sign-in' push asChild>
        <TouchableOpacity className='w-60 rounded-full border-2 border-text bg-primary'>
          <Text className='p-4 text-center text-3xl font-semibold text-primarytext'>
            Sign In
          </Text>
        </TouchableOpacity>
      </Link>

    </SafeAreaView>
  );
};

export default HomeScreen;
