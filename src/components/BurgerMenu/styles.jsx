import styled from "styled-components";

export const Container = styled.div`
    padding: 0;
    margin: 0;

    button {
        border: none;
        background: none;

        svg {
            font-size: 3.5rem;
        }
    }
`

export const Sidebar = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    width: 30vw;
    background-color: white;
    padding: 7rem 4rem;

    .close {
        position: absolute;
        right: 1.5vw;
        top: 2vh;
        
        svg {
            font-size: 2rem;
        }
    }
`;

export const Backdrop = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 70vw;
    background-color: rgba(105,105,105,0.5);
`