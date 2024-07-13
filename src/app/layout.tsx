import StyledComponentsRegistry from '@/lib/registry';
import { GlobalStyle } from '@/styles/global.styles';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Leitor Online One Piece',
  description: 'Site criado para leitura online do Manga One Piece',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br'>
      <body>
        <GlobalStyle />
        <StyledComponentsRegistry>
          {children}
          <Analytics />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
