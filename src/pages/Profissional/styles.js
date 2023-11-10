import styled, { keyframes } from "styled-components";

const fadeInProfisisonalText = keyframes`
    from {
        opacity: 0;
        transform: translatex(-50%);
}`;

const fadeInProfissionalImg = keyframes`
    from {
        opacity: 0;
        transform: translateX(50%);
}`;

export const ContainerProfissional = styled.div`
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

export const ContainterImgProfissional = styled.div`
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

    animation: ${fadeInProfissionalImg} .5s ease-in-out;
`

export const ContainerTextsProfissional = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    @media (min-width: 1200px) {
        grid-area: main;
        height: 100%;
        align-items: flex-start;
        width: 52rem;
    }

    animation: ${fadeInProfisisonalText} .5s ease-in-out;
`

export const TitlePessoaProfissional = styled.h1`
    color: ${({ theme }) => theme.COLORS.SECONDARY_COLOR};
    font-size: 4.8rem;
    font-weight: 700; 
    text-align: center;
`

export const TextPessoaProfissional = styled.p`
    margin-top: 3.2rem;

    color: ${({ theme }) => theme.COLORS.TERCIARY_COLOR};
    font-size: 2.4rem;
    font-weight: 400;

    padding-left: 2.4rem;
    border-left: .5rem solid ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
`