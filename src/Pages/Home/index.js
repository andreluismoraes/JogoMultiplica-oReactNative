import React from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Button,
  InfoText,
  Logo,
  ImageView,
  ButtonView,
} from "./style";

export default function Home() {
  const navigation = useNavigation();
  return (
    <Container>
      <Logo
        source={require("../../../assets/multiplica.jpg")}
        resizeMode="stretch"
      />
      <ButtonView>
        <Button onPress={() => navigation.navigate("Game")}>
          <InfoText>Jogar</InfoText>
        </Button>
      </ButtonView>
    </Container>
  );
}
