import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-color: #3f3e3e;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #fff;
`;

export const VolumeContainer = styled.div`
  background-color: #262626;
  border-radius: 4px;
  overflow: hidden;
`;

export const Accordion = styled.div`
  &:last-child {
    border-bottom: none;
  }
`;

export const AccordionSummary = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;

  &:hover {
    background-color: #232222;
  }
`;

export const AccordionTitle = styled.div`
  font-size: 18px;
  color: #fff;
`;

export const AccordionDetails = styled.div`
  background-color: #4d4d4d;
  padding: 10px 44px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  padding: 8px 0;
  border-bottom: 1px solid #818181;

  a {
    text-decoration: none;
    color: inherit;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const ListItemText = styled.span`
  font-size: 14px;
  color: #a3a3a3;

  &:hover {
    color: #fff;
  }
`;
