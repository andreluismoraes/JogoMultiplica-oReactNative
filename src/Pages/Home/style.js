import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 50px;
  background-color: rgba(233, 30, 99, 0.7);
  border-radius: 50px;
`;

export const ButtonView = styled.View`
  position: absolute;
  top: 87%;
`;

export const InfoText = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: white;
`;

export const Logo = styled.Image`
  width: 100%;
  height: 100%;
`;
