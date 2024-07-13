import { devices } from '@/shared/constants/devices';
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

  @media ${devices.md} {
    gap: 2.5rem;
  }
`;

export const Item = styled.div`
  display: flex;
  width: 14.5rem;
  overflow: hidden;

  @media ${devices.md} {
    width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  flex-shrink: 0;
  padding-right: 4px;
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
  width: fit-content;
`;

export const ReleaseDate = styled.p`
  margin: 0;
  color: #888;
`;

export const Divider = styled.div`
  width: 1px;
  background-color: #888;

  @media ${devices.md} {
    height: 1px;
    width: 100%;
  }
`;

interface StatusFlagProps {
  completed: boolean;
}

export const StatusFlag = styled.div<StatusFlagProps>`
  padding: 2px 8px;
  background-color: ${({ completed }) => (completed ? '#4CAF50' : '#FF9800')};
  color: white;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  width: fit-content;
`;
