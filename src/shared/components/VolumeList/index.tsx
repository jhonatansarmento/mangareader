'use client';

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Link from 'next/link';
import * as S from './styles';
import comics from '@/shared/constants/volumes';

export default function VolumeList() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleChange = (panel: string) => () => {
    setExpanded(expanded === panel ? null : panel);
  };

  return (
    <S.Container>
      <S.Title>Todos os Volumes</S.Title>
      <S.VolumeContainer>
        {comics.map((comic) =>
          comic.volumes.map((volume, index) => (
            <S.Accordion key={index}>
              <S.AccordionSummary onClick={handleChange(`panel${index}`)}>
                <S.AccordionTitle>{volume.title}</S.AccordionTitle>
                {expanded === `panel${index}` ? (
                  <FaChevronUp color='#fff' />
                ) : (
                  <FaChevronDown color='#fff' />
                )}
              </S.AccordionSummary>
              {expanded === `panel${index}` && (
                <S.AccordionDetails>
                  <S.List>
                    {volume.chapters.map((chapter, idx) => (
                      <S.ListItem key={idx}>
                        <Link
                          href={`/chapter/${encodeURIComponent(
                            volume.title
                          )}/${encodeURIComponent(chapter.id)}`}
                        >
                          <S.ListItemText>{chapter.title}</S.ListItemText>
                        </Link>
                      </S.ListItem>
                    ))}
                  </S.List>
                </S.AccordionDetails>
              )}
            </S.Accordion>
          ))
        )}
      </S.VolumeContainer>
    </S.Container>
  );
}
