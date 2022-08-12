import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;

  width: 50%;
  height: 45%;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_600};
  margin: 0 10px;
  border-radius: 10px;
`;
