import { Platform } from 'react-native';

export const font = {
  default: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
} 
export const size = {
  xxlarge: 24,
  xlarge: 22,
  large: 20,
  lmedium: 18,
  medium: 16,
  small: 14,
  xsmall: 12
}

export const wide = {
  letterSpacing: 0.5
}

export const weight = {
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
}
