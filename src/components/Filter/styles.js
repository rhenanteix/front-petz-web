import styled from "styled-components";

export const WrapperFilter = styled.section`
  margin-bottom: 32px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  h3 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 14px;
    text-transform: uppercase;
    margin-right: 8px;
  }
`;

export const Select = styled.select`
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  color: #ffffff;
  border: none;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;
