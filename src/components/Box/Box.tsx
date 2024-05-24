import {
    backgroundColor,
    BackgroundColorProps,
    border,
    BorderProps,
    createBox,
    createRestyleComponent,
    layout,
    LayoutProps,
    spacing,
    SpacingProps
} from '@shopify/restyle';

import { Theme } from '@theme';
import {
    TouchableOpacityProps as RNTouchableOpacityProps,
    TouchableOpacity
} from 'react-native';

export const Box = createBox<Theme>();

export type BoxProps = React.ComponentProps<typeof Box>

export type TouchableOpacityBoxProps = SpacingProps<Theme>
    & LayoutProps<Theme>
    & BackgroundColorProps<Theme>
    & RNTouchableOpacityProps
    & BorderProps<Theme>;

export const TouchableOpacityBox = createRestyleComponent<
    TouchableOpacityBoxProps,
    Theme>([
        backgroundColor,
        spacing,
        layout,
        border
    ], TouchableOpacity)