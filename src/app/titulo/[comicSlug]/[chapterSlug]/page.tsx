'use client';

import FloatButton from '@/shared/components/FloatButton';
import comics from '@/shared/constants/volumes';
import Link from 'next/link';
import { notFound, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import * as S from './styles';

interface ChapterPageProps {
  params: {
    comicSlug: string;
    chapterSlug: string;
  };
}

export default function ChapterPage({ params }: ChapterPageProps) {
  const { comicSlug, chapterSlug } = params;
  const router = useRouter();
  const decodedComicSlug = decodeURIComponent(comicSlug);
  const decodedChapterSlug = decodeURIComponent(chapterSlug);

  // Encontrar o comic e o capítulo correspondente
  const comic = comics.find((comic) => comic.slug === decodedComicSlug);
  const chapter =
    comic?.volumes
      .flatMap((volume) => volume.chapters)
      .find((chapter) => chapter.slug === decodedChapterSlug) || null;

  if (!chapter) {
    notFound();
  }

  useEffect(() => {
    // Salvar progresso no localStorage
    if (chapter) {
      const lastRead = {
        chapterSlug: decodedChapterSlug,
        comicSlug: decodedComicSlug,
        chapterTitle: chapter.title,
      };
      localStorage.setItem(
        `lastRead-${decodedComicSlug}`,
        JSON.stringify(lastRead)
      );
    }
  }, [chapter, decodedChapterSlug, decodedComicSlug]);

  const handleChapterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newChapterSlug = event.target.value;
    router.push(`/titulo/${comicSlug}/${newChapterSlug}`);
  };

  const handlePreviousChapter = () => {
    const allChapters =
      comic?.volumes.flatMap((volume) => volume.chapters) || [];
    const currentChapterIndex = allChapters.findIndex(
      (c) => c.slug === decodedChapterSlug
    );
    if (currentChapterIndex > 0) {
      const previousChapter = allChapters[currentChapterIndex - 1];
      router.push(`/titulo/${comicSlug}/${previousChapter.slug}`);
    }
  };

  const handleNextChapter = () => {
    const allChapters =
      comic?.volumes.flatMap((volume) => volume.chapters) || [];
    const currentChapterIndex = allChapters.findIndex(
      (c) => c.slug === decodedChapterSlug
    );
    if (currentChapterIndex < allChapters.length - 1) {
      const nextChapter = allChapters[currentChapterIndex + 1];
      router.push(`/titulo/${comicSlug}/${nextChapter.slug}`);
    }
  };

  const allChapters = comic?.volumes.flatMap((volume) => volume.chapters) || [];
  const isLastChapter =
    allChapters.findIndex((c) => c.slug === decodedChapterSlug) ===
    allChapters.length - 1;

  return (
    <S.Container>
      <S.Header>
        <S.Title>
          <Link href={`/titulo/${comicSlug}`}>{comic?.title}</Link>
        </S.Title>
        <S.Navigation>
          <S.NavButton
            onClick={handlePreviousChapter}
            disabled={!chapter || chapter === allChapters[0]}
          >
            <MdOutlineKeyboardArrowLeft />
          </S.NavButton>
          <S.ChapterSelect onChange={handleChapterChange} value={chapter.slug}>
            {allChapters.map((chapter) => (
              <option key={chapter.id} value={chapter.slug}>
                {chapter.title}
              </option>
            ))}
          </S.ChapterSelect>
          <S.NavButton
            onClick={handleNextChapter}
            disabled={!chapter || isLastChapter}
          >
            <MdOutlineKeyboardArrowRight />
          </S.NavButton>
        </S.Navigation>
      </S.Header>
      <S.Content>
        {chapter.imageUrls.map((url, index) => (
          <S.Image key={index} src={url} alt={`Page ${index + 1}`} />
        ))}
        <S.Navigation>
          <S.NavButton
            onClick={handlePreviousChapter}
            disabled={!chapter || chapter === allChapters[0]}
          >
            <MdOutlineKeyboardArrowLeft />
          </S.NavButton>
          <S.ChapterSelect onChange={handleChapterChange} value={chapter.slug}>
            {allChapters.map((chapter) => (
              <option key={chapter.id} value={chapter.slug}>
                {chapter.title}
              </option>
            ))}
          </S.ChapterSelect>
          <S.NavButton
            onClick={handleNextChapter}
            disabled={!chapter || isLastChapter}
          >
            <MdOutlineKeyboardArrowRight />
          </S.NavButton>
        </S.Navigation>
      </S.Content>
      <FloatButton />
    </S.Container>
  );
}
