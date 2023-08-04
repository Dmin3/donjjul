import Banner from '@/components/home/Banner';
import PostiveStore from '@/components/home/PostiveStore';
import PublicizeStore from '@/components/home/PublicizeStore';

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
