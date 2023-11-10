import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

const fadeInHeader = keyframes`
    from {
        opacity: 0;
        transform: translateY(-100%);
}`;

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    padding: 0 3.2rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};

    a{
        font-size: 3.2rem;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
    }

    @media (min-width: 1200px){
        padding: 0 6.4rem;
    }

    animation: ${fadeInHeader} 1s ease-in-out;
`;

export const Navigate = styled.ul`
    display: flex;
    align-items: center;
    gap: 1rem;

    padding: 2rem 0;

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
            text-decoration: underline;
        }
    }

    &.active{
        li{
            color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
            font-weight: 700;
        }
    }
`

