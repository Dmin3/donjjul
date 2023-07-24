import type { Metadata } from 'next';

import '@/styles/globals.css';
import { NotoSans } from '@/styles/font';

export const metadata: Metadata = {
  title: '돈쭐',
  description: '돈쭐-app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={NotoSans.className}>{children}</body>
    </html>
  );
}
