import styled, {keyframes} from "styled-components";
import { Link } from "react-router-dom";

const fadeInMainText = keyframes`
    from {
        opacity: 0;
        transform: translatex(-50%);
}`;

const fadeInMainImg = keyframes`
    from {
        opacity: 0;
        transform: translateX(50%);
}`;


export const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    padding: 0 3.2rem;
    margin-top: 6.4rem; 

    @media (min-width: 1200px) {
        display: grid;
        grid-template-areas: "main aside";
        padding: 0 6.4rem;
    }
`

export const ContainterImgHome = styled.div`
    width: 100%;
    text-align: center;

    img{
        width: min(55rem, 100%);
        max-height: 42rem;
    }

    @media (min-width: 1200px) {
        grid-area: aside;
        
        img{
            width: 55rem;
        }
    }

    animation: ${fadeInMainImg} .5s ease-in-out;
`

export const ContainerTextsHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    @media (min-width: 1200px) {
        grid-area: main;
        height: 100%;
        width: 45rem;
    }

    animation: ${fadeInMainText} .5s ease-in-out;
`

export const TitleHome = styled.h1`
    color: ${({ theme }) => theme.COLORS.SECONDARY_COLOR};
    font-size: 4.8rem;
    font-weight: 700; 
`

export const TextHome = styled.p`
    margin-top: 3.2rem;

    color: ${({ theme }) => theme.COLORS.TERCIARY_COLOR};
    font-size: 2.4rem;
    font-weight: 400;
`

export const ButonsArea = styled.div`
    display: flex;
    justify-content: center;
    gap: 3.5rem;

    width: 100%;

    margin-top: 3rem;

    @media (min-width: 1200px) {
        justify-content: flex-start;
        gap: 7rem;

        margin-top: 4.8rem;
    }
`

export const ButtonPessoaUsuaria = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 50%;
    max-width: 19rem;
    height: 4.8rem;

    border-radius: .8rem;
    border: none;
    background: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    color: #FFFFFF;
    font-size: 1.8rem;
    font-weight: 700;

    &:hover{
        opacity: 0.7;
    }
`

export const ButtonProfissional = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 50%;
    max-width: 19rem;
    height: 4.8rem;

    border-radius: .8rem;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);    
    border: 2px solid ${({ theme }) => theme.COLORS.PRIMARY_COLOR};


    color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
    font-size: 1.8rem;
    font-weight: 700;

    &:hover{
        opacity: 0.7;
    }
`