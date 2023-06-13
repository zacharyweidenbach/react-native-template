import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { splashScreen } from '@app/services/SplashScreen';
import { HomeScreen } from '@app/screens/Authenticated/HomeScreen';
import { AccountScreen } from '@app/screens/Authenticated/AccountScreen';
import { RootStackParamList } from '@app/screens/types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const NavigationRoot = () => {
  return (
    <NavigationContainer
      onReady={() => {
        splashScreen.hide();
      }}
    >
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Account" component={AccountScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
