import { Container, Navigate, StyledNavLink } from "./styles"

export function Header() {
    return (
        <Container>
            <a href="https://www.portallacrei.com.br/" target="_blank">
                Lacrei
            </a>

            <Navigate>
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
            </Navigate>
        </Container>
    )
}