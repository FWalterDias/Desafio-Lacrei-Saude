import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        font-size: 62.5%;
        -webkit-font-smoothing: antialiased;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

   body{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR};
    color: ${({ theme }) => theme.COLORS.TERCIARY_COLOR};
    font-size: 1.6rem;
    outline: none;
   }

   body, button{
    font-family: 'Nunito', serif; 
   }

   a{
    text-decoration: none;
   }

   button, a{
    cursor: pointer;
    transition: filter 0.2s;
   }

   button:hover, a:hover{
    filter: brightness(0.9);
   }

   li{
    list-style: none;
   }

   .active{
    color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
   }
`;
