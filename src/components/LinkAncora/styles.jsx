import styled, { keyframes } from "styled-components"

const increaseSize = keyframes`
    from {
        transform: scale(1);
    }

    to {
        transform: scale(1.05);
    }
`

export const LinkWrapper = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.875rem;
    text-decoration: none;
    font-weight: 700;
    font-size: 1rem;
    margin: 0;
    color: var(--orange);

    &:hover {
        animation: ${increaseSize} 0.5s ease-in-out forwards;
    }
    
`
