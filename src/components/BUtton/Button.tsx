import React from 'react'
import { AccessibilityInfo, ActivityIndicator, TouchableOpacity } from 'react-native'
import { Text } from '../Text/Text'
import { useTheme } from '@shopify/restyle'
import { Theme } from '../../theme/theme'
import { TouchableOpacityBox, TouchableOpacityBoxProps } from '../Box/Box'

interface ButtonProps extends TouchableOpacityBoxProps {
    title: string;
    loading?: boolean;
}

export function Button({ title, loading, ...TouchableOpacityBoxProps }: ButtonProps) {
    const { colors } = useTheme<Theme>()

    return (
        <TouchableOpacityBox
            backgroundColor='greenPrimary'
            paddingHorizontal='s20'
            height={50}
            alignItems='center'
            justifyContent='center'
            borderRadius='s16'
            {...TouchableOpacityBoxProps}
        >
            {
                loading ? <ActivityIndicator /> :

                    <Text
                        preset='headingMedium'
                        bold
                        color='primaryContrast'
                    >
                        {title}
                    </Text>
            }
        </TouchableOpacityBox>
    )
}