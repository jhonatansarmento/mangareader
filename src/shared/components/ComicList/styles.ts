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
  justify-content: flex-start;
  gap: 4.5rem;
`;

export const Item = styled.div`
  display: flex;
  width: 14.5rem;
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
  justify-content: space-between;
`;

export const ImageWrapper = styled.div`
  flex-shrink: 0;
`;

export const Image = styled.img`
  width: 100px;
  height: auto;
  cursor: pointer;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`;

export const ItemTitle = styled.h3`
  font-size: 20px;
  margin: 10px 0;
  cursor: pointer;
`;

export const LatestChapter = styled.p`
  display: flex;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  background-color: #333;
  padding: 2px 10px;
  border-radius: 10px;
`;

export const ReleaseDate = styled.p`
  margin: 0;
  color: #888;
`;
