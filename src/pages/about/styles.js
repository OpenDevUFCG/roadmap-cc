import styled from "styled-components";

export const About = styled.div`
  
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 640px) {
    justify-content: center;
  }
`;
export const Texts = styled.div`
  
  width: 80vw;
  display: flex;
  justify-content: space-between;

  @media (max-width: 480px) {
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
  }
`;

export const Wrapper = styled.div`
  
  width: 84vw;
`;

export const Title = styled.div`
  
  font-size: 24px;
  color: var(--light-green);
  font-weight: bold;

  @media (max-width: 480px) {
    margin-top: 4vh;
  }  
`;

export const Paragraph = styled.div`
  
  font-size: 16px;
  color: var(--dark-grey);  
  margin-top: 4vh;
`;

export const Graph = styled.div`
  
  margin-top: 2vh;

`;