'use client';

import { notFound, useRouter } from 'next/navigation';
import Link from 'next/link';
import volumes from '@/shared/constants/volumes';
import FloatButton from '@/shared/components/FloatButton';
import * as S from './styles';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ChapterPageProps {
  params: {
    volume: string;
    id: string;
  };
}

export default function ChapterPage({ params }: ChapterPageProps) {
  const { volume, id } = params;
  const router = useRouter();
  const decodedVolume = decodeURIComponent(volume);
  const decodedId = decodeURIComponent(id);
  const volumeData = volumes.find((v) => v.title === decodedVolume);
  const chapter = volumeData?.chapters.find((c) => c.id === decodedId) || null;

  if (!chapter) {
    notFound();
  }

  const handleChapterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newChapterId = event.target.value;
    router.push(`/chapter/${volume}/${newChapterId}`);
  };

  const handlePreviousChapter = () => {
    const currentChapterIndex = volumeData?.chapters.findIndex(
      (c) => c.id === decodedId
    );
    if (currentChapterIndex > 0) {
      const previousChapter = volumeData.chapters[currentChapterIndex - 1];
      router.push(`/chapter/${volume}/${previousChapter.id}`);
    }
  };

  const handleNextChapter = () => {
    const currentChapterIndex = volumeData?.chapters.findIndex(
      (c) => c.id === decodedId
    );
    if (currentChapterIndex < volumeData.chapters.length - 1) {
      const nextChapter = volumeData.chapters[currentChapterIndex + 1];
      router.push(`/chapter/${volume}/${nextChapter.id}`);
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>
          <Link href='/' passHref>
            One Piece
          </Link>
        </S.Title>
        <S.Navigation>
          <S.NavButton
            onClick={handlePreviousChapter}
            disabled={!chapter || chapter === volumeData?.chapters[0]}
          >
            <FaChevronLeft />
          </S.NavButton>
          <S.ChapterSelect onChange={handleChapterChange} value={id}>
            {volumeData?.chapters.map((chapter) => (
              <option key={chapter.id} value={chapter.id}>
                {chapter.title}
              </option>
            ))}
          </S.ChapterSelect>
          <S.NavButton
            onClick={handleNextChapter}
            disabled={
              !chapter ||
              chapter === volumeData?.chapters[volumeData.chapters.length - 1]
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
