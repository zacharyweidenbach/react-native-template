import { getSplashScreenAdapter } from '@app/services/SplashScreen/adapter';
import { SplashScreenAdapter } from '@app/services/SplashScreen/types';

export class SplashScreen implements SplashScreenAdapter {
  public setup: SplashScreenAdapter['setup'];
  public hide: SplashScreenAdapter['hide'];

  constructor(splashScreenAdapter: SplashScreenAdapter) {
    this.setup = splashScreenAdapter.setup;
    this.hide = splashScreenAdapter.hide;
  }
}

export const splashScreen = new SplashScreen(getSplashScreenAdapter());
