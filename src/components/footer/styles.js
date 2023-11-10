import { NavLink } from "react-router-dom";
import styled, {keyframes} from "styled-components";

const fadeInHFooter = keyframes`
    from {
        opacity: 0;
        transform: translateY(100%);
}`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    width: 100%;
    padding: 3.2rem 0 0 3.2rem;

    border-top: solid #B0E0D3 1px;
    margin-top: 5rem;

    @media (min-width: 1200px) {
        margin-top: 0;
        padding: 3.2rem 0 0 6.4rem;
    }

    animation: ${fadeInHFooter} 1s ease-in-out;
`

export const NavigateFooter = styled.ul`
    display: flex;
    align-items: center;
    gap: 2rem;

    padding-top: 1.6rem;
`

export const StyledNavLink = styled(NavLink)`
    text-align: center;

    li{
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.SECONDARY_COLOR};
        font-style: normal;
        font-weight: 400;

        &:hover{
            opacity: 0.7;
        }
    }

    &.active{
        li{
            color: ${({ theme }) => theme.COLORS.SECONDARY_COLOR};
            font-weight: 700;
        }
    }
`

export const SocialMedias = styled.div`
    display: flex;
    gap: 1.6rem;

    img{
        width: 3.2rem;
        cursor: pointer;
    }
`

export const Logo = styled.p`
    color: ${({ theme }) => theme.COLORS.TERCIARY_COLOR};
    font-size: 1.2rem;
    font-weight: 400; 

    margin-bottom: .8rem;
`