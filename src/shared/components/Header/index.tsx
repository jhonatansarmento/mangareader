'use client';

import React from 'react';
import * as S from './styles';

export default function Header() {
  return (
    <S.Container>
      <S.Image
        src='https://leitordemanga.com/wp-content/uploads/2017/10/Ler-manga-One-Piece-Online-193x278-1.png'
        alt='One Piece'
      />
      <S.Content>
        <S.Title>One Piece</S.Title>
      </S.Content>
    </S.Container>
  );
}
