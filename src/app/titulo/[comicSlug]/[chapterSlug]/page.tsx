// src/app/titulo/[comicSlug]/[chapterSlug]/page.tsx

'use client';

import { notFound, useRouter } from 'next/navigation';
import Link from 'next/link';
import FloatButton from '@/shared/components/FloatButton';
import * as S from './styles';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import comics from '@/shared/constants/volumes';

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

  return (
    <S.Container>
      <S.Header>
        <S.Title>
          <Link href='/' passHref>
            {comic?.title}
          </Link>
        </S.Title>
        <S.Navigation>
          <S.NavButton
            onClick={handlePreviousChapter}
            disabled={
              !chapter ||
              chapter === comic?.volumes.flatMap((volume) => volume.chapters)[0]
            }
          >
            <FaChevronLeft />
          </S.NavButton>
          <S.ChapterSelect onChange={handleChapterChange} value={chapter.slug}>
            {comic?.volumes
              .flatMap((volume) => volume.chapters)
              .map((chapter) => (
                <option key={chapter.id} value={chapter.slug}>
                  {chapter.title}
                </option>
              ))}
          </S.ChapterSelect>
          <S.NavButton
            onClick={handleNextChapter}
            disabled={
              !chapter ||
              chapter ===
                comic?.volumes.flatMap((volume) => volume.chapters)[
                  comic?.volumes.flatMap((volume) => volume.chapters).length - 1
                ]
            }
          >
            <FaChevronRight />
          </S.NavButton>
        </S.Navigation>
      </S.Header>
      <S.Content>
        {chapter.imageUrls.map((url, index) => (
          <S.Image key={index} src={url} alt={`Page ${index + 1}`} />
        ))}
      </S.Content>
      <FloatButton />
    </S.Container>
  );
}
