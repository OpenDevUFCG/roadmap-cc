import React from "react";
import { Container, Content } from "./styles";

const Text = ({ text, width = "auto", textAlign = "center", contentAlign = "center", color = "var(--dark-grey)" }) => {
  return (
    <Container contentAlign={contentAlign}>
      <Content width={width} textAlign={textAlign} color={color}>
        {text}
      </Content>
    </Container>
  );
};

export default Text;
