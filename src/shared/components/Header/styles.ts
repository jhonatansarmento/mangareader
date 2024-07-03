import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

export const Image = styled.img`
  width: 150px;
  height: 200px;
  object-fit: cover;
  margin-right: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  color: #fff;
`;

export const Rating = styled.div`
  font-size: 18px;
  color: #ffcc00;
  margin-bottom: 10px;
`;

export const Info = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
`;

export const InfoItem = styled.div`
  margin-bottom: 5px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const StatusInfo = styled.div`
  display: flex;
  gap: 20px;
  font-size: 14px;
  color: #666;
`;

export const StatusItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
