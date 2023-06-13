import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { HomeScreenNavProps } from '@app/screens/Authenticated/types';

export const HomeScreen = () => {
  const { navigate } = useNavigation<HomeScreenNavProps['navigation']>();

  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen!</Text>
      <StatusBar style="auto" />
      <Button
        onPress={() => navigate('Account')}
        title="Navigate to Account Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
