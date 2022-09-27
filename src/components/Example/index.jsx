import React from "react";
import { Container, Text } from "./styles";

/*
Componente que exemplifica como pode ser o formato dos seus componentes
*/

export const Example = ({ textColor }) => {
  return (
    <Container>
      <Text style={{ color: textColor }}>Esse componente é apenas um exemplo</Text>
    </Container>
  );
};
