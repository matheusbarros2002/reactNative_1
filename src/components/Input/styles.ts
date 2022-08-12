import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.TextInput`
  width: 100%;
  padding: 16px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  border-radius: 8px;
  font-size: 15px;
  font-weight: bold;
`;
