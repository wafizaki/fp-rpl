import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Input from '@/components/forms/Input';

import REGEX from '@/constant/regex';
import {
  RegisterFormType,
  useRegisterMutation,
} from '@/pages/register/hooks/mutation';

export default function RegisterForm() {
  const methods = useForm<RegisterFormType>({
    mode: 'onTouched',
  });

  const { handleSubmit } = methods;

  const { handleRegister, isLoading } = useRegisterMutation();

  const onSubmit = (data: RegisterFormType) => {
    handleRegister(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
        <Input
          id='nama'
          label='Nama'
          placeholder='Masukkan Nama'
          validation={{
            required: 'Nama tidak boleh kosong!',
          }}
        />
        <Input
          id='username'
          label='Username'
          placeholder='Masukkan Username'
          validation={{
            required: 'Username tidak boleh kosong!',
            pattern: {
              value: REGEX.USERNAME,
              message: 'Username tidak valid!',
            },
          }}
          helperText='Username terdiri atas 3-15 karakter dan hanya boleh berisi huruf, angka, dan underscore.'
        />
        <Input
          id='email'
          label='Email'
          placeholder='Masukkan Email'
          validation={{
            required: 'Email tidak boleh kosong!',
            pattern: {
              value: REGEX.EMAIL,
              message: 'Username tidak valid!',
            },
          }}
        />
        <Input
          id='password'
          type='password'
          label='Password'
          placeholder='Masukkan Password'
          validation={{
            required: 'Password tidak boleh kosong!',
            pattern: {
              value: REGEX.PASSWORD,
              message: 'Password tidak valid!',
            },
          }}
          helperText='Password terdiri atas minimal 8 karakter, satu huruf besar, satu huruf kecil, satu angka, dan satu karakter spesial.'
        />
        <Input
          id='biodata'
          label='Tempat dan Tanggal Lahir'
          placeholder='Masukkan tempat dan tanggal lahir'
          validation={{
            required: 'Biodata tidak boleh kosong!',
          }}
        />
        <Input
          id='notelpon'
          label='Nomor Telepon'
          placeholder='Masukkan Nomor Telepon'
          validation={{
            required: 'Nomor Telepon tidak boleh kosong!',
            pattern: {
              value: REGEX.PHONE_NUMBER,
              message: 'Password tidak valid!',
            },
          }}
          helperText='Contoh: 6281234567890'
        />
        <Button
          type='submit'
          variant='primary'
          className='w-full'
          isLoading={isLoading}
        >
          Daftar
        </Button>
      </form>
    </FormProvider>
  );
}
