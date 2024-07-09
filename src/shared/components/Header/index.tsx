'use client';

import React from 'react';
import { FaHome } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import * as S from './styles';

export default function Header() {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push('/');
  };

  return (
    <S.Container>
      <S.Left>
        <S.Title onClick={handleHomeClick}>Leitor Online</S.Title>
      </S.Left>
      <S.Center>
        <S.SearchBar placeholder='Pesquisar...' />
      </S.Center>
      <S.Right />
    </S.Container>
  );
}
