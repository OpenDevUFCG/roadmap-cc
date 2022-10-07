import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: ${(props) => props.contentAlign};
  width: 100%;
  margin-bottom: 2.25rem;

  @media (max-width: 640px) {
    justify-content: center;
  }
`;

export const Text = styled.h2`
  width: ${(props) => props.width};
  margin: 0;
  text-align: ${(props) => props.textAlign};
  font-size: 3.2rem;
  font-weight: 700;
  color: ${(props) => props.color};

  @media (max-width: 640px) {
    text-align: center;
    font-size: 2.4rem;
    width: 85%;
  }
`;
