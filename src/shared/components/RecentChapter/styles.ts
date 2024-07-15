import styled from 'styled-components';

export const RecentChapterContainer = styled.div`
  margin-top: 10px;
  background-color: #10247d;
  padding: 5px 10px;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  display: flex;

  &:hover {
    background-color: #071659;
  }
`;

export const RecentChapterLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
`;
