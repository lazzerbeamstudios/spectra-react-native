import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

import { useStore } from '../../stores/profile.store';

const Profile = () => {
  const { salmon, tuna, addSalmon, addTuna } = useStore();

  return (
    <View style={styles.page}>

      <Text className='text-lg'>
        Profile
      </Text>

      <Text className='text-lg'>
        {salmon}
      </Text>

      <Text className='text-lg'>
        {tuna}
      </Text>

      <TouchableOpacity onPressIn={() => addSalmon(1)}>
        <Text>Add Salmon</Text>
      </TouchableOpacity>

      <TouchableOpacity onPressIn={() => addTuna(1)}>
        <Text>Add Tuna</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
