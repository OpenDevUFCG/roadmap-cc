import styled from "styled-components";
import { BsInstagram, BsGithub, BsDiscord } from 'react-icons/bs';
import { SiOpencollective } from 'react-icons/si';
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
            transform: scale(1.05);

        }
        &.nav-checked{
            color: var(--light-orange);
            text-decoration: underline;
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
    }
`

export const Instagram = styled(BsInstagram)`
    color: var(--white);
    font-size: 2rem;
`

export const OpenCollective = styled(SiOpencollective)`
    color: var(--white);
    font-size: 2.1rem;
`

export const Github = styled(BsGithub)`
    color: var(--white);
    font-size: 2rem;
`

export const Discord = styled(BsDiscord)`
    color: var(--white);
    font-size: 1.9rem;
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
`