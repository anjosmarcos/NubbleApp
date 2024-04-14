import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Text } from '../Text/Text'
import { useTheme } from '@shopify/restyle'
import { Theme } from '../../theme/theme'
import { Box } from '../Box/Box'

interface ButtonProps {
    title: string
}

export function Button({ title }: ButtonProps) {
    const { colors } = useTheme<Theme>()

    return (
        <Box
            backgroundColor='redError'
            paddingHorizontal='s20'
        >
            <Text
                preset='headingMedium'
                style={{
                    color: '#fff',
                }}
            >
                {title}
            </Text>
        </Box>
    )
}