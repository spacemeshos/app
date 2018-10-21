import { Platform } from 'react-native';

export const minHeight = {
    minHeight: (Platform.OS === 'web') ? '100vh' : 100
};

export const maxHeight = {
    maxHeight: (Platform.OS === 'web') ? '100vh' : 100,
}