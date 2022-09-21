import React from "react";
import { Container, Text } from "./styles";

const Title = ({ text, width, textAlign, contentAlign, color }) => {
  return (
    <Container contentAlign={contentAlign}>
      <Text width={width} textAlign={textAlign} color={color}>
        {text}
      </Text>
    </Container>
  );
};

export default Title;
