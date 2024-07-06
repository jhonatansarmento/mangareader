'use client';

import React from 'react';
import Link from 'next/link';
import * as S from './styles';
import comics from '@/shared/constants/volumes';

export default function ComicList() {
  return (
    <S.Container>
      <S.Title>Todos os Mangás</S.Title>
      <S.List>
        {comics.map((comic, index) => (
          <S.Item key={index}>
            <Link href={`/titulo/${comic.slug}`}>
              <S.Image src={comic.image} alt={comic.title} />
            </Link>
            <Link href={`/titulo/${comic.slug}`}>
              <S.ItemTitle>{comic.title}</S.ItemTitle>
            </Link>
            <Link href={`/chapter/${comic.slug}/latest`}>
              <S.LatestChapter>{comic.latestChapter}</S.LatestChapter>
            </Link>
            <S.ReleaseDate>{comic.releaseDate}</S.ReleaseDate>
          </S.Item>
        ))}
      </S.List>
    </S.Container>
  );
}
