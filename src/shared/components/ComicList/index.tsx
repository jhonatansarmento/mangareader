'use client';

import comics from '@/shared/constants/volumes';
import Link from 'next/link';
import React from 'react';
import RecentChapter from '../RecentChapter';
import * as S from './styles';

export default function ComicList() {
  return (
    <S.Container>
      <S.Title>Todos os Mangás</S.Title>
      <S.List>
        {comics.map((comic, index) => {
          const latestVolume = comic.volumes[comic.volumes.length - 1];
          const latestChapter =
            latestVolume.chapters[latestVolume.chapters.length - 1];
          const chapterTitle = latestChapter.title.split(' - ')[0];

          return (
            <React.Fragment key={index}>
              <S.Item>
                <S.ImageWrapper>
                  <Link href={`/titulo/${comic.slug}`}>
                    <S.Image src={comic.image} alt={comic.title} />
                  </Link>
                </S.ImageWrapper>
                <S.InfoWrapper>
                  <Link href={`/titulo/${comic.slug}`}>
                    <S.ItemTitle>{comic.title}</S.ItemTitle>
                  </Link>
                  <Link href={`/titulo/${comic.slug}/${latestChapter.slug}`}>
                    <S.LatestChapter>{chapterTitle}</S.LatestChapter>
                  </Link>
                  <S.StatusFlag $completed={comic.completed}>
                    {comic.completed ? 'Completo' : 'Em Andamento'}
                  </S.StatusFlag>
                  <RecentChapter comicSlug={comic.slug} />
                </S.InfoWrapper>
              </S.Item>
              {index < comics.length - 1 && <S.Divider />}
            </React.Fragment>
          );
        })}
      </S.List>
    </S.Container>
  );
}
