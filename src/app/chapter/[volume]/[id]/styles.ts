import styled from 'styled-components';

export const Container = styled.div`
  background-color: #333;
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
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 24px;
`;

export const ChapterSelect = styled.select`
  background-color: #444;
  color: white;
  border: 1px solid #555;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  appearance: none; /* Remove default dropdown arrow */
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMS43OTQ3TDYgNi43OTQ3TTEyIDEuNzk0N0w2IDYuNzk0NyIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgLz48L3N2Zz4='); /* Custom arrow */
  background-repeat: no-repeat;
  background-position: right 10px center;
  cursor: pointer;

  /* Custom arrow styling */
  option {
    background: #444;
    color: white;
  }

  &:hover {
    border-color: #666;
  }

  &:focus {
    outline: none;
    border-color: #888;
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
