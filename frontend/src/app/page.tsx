'use client';

import Footer from '@/components/common/Footer';
import Banner from '@/components/home/Banner';
import PostiveStore from '@/components/home/PostiveStore';
import PublicizeStore from '@/components/home/PublicizeStore';

export default function Home() {
  return (
    <main
      style={{
        width: '100%',
        height: '100vh',
      }}
    >
      <Banner />

      <PublicizeStore />

      <PostiveStore />

      <Footer />
    </main>
  );
}
