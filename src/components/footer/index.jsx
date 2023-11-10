import facebook from "../../assets/FacebookLogo.svg";
import instagram from "../../assets/InstagramLogo.svg";
import linkedin from "../../assets/LinkedinLogo.svg";
import { Container, Logo, NavigateFooter, SocialMedias, StyledNavLink } from "./styles.js";

export function Footer() {
    return (
        <Container>
            <NavigateFooter>
                <StyledNavLink
                    className={({ isActive }) => isActive ? "active" : ""}
                    to="/home"
                >
                    <li>Home</li>
                </StyledNavLink>

                <StyledNavLink
                    className={({ isActive }) => isActive ? "active" : ""}
                    to="/pessoaUsuaria">
                    <li>Pessoa Usuaria</li>
                </StyledNavLink>

                <StyledNavLink
                    className={({ isActive }) => isActive ? "active" : ""}
                    to="/profissional">
                    <li>Profissional</li>
                </StyledNavLink>
            </NavigateFooter>

            <SocialMedias>
                <a href="https://www.facebook.com/lacrei.saude/" target="_blank">
                    <img src={facebook} alt="facebook-logo" />
                </a>

                <a href="https://www.instagram.com/lacrei.saude/" target="_blank">
                    <img src={instagram} alt="instagram-logo" />
                </a>

                <a href="https://www.linkedin.com/company/lacrei-saude/" target="_blank">
                    <img src={linkedin} alt="linkeidn-logo" />
                </a>
            </SocialMedias>

            <Logo>
                Desafio Front-end Lacrei
            </Logo>
        </Container>
    )
}