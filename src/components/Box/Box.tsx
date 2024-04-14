import { backgroundColor, border, createBox, createRestyleComponent, layout, spacing } from '@shopify/restyle';
import { Theme } from '../../theme/theme';
import { TouchableOpacity } from 'react-native';

export const Box = createBox<Theme>();


export const TouchOpacityBox = createRestyleComponent([
    backgroundColor, spacing, layout, border
], TouchableOpacity)