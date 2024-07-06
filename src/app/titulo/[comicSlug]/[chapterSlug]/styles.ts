import { devices } from '@/shared/constants/devices';
import styled from 'styled-components';

export const Container = styled.div`
  color: white;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 25px;
  max-width: 1238px;
  margin: 0 auto;
  justify-content: space-between;

  @media ${devices.md} {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 24px;

  a {
    color: white;
    text-decoration: none;

    &:hover {
      color: #eb3349;
    }
  }

  @media ${devices.md} {
    font-size: 18px;
  }
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 24px;

  &:disabled {
    color: #555;
    cursor: not-allowed;
  }
`;

export const ChapterSelect = styled.select`
  background-color: #444;
  color: white;
  border: 1px solid #555;
  padding: 10px;
  font-size: 12px;
  border-radius: 5px;
  appearance: none;
  cursor: pointer;

  @media ${devices.md} {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 100%;
  margin-bottom: 20px;
`;
