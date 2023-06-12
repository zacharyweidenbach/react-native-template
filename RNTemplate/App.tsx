import { useEffect } from 'react';

import { splashScreen } from '@root/app/services/SplashScreen';
import { NavigationRoot } from '@root/app/screens';

// Keep the splash screen visible while we fetch resources
splashScreen.setup();

export default function App() {
  useEffect(() => {
    // Load resources then hide the splash screen
    splashScreen.hide();
  }, []);

  return <NavigationRoot />;
}
