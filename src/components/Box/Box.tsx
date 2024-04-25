import { backgroundColor, BackgroundColorProps, border, BorderProps, createBox, createRestyleComponent, layout, LayoutProps, spacing, SpacingProps, spacingShorthand, SpacingShorthandProps } from '@shopify/restyle';
import { Theme } from '../../theme/theme';
import { TouchableOpacity, TouchableOpacityProps as RNTouchableOpacityProps } from 'react-native';

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