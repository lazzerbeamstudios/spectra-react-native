import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUpScreen = () => {
  return (
    <SafeAreaView className='flex flex-1 flex-col items-center justify-center bg-background'>

      <Text className='mb-32 text-4xl font-bold text-text'>
        Sign Up
      </Text>

    </SafeAreaView>
  )
}

export default SignUpScreen
