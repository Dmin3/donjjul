import type { Metadata } from 'next';

import { NotoSans } from '@/styles/font';
import StyledComponentsRegistry from '@/styles/registry';
import Providers from '@/lib/tanstack-Query/provider';

import Header from '@/components/common/Header';

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
      <body className={NotoSans.className}>
        <StyledComponentsRegistry>
          <Header />
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
