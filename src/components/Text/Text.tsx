import React from "react"
import { Text as RNText, TextProps as NRTextProps, TextStyle } from "react-native"

interface TextProps extends NRTextProps {
    preset?: TextVariants;
    bold?: boolean;
    italic?: boolean;
    semiBold?: boolean;
}

export function Text({
    children,
    preset = 'headingMedium',
    style,
    bold,
    italic,
    semiBold,
    ...rest }: TextProps) {

    const fontFamily = getFontFamily(preset, bold, italic, semiBold)

    return (
        <RNText style={
            [
                $fontSize[preset],
                style,
                { fontFamily }
            ]
        } {...rest}>{children}</RNText>
    )
}

function getFontFamily(preset: TextVariants, bold?: boolean, italic?: boolean, semiBold?: boolean) {

    if (
        preset === 'headingLarge' ||
        preset === 'headingMedium' ||
        preset === 'headingSmall') {
        return italic ? $fontFamily.blackItalic : $fontFamily.bold
    }

    switch (true) {
        case bold && italic:
            return $fontFamily.blackItalic
        case bold:
            return $fontFamily.bold
        case italic:
            return $fontFamily.italic
        case semiBold && italic:
            return $fontFamily.mediumItalic
        case semiBold:
            return $fontFamily.medium
        default:
            return $fontFamily.regular
    }
}

type TextVariants =
    | 'headingLarge'
    | 'headingSmall'
    | 'headingMedium'
    | 'paragraphLarge'
    | 'paragraphMedium'
    | 'paragraphSmall'
    | 'paragraphCaption'
    | 'paragraphCaptionSmall';

const $fontSize: Record<TextVariants, TextStyle> = {
    headingLarge: { fontSize: 32, lineHeight: 38.4 },
    headingMedium: { fontSize: 22, lineHeight: 26.4 },
    headingSmall: { fontSize: 18, lineHeight: 23.4 },

    paragraphLarge: { fontSize: 18, lineHeight: 25.2 },
    paragraphMedium: { fontSize: 16, lineHeight: 22.4 },
    paragraphSmall: { fontSize: 14, lineHeight: 19.6 },

    paragraphCaption: { fontSize: 12, lineHeight: 16.8 },
    paragraphCaptionSmall: { fontSize: 10, lineHeight: 14 },
}

const $fontFamily = {
    black: 'Satoshi-Black',
    blackItalic: 'Satoshi-BlackItalic',
    bold: 'Satoshi-Bold',
    italic: 'Satoshi-Italic',
    light: 'Satoshi-Light',
    lightItalic: 'Satoshi-LightItalic',
    medium: 'Satoshi-Medium',
    mediumItalic: 'Satoshi-MediumItalic',
    regular: 'Satoshi-Regular',

}