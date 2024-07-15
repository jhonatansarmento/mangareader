import { devices } from '@/shared/constants/devices';
import styled from 'styled-components';

export const Container = styled.div`
  color: white;
  padding: 20px 0;
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
  justify-content: space-between;
  background-color: #555;
  width: 100%;
  padding: 10px;

  @media ${devices.md} {
    width: 100%;
  }
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 24px;

  &:disabled {
    color: #303030;
    cursor: not-allowed;
  }

  svg {
    display: flex;
  }
`;

export const ChapterSelect = styled.select`
  width: 100%;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 12px;
  border-radius: 5px;
  appearance: none;
  cursor: pointer;
  text-align: center;
  option {
    background-color: #555;
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
