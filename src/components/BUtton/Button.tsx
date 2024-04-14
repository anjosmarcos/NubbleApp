import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Text } from '../Text/Text'

interface ButtonProps {
    title: string
}

export function Button({ title }: ButtonProps) {
    return (
        <TouchableOpacity
            style={{
                paddingHorizontal: 20,
                paddingVertical: 14,
                backgroundColor: '#074c4e',
                alignItems: 'center',
                borderRadius: 16,

            }}
        >
            <Text
                preset='headingMedium'
                style={{
                    color: '#fff',
                }}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}