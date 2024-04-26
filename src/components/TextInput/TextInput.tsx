import React, { useRef } from "react";
import {
    Pressable,
    TextInput as RNTextInput,
    TextInputProps as RNTextInputProps,
    TextStyle
} from "react-native";
import { Box, BoxProps } from "../Box/Box";
import { $fontFamily, $fontSize, Text } from "../Text/Text";
import { useAppTheme } from "../../hooks/useAppTheme";

interface TextInputProps extends RNTextInputProps {
    label?: string;
    errorMesssage?: string;
}

export function TextInput({ label, errorMesssage, ...rnTextInputProps }: TextInputProps) {
    const { colors } = useAppTheme()
    const inputRef = useRef<RNTextInput>(null)

    const $textInputContainer: BoxProps = {
        borderWidth: errorMesssage ? 2 : 1,
        borderColor: errorMesssage ? "error" : "gray4",
        padding: "s16",
        borderRadius: "s12"
    }


    function focusInput() {
        return (
            inputRef.current?.focus()
        )
    }

    return (
        <Pressable onPress={focusInput}>
            <Box>
                <Text preset="paragraphMedium" mb="s4" >{label}</Text>
                <Box {...$textInputContainer}>
                    <RNTextInput
                        ref={inputRef}
                        placeholderTextColor={colors.gray2} style={$textInputStyle} {...rnTextInputProps} />
                </Box>
                {errorMesssage && (<Text preset="paragraphSmall" color="error" bold>{errorMesssage}</Text>)}
            </Box>
        </Pressable>
    )
}

const $textInputStyle: TextStyle = {
    padding: 0,
    fontFamily: $fontFamily.regular,
    ...$fontSize.paragraphMedium
}
