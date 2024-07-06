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
        <S.Title>Leitor Online</S.Title>
      </S.Left>
      <S.Center>
        <S.HomeIcon onClick={handleHomeClick}>
          <FaHome />
        </S.HomeIcon>
        <S.SearchBar placeholder='Pesquisar...' />
      </S.Center>
      <S.Right />
    </S.Container>
  );
}
