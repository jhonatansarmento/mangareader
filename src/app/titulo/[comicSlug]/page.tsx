'use client';

import Header from '@/shared/components/Header';
import comics, { Chapter, Comic, Volume } from '@/shared/constants/volumes';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import * as S from './styles';

const ComicDetail = () => {
  const params = useParams();
  const comicSlug = params.comicSlug;
  const comic: Comic | undefined = comics.find(
    (comic) => comic.slug === comicSlug
  );

  if (!comic) {
    return <div>Comic not found</div>;
  }

  const getTotalChapters = (comic: Comic): number => {
    return comic.volumes.reduce(
      (total, volume) => total + volume.chapters.length,
      0
    );
  };

  const getLatestChapters = (comic: Comic): Chapter[] => {
    const chapters = comic.volumes.flatMap((volume: Volume) => volume.chapters);
    return chapters.slice(-10).reverse();
  };

  return (
    <>
      <Header />
      <S.Container>
        <S.MainSection>
          <S.MangaDetails>
            <S.MangaImage src={comic.image} alt={comic.title} />
            <S.MangaInfo>
              <S.MangaTitle>{comic.title}</S.MangaTitle>
              <S.MangaAuthor>{comic.author}</S.MangaAuthor>
              <S.MangaGenre>{comic.genre.join(', ')}</S.MangaGenre>
              <S.MangaSynopsis>{comic.synopsis}</S.MangaSynopsis>
              <S.MangaChapters>
                {getTotalChapters(comic)} Capítulos
              </S.MangaChapters>
              <S.MangaRating>Avaliação: {comic.rating}/5</S.MangaRating>
            </S.MangaInfo>
          </S.MangaDetails>
          <S.Divider />
          {!comic.completed && (
            <>
              <S.LatestChaptersList>
                <h3>Últimos Capítulos</h3>
                {getLatestChapters(comic).map(
                  (chapter: Chapter, index: number) => (
                    <S.ChapterItem key={index}>
                      <Link href={`/titulo/${comic.slug}/${chapter.slug}`}>
                        <S.ChapterTitle>{chapter.title}</S.ChapterTitle>
                      </Link>
                    </S.ChapterItem>
                  )
                )}
              </S.LatestChaptersList>
            </>
          )}
          <S.VolumesList>
            <h3>Volumes Disponíveis</h3>
            {comic.volumes.map((volume: Volume, index: number) => (
              <>
                <S.VolumeItem key={index}>
                  <S.VolumeImage src={volume.image} alt={volume.title} />
                  <S.VolumeInfo>
                    <h3>{volume.title}</h3>
                    {volume.chapters.map(
                      (chapter: Chapter, chapterIndex: number) => (
                        <S.ChapterItem key={chapterIndex}>
                          <Link href={`/titulo/${comic.slug}/${chapter.slug}`}>
                            <S.ChapterTitle>{chapter.title}</S.ChapterTitle>
                          </Link>
                        </S.ChapterItem>
                      )
                    )}
                  </S.VolumeInfo>
                </S.VolumeItem>
                <S.Divider />
              </>
            ))}
          </S.VolumesList>
        </S.MainSection>
      </S.Container>
    </>
  );
};

export default ComicDetail;
