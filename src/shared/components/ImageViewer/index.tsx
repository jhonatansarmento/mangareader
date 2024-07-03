'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, ImageStyle } from './styles';
import volumes from '@/shared/constants/volumes';

const ImageViewer: React.FC = () => {
  const searchParams = useSearchParams();
  const volumeId = searchParams.get('volumeId');
  const chapterId = searchParams.get('chapterId');
  const title = searchParams.get('title');
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    if (volumeId && chapterId) {
      console.log(`Searching for Volume ${volumeId}, Chapter ${chapterId}`);
      const volume = volumes.find((v) =>
        v.title.includes(`Volume ${volumeId}`)
      );
      console.log('Found volume:', volume);
      const chapter = volume?.chapters.find((c) => c.id === chapterId);
      console.log('Found chapter:', chapter);
      if (chapter) {
        setImages(chapter.imageUrls);
      }
    }
  }, [volumeId, chapterId]);

  return (
    <Container>
      <h1>{title || 'HQ Reader'}</h1>
      {images.length > 0 ? (
        <div>
          {images.map((image, index) => (
            <ImageStyle key={index} src={image} alt={`Page ${index + 1}`} />
          ))}
        </div>
      ) : (
        <p>sem imagens</p>
      )}
    </Container>
  );
};

export default ImageViewer;
