import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@app/screens/types';

export type HomeScreenNavProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;
export type AccountScreenNavProps = NativeStackScreenProps<
  RootStackParamList,
  'Account'
>;
