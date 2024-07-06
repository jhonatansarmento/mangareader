// src/app/meumanga/[slug]/styles.ts

import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
  color: #fff;
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Item = styled.div`
  width: 45%;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Image = styled.img`
  width: 100px;
  height: auto;
  cursor: pointer;
`;

export const ItemTitle = styled.h3`
  font-size: 20px;
  margin: 10px;
  cursor: pointer;
`;

export const Rating = styled.p`
  margin: 0 10px;
  color: #f39c12;
`;

export const LatestChapter = styled.p`
  margin: 0 10px;
  color: #3498db;
  cursor: pointer;
`;

export const ReleaseDate = styled.p`
  margin: 0 10px 10px 10px;
  color: #888;
`;

export const VolumeList = styled.div`
  margin: 20px 0;
`;

export const VolumeItem = styled.div`
  margin-bottom: 20px;
`;

export const VolumeTitle = styled.h2`
  font-size: 1.5em;
  margin: 10px 0;
`;

export const ChapterItem = styled.div`
  margin: 5px 0;
`;

export const ChapterTitle = styled.div`
  font-size: 1.2em;
  color: blue;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
