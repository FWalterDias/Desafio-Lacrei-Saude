import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

const fadeInHeader = keyframes`
    from {
        opacity: 0;
        transform: translateY(-100%);
}`;

export const Container = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    padding: 0.5rem 1rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};

    a{
        font-size: 3.6rem;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};

        &:hover{
            opacity: 0.7;
        }
    }

    @media (min-width: 1200px){
        padding: 0 6.4rem;

        flex-direction: row;
        justify-content: space-between;
        padding: 2rem 6.4rem;

        a{
            font-size: 3.2rem;
        }
    }

    animation: ${fadeInHeader} 1s ease-in-out;
`;

export const Navigate = styled.ul`
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (min-width: 1200px){
        gap: 4rem;
    }
`;

export const StyledNavLink = styled(NavLink)`
    text-align: center;

    li{
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.SECONDARY_COLOR};
        font-style: normal;
        font-weight: 700;

        &:hover{
            opacity: 0.7;
        }
    }

    &.active{
        li{
            color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
            font-weight: 700;
        }
    }
`

