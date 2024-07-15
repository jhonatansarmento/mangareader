'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import * as S from './styles';

interface LastRead {
  chapterSlug: string;
  chapterTitle: string;
}

interface RecentChapterProps {
  comicSlug: string;
}

const RecentChapter = ({ comicSlug }: RecentChapterProps) => {
  const [lastRead, setLastRead] = useState<LastRead | null>(null);

  useEffect(() => {
    const storedLastRead = localStorage.getItem(`lastRead-${comicSlug}`);
    if (storedLastRead) {
      setLastRead(JSON.parse(storedLastRead));
    }
  }, [comicSlug]);

  if (!lastRead) {
    return null;
  }

  const formatChapterTitle = (chapterTitle: string) => {
    const match = chapterTitle.match(/Capítulo (\d+)/i);
    if (match && match[1]) {
      return `Cap ${match[1]}`;
    }
    return chapterTitle;
  };

  return (
    <S.RecentChapterContainer>
      <Link href={`/titulo/${comicSlug}/${lastRead.chapterSlug}`}>
        <S.RecentChapterLink>
          Continue: {formatChapterTitle(lastRead.chapterTitle)}
        </S.RecentChapterLink>
      </Link>
    </S.RecentChapterContainer>
  );
};

export default RecentChapter;
