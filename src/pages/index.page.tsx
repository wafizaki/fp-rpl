import { useRouter } from 'next/router';
import * as React from 'react';

export default function HomePage() {
  const router = useRouter();

  if (typeof window !== 'undefined') {
    router.push('/dashboard');
  }

  return <main className='h-screen bg-secondary-800'></main>;
}
