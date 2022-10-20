import styled from "styled-components";
import Select from 'react-select';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3.7rem 4.4rem;
    background-color: rgba(252, 252, 252, 0.6);
`

export const Navbar = styled.div`
    display: flex;
    gap: 2.8rem;
    & > * {
        font-size: 2.3rem;
        text-decoration: none;
        color: var(--dark-blue);
        font-weight: 700;
        font-family: 'Rambla';
        letter-spacing: 0.18rem;
        transition: all 0.15s ease-out;
        line-height: 3rem;

        &:hover {
            color: var(--light-orange);
        }
        &.nav-checked{
            color: var(--light-orange);
            text-decoration: underline;
        }
    }

    @media (max-width: 768px){
        flex-direction: column;
        gap: 2vh;
        & > * {
            font-size: 1.8rem;
        }
    }
`

export const AccessBar = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1.4rem;

    & > a {
        width: 3.5rem;
        height: 3.5rem;
        background-color: var(--dark-blue);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--white);
        transition: all 0.15s ease-in-out;

        :hover {
            transform: scale(1.08);
        }
    }

    @media (max-width: 768px){
        margin-top: 3vh;
        display: grid;
        grid-template-columns: 15vw 1fr;
        column-gap: 0;
        row-gap: 3vh;
    }
`

export const CustomSelect = styled(Select)`
    & .Select__control {
        border: none;
        box-shadow: none;

        &:hover{
            cursor: pointer;
        }
    }

    & .Select__indicator-separator {
        display: none;
    }

    & .Select__value-container {
        padding: 0 0 0 0.5rem;
    }

    & .Select__single-value {
        font-size: 2rem;
        margin: 0;
        color: var(--dark-blue);
        font-weight: 700;
    }

    & .Select__indicator {
        padding: 0;
        & > svg {
            fill: var(--dark-blue);
            width: 3rem;
            height: 2.5rem;
        }
    }

    & .Select__menu-list {
        padding: 0;
    }

    & .Select__option {
        color: var(--dark-blue);
        font-weight: 700;
        font-size: 1.5rem;
        border: 0.15rem solid var(--light-grey);
    }

    @media (max-width: 428px){
        & .Select__control{
            min-width: max-content;
        }

        & .Select__single-value {
            font-size: 1.6rem;
        }

        & .Select__menu-list {
            width: max-content;
        }
    }
`