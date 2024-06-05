import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {Button, FormTextInput, Screen, Text} from '@components';
import {useResetNavigationSucess} from '@hooks';
import {AuthScreenProps} from '@routes';

import {forgotPasswordSchema} from './forgotPasswordSchema';

export function ForgotPasswordScreen({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: AuthScreenProps<'ForgotPasswordScreen'>) {
  const {reset} = useResetNavigationSucess();

  const {control, formState, handleSubmit} = useForm<forgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  function submitForm(values: forgotPasswordSchema) {
    console.log(values);

    reset({
      title: 'E-mail enviado',
      message:
        'Enviamos as instruções para redefinição de senha para o seu e-mail',
      icon: {name: 'messageRound', color: 'primary'},
    }); // Remove the argument from the reset function call
  }
  return (
    <Screen canGoBack>
      <Text mb="s16" preset="headingLarge">
        Esqueci minha senha
      </Text>
      <Text mb="s32" preset="paragraphLarge">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's40'}}
      />

      <Button
        title="Recuperar senha"
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  );
}
