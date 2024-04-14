import React from 'react'
import { AccessibilityInfo, ActivityIndicator, TouchableOpacity } from 'react-native'
import { Text } from '../Text/Text'
import { useTheme } from '@shopify/restyle'
import { Theme } from '../../theme/theme'
import { Box, TouchOpacityBox } from '../Box/Box'

interface ButtonProps {
    title: string;
    loading: boolean;
}

export function Button({ title, loading }: ButtonProps) {
    const { colors } = useTheme<Theme>()

    return (
        <TouchOpacityBox
            backgroundColor='greenPrimary'
            paddingHorizontal='s20'
            height={50}
            alignItems='center'
            justifyContent='center'
            borderRadius='s16'
        >
            {
                loading ? <ActivityIndicator /> :

                    <Text
                        preset='headingMedium'
                        style={{
                            color: '#fff',
                        }}
                    >
                        {title}
                    </Text>
            }
        </TouchOpacityBox>
    )
}