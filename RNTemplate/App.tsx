import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { splashScreen } from '@root/app/services/SplashScreen';

// Keep the splash screen visible while we fetch resources
splashScreen.setup();

export default function App() {
  useEffect(() => {
    // Load resources then hide the splash screen
    splashScreen.hide();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
