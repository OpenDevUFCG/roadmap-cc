import React from "react";
import { Container, Text } from "./styles";

const Title = ({ text, width = "auto", textAlign = "center", contentAlign = "center", color = "var(--dark-grey)" }) => {
  return (
    <Container contentAlign={contentAlign}>
      <Text width={width} textAlign={textAlign} color={color}>
        {text}
      </Text>
    </Container>
  );
};

export default Title;
