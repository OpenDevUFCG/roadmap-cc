import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: ${(props) => props.contentAlign};
  width: 100%;

  @media (max-width: 640px) {
    justify-content: center;
  }
`;

export const Content = styled.p`
  font-size: 1.8rem;
  margin: 0;
  text-align: ${(props) => props.textAlign};
  width: ${(props) => props.width};
  color: ${(props) => props.color};

  @media (max-width: 640px) {
    text-align: center;
    font-size: 1.6rem;
    width: 85%;
  }
`;
