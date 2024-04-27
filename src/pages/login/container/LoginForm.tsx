import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Input from '@/components/forms/Input';

import { LoginFormType, useLoginMutation } from '@/pages/login/hooks/mutation';

export default function LoginForm() {
  const methods = useForm<LoginFormType>({
    mode: 'onTouched',
  });

  const { handleSubmit } = methods;

  const { handleLogin, isLoading } = useLoginMutation();

  const onSubmit = (data: LoginFormType) => {
    handleLogin(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
        <Input
          id='username'
          label='Username'
          placeholder='Masukkan Username'
          validation={{
            required: 'Username tidak boleh kosong!',
          }}
        />
        <Input
          id='password'
          type='password'
          label='Password'
          placeholder='Masukkan Password'
          validation={{
            required: 'Password tidak boleh kosong!',
          }}
        />
        <Button
          type='submit'
          variant='primary'
          className='w-full'
          isLoading={isLoading}
        >
          Masuk
        </Button>
      </form>
    </FormProvider>
  );
}
