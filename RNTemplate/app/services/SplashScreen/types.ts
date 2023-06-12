export interface SplashScreenAdapter {
  setup: () => void;
  hide: () => Promise<void>;
}
