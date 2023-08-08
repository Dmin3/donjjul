'use client';

import { signIn } from '@/apis/auth';
import { checkApi } from '@/apis/board';
import Banner from '@/components/home/Banner';
import PostiveStore from '@/components/home/PostiveStore';
import PublicizeStore from '@/components/home/PublicizeStore';
import { useEffect } from 'react';

export default function Home() {
  return (
    <main
      style={{
        width: '100%',
        height: 'calc(100vh - 6.5rem)',
      }}
    >
      <Banner />

      <PublicizeStore />

      <PostiveStore />
    </main>
  );
}
