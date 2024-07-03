import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const VolumeContainer = styled.div`
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
`;

export const Accordion = styled.div`
  border-bottom: 1px solid #ccc;

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
  background-color: #f9f9f9;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const AccordionTitle = styled.div`
  font-size: 18px;
`;

export const AccordionDetails = styled.div`
  background-color: #f9f9f9;
  padding: 10px 15px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  padding: 8px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

export const ListItemText = styled.a`
  font-size: 16px;
  cursor: pointer;
  color: #000;

  &:hover {
    text-decoration: underline;
  }
`;

export const ImageStyle = styled.img`
  width: 100%;
  height: auto;
`;

export const NavigationButton = styled.button`
  padding: 10px 20px;
  margin: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
  }
`;
