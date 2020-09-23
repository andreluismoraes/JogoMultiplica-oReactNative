import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  margin: 50px 20px;
  align-items: center;
`;

export const ButtonView = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Numbers = styled.Text`
  font-size: 40px;
  font-weight: bold;
`;

export const ContainerButton = styled.View`
  flex: 0.1;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

export const TextInfo = styled(Numbers)`
  font-size: 28px;
  margin-bottom: 24px;
`;
