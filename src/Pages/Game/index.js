import React, { useEffect, useState, useMemo } from "react";

import { Container, ButtonView, Numbers, TextInfo } from "./style";

/**import component button */
import Button from "../../Components/Button";

export default function Game() {
  const [numero1, setNumero] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [acerto, setAcerto] = useState(0);

  const sorteio = () => {
    setNumero(Math.floor(Math.random() * 10));
    setNumero2(Math.floor(Math.random() * 10));
  };

  useEffect(() => {
    sorteio();
  }, []);

  const handleSort = (item) => {
    sorteio();
    if (item === numero1 * numero2) {
      setAcerto(acerto + 1);
    } else {
      setAcerto(acerto - 1);
    }
  };

  const handleResult = useMemo(() => {
    const result = [];
    const aleatorio = Math.floor(Math.random() * 4);
    for (let i = 0; i < 4; i++) {
      if (i === aleatorio) {
        result.push(numero1 * numero2);
      } else {
        result.push(Math.floor(Math.random() * 100));
      }
    }

    return result.map((item) => (
      <Button key={Math.random()} onPress={() => handleSort(item)}>
        {item}
      </Button>
    ));
  }, [numero1]);

  const mostrar = handleResult;

  return (
    <Container>
      <Numbers>
        {numero1}X{numero2}
      </Numbers>
      <ButtonView>{mostrar}</ButtonView>
      <TextInfo>Acertos</TextInfo>
      <TextInfo>{acerto}</TextInfo>
    </Container>
  );
}
