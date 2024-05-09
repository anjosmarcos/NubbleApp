import React, { useState } from "react";
import { Icon } from "../../../components/Icon/Icon";
import { TextInput, TextInputProps } from "../../../components/TextInput/TextInput";


type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>

export function PasswordInput(props: PasswordInputProps) {

    const [isSecureTextEntry, setIsSecureTextEntry] = useState(true)

    function toggleSecureTextEntry() {
        setIsSecureTextEntry(prev => !prev)
    }

    return (
        <TextInput
            secureTextEntry={isSecureTextEntry}
            {...props}
            RightComponent={
                <Icon
                    onPress={toggleSecureTextEntry}
                    color="gray2"
                    name={isSecureTextEntry ? 'eyeOn' : 'eyeOff'}
                />
            }

        />

    )
}