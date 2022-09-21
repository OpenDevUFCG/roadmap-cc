import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: ${(props) => (props.contentAlign ? props.contentAlign : "center")};
  width: 100%;

  @media (max-width: 640px) {
    justify-content: center;
  }
`;

export const Content = styled.p`
  font-size: 1.8rem;
  margin: 0;
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
  width: ${(props) => (props.width ? props.width : "auto")};
  color: ${(props) => (props.color ? props.color : "#292D34")};

  @media (max-width: 640px) {
    text-align: center;
    font-size: 1.6rem;
    width: 85%;
  }
`;
