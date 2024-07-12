import styled from 'styled-components';

export const FloatButton = styled.button`
  position: fixed;
  bottom: 60px;
  right: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  &:focus {
    outline: none;
  }
`;
