import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  color: #ffffff;

  h3 {
    margin-bottom: 10px;
  }
`;

export const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const MangaDetails = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
  border-radius: 10px;
`;

export const MangaImage = styled.img`
  max-width: 200px;
  border-radius: 10px;
`;

export const MangaInfo = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

export const MangaTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #ffffff;
`;

export const MangaAuthor = styled.p`
  font-size: 18px;
  margin-bottom: 5px;
  color: #bbbbbb;
`;

export const MangaGenre = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  color: #888888;
`;

export const MangaSynopsis = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
  color: #dddddd;
`;

export const MangaChapters = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  color: #dddddd;
`;

export const MangaRating = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  color: #f39c12;
`;

export const VolumesList = styled.div`
  min-width: 50%;
  margin-top: 20px;
`;

export const VolumeItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
`;

export const VolumeImage = styled.img`
  max-width: 176px;
  border-radius: 5px;
`;

export const VolumeInfo = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

export const ChapterItem = styled.div`
  margin: 5px 0;
`;

export const ChapterTitle = styled.p`
  font-size: 16px;
  color: #888;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const LatestChaptersList = styled.div`
  margin-top: 20px;
  border-radius: 10px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #888;
  margin: 20px 0;
`;
