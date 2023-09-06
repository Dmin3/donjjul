'use client';

import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Banner from '@/components/home/Banner';
import PostiveStore from '@/components/home/PostiveStore';
import PublicizeStore from '@/components/home/PublicizeStore';

export default function Home() {
  return (
    <main
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#fafafa',
      }}
    >
      <Header />

      <Banner />

      <PublicizeStore />

      <PostiveStore />

      <Footer />
    </main>
  );
}
