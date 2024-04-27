import * as React from 'react';

import Layout from '@/components/layout/Layout';
import PrimaryLink from '@/components/links/PrimaryLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import LoginForm from '@/pages/login/container/LoginForm';

export default function LoginPage() {
  return (
    <Layout>
      <Seo templateTitle='Masuk' />
      <main className='flex min-h-screen w-full flex-col items-center justify-center'>
        <div className='mx-auto flex w-10/12 flex-row items-center justify-between'>
          <section className='flex w-full flex-col gap-12 lg:w-2/5'>
            <Typography variant='j1' color='primary'>
              Masuk
            </Typography>
            <LoginForm />
            <Typography variant='s3' color='secondary'>
              Belum punya akun?{' '}
              <PrimaryLink href='/register'>Register</PrimaryLink>
            </Typography>
          </section>
          <section className='hidden w-2/5 lg:block'>
            <NextImage
              src='/images/auth/login.png'
              alt='hero'
              width='637'
              height='449'
              className='mx-auto w-[90%]'
            />
          </section>
        </div>
      </main>
    </Layout>
  );
}
