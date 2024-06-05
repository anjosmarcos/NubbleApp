import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components';
import {useResetNavigationSucess} from '@hooks';
import {AuthScreenProps} from '@routes';

import {singUpSchema} from './singUpSchema';

export function SingUpScreen({}: AuthScreenProps<'SingUpScreen'>) {
  const {reset} = useResetNavigationSucess();
  const {control, formState, handleSubmit} = useForm<singUpSchema>({
    resolver: zodResolver(singUpSchema),
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm(formValues: singUpSchema) {
    // TODO:

    console.log(formValues);

    reset({
      title: 'Sua conta foi criada com sucesso!',
      message: 'Agora é só fazer login na nossa plataforma',
      icon: {name: 'CheckRound', color: 'success'},
    });
  }
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <FormTextInput
        control={control}
        name="username"
        label="Seu username"
        placeholder="@"
        boxProps={{mb: 's20'}}
      />

      <FormTextInput
        control={control}
        name="fullName"
        // autoCapitalize="words"
        label="Seu nome completo"
        placeholder="Nome completo"
        boxProps={{mb: 's20'}}
      />

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's48'}}
      />

      <Button
        title="Criar uma conta"
        preset="primary"
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
      />
    </Screen>
  );
}
