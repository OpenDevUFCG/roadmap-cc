import React from "react";
import { Logo } from "../../assets/img/LogoRoadmap.jsx";
import { Container, Text, Title } from "./styles";

export const ImageText = ({ title, text }) => {
  return (
    <Container>
      <Logo />
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Container>
  );
};
