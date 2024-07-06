// src/app/titulo/[comicSlug]/page.tsx

'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import comics from '@/shared/constants/volumes';
import * as S from './styles';
import Link from 'next/link';
import Header from '@/shared/components/Header';

const ComicDetail = () => {
  const params = useParams();
  const comicSlug = params.comicSlug;
  const comic = comics.find((comic) => comic.slug === comicSlug);

  if (!comic) {
    return <div>Comic not found</div>;
  }

  return (
    <>
      <Header />
      <S.Container>
        <S.Image src={comic.image} alt={comic.title} />
        <S.Title>{comic.title}</S.Title>
        <S.LatestChapter>{comic.latestChapter}</S.LatestChapter>
        <S.ReleaseDate>{comic.releaseDate}</S.ReleaseDate>
        <S.VolumeList>
          {comic.volumes.map((volume, index) => (
            <S.VolumeItem key={index}>
              <S.VolumeTitle>{volume.title}</S.VolumeTitle>
              {volume.chapters.map((chapter, chapterIndex) => (
                <S.ChapterItem key={chapterIndex}>
                  <Link href={`/titulo/${comic.slug}/${chapter.slug}`}>
                    <S.ChapterTitle>{chapter.title}</S.ChapterTitle>
                  </Link>
                </S.ChapterItem>
              ))}
            </S.VolumeItem>
          ))}
        </S.VolumeList>
      </S.Container>
    </>
  );
};

export default ComicDetail;
