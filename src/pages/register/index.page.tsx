import * as React from 'react';

import Layout from '@/components/layout/Layout';
import PrimaryLink from '@/components/links/PrimaryLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import RegisterForm from '@/pages/register/container/RegisterForm';

export default function RegisterPage() {
  return (
    <Layout>
      <Seo templateTitle='Daftar' />
      <main className='flex min-h-screen w-full flex-col items-center justify-center'>
        <div className='mx-auto flex w-10/12 flex-row items-center justify-between'>
          <section className='hidden w-2/5 lg:block'>
            <NextImage
              src='/images/auth/register.png'
              alt='hero'
              width='637'
              height='449'
              className='mx-auto w-[90%]'
            />
          </section>
          <section className='flex w-full flex-col gap-12 lg:w-2/5 py-16 overflow-y-auto'>
            <Typography variant='j1' color='primary'>
              Daftar
            </Typography>
            <RegisterForm />
            <Typography variant='s3' color='secondary'>
              Sudah punya akun? Masuk{' '}
              <PrimaryLink href='/register'>di sini</PrimaryLink>
            </Typography>
          </section>
        </div>
      </main>
    </Layout>
  );
}
