import styled from "styled-components";

export const Container = styled.div`
    min-width: 37.5rem;
    max-width: 144rem;
    min-height: 100vh;

    background-color: ${(({ theme }) => theme.COLORS.BACKGROUND_COLOR)};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    margin: 0 auto;
`