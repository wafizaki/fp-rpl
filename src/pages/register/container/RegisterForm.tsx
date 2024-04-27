import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Input from '@/components/forms/Input';
import TextArea from '@/components/forms/TextArea';

import REGEX from '@/constant/regex';

type RegisterForm = {
  username: string;
  name: string;
  email: string;
  password: string;
};

export default function RegisterForm() {
  const methods = useForm<RegisterForm>({
    mode: 'onTouched',
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: RegisterForm) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
        <Input
          id='name'
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
        <TextArea
          id='bio'
          label='Biodata'
          placeholder='Masukkan Biodata'
          validation={{
            required: 'Biodata tidak boleh kosong!',
          }}
        />
        <Input
          id='notelp'
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
        <Button type='submit' variant='primary' className='w-full'>
          Daftar
        </Button>
      </form>
    </FormProvider>
  );
}
