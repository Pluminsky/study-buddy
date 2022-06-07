import styled from 'styled-components';

export const StyledButtton = styled.button`
  width: 22.58px;
  height: 22.58px;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 50px;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 100%;
    width: 100%;
  }
`;
