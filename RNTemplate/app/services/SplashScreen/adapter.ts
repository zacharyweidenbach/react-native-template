import * as SplashScreen from 'expo-splash-screen';
import { SplashScreenAdapter } from '@app/services/SplashScreen/types';

export const getSplashScreenAdapter = (): SplashScreenAdapter => {
  return {
    setup: () => {
      SplashScreen.preventAutoHideAsync();
    },
    hide: async () => {
      await SplashScreen.hideAsync();
    },
  };
};
